// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

module contract::tournament {
    // Imports.
    use std::option::{Self, Option};
    use std::vector;
    use std::hash::sha3_256;

    use sui::digest::{Self, Sha3256Digest};
    use sui::object::{Self, UID, ID};
    use sui::sui::SUI; // coin type
    use sui::balance::{Self, Balance};
    use sui::tx_context::{Self, TxContext};
    use sui::coin::{Self, Coin};
    use sui::transfer;
    use sui::dynamic_object_field as dof;

    // Structs.
    struct Tournament has key {
        id: UID,
        players: vector<address>,
        prize: Balance<SUI>,
        capacity: u64,
        status: u64, // Status -> 0: pending | 1: running | 2: finished
        round: u64,
        matches: vector<address>,
    }

    struct Match has key, store {
        id: UID,
        last_move_time: u64,
        player_0: address,
        player_1: address,
        hash_0: Option<Sha3256Digest>,
        hash_1: Option<Sha3256Digest>,
        secret_0: Option<vector<u8>>,
        secret_1: Option<vector<u8>>,
        round: u64,
        // winner: Option<address>,
    }

    // Player default entry fee in MIST.
    const ENTRY_FEE: u64 = 10000;

    // Tournament error codes.
    const ECannotStartRound: u64 = 4;
    const ETournamentEnd: u64 = 5;

    // Player error codes.
    const ENotEnoughMoney: u64 = 0;
    const EMaxPlayersReached: u64 = 1;
    const EPlayerNoExist: u64 = 2;
    const ECannotWithdraw: u64 = 3;
    const EPlayerAlreadyExists: u64 = 6;
    const ENotCorrectSecret: u64 = 8;
    const EPlayerNotFound: u64 = 9;
    const EHashNotFound: u64 = 10;

    // Match error codes.
    const EMatchNotFound: u64 = 7;
    const EMatchStillRunning: u64 = 11;
    
    /// Creates and shares tournament.
    entry fun create(capacity: u64, player_coin: Coin<SUI>, ctx: &mut TxContext) {
        // Make sure player has given enough MIST.
        assert!(coin::value(&player_coin) >= ENTRY_FEE, ENotEnoughMoney);

        // Give MIST back in case given fee is bigger or equal to entry_fee.
        calc_player_change(&mut player_coin, ctx); 
    
        // Create a new tournament.
        let tournament = Tournament {
            id: object::new(ctx),
            players: vector[tx_context::sender(ctx)],
            prize: coin::into_balance(player_coin),
            capacity,
            status: 0,
            round: 0,
            matches: vector::empty(),
        };

        // Make tournament shared obj so that every player can access it.
        transfer::share_object(tournament);
    }

    /// Handles the process of a player joining a tournament.
    entry fun join(tournament: &mut Tournament, player_coin: Coin<SUI>, ctx: &mut TxContext) {
        // Check if more players can join.
        assert!(tournament.capacity < vector::length(&tournament.players), EMaxPlayersReached);

        // Check if player is already in current tournament.
        assert!(vector::contains(&tournament.players, &tx_context::sender(ctx)), EPlayerAlreadyExists);

        // Make sure player has given enough mist.
        assert!(coin::value(&player_coin) >= ENTRY_FEE, ENotEnoughMoney);

        // Determine if we should split player_coin and give back change.
        calc_player_change(&mut player_coin, ctx); 

        vector::push_back(&mut tournament.players, tx_context::sender(ctx));
        balance::join(&mut tournament.prize, coin::into_balance(player_coin));
        
        // Once we reach capacity, start the tournament.
    }

    /// Calculates how the player is going to pay their tournament fee.
    /// If player's coin value is bigger than the required fee, then
    /// calculate their change and split their coin so that player_coin == ENTRY_FEE.
    fun calc_player_change(player_coin: &mut Coin<SUI>, ctx: &mut TxContext) {
        if(coin::value(player_coin) > ENTRY_FEE) {
            // Calculate how much change the player should get back
            let change = coin::value(player_coin) - ENTRY_FEE;
            // Split change into a new coin and transfer back to player
            let rebate = coin::split(player_coin, change, ctx);
            transfer::transfer(rebate, tx_context::sender(ctx));
        };
    }

    /// Withdraws player's participation to tournament.
    entry fun withdraw(tournament: &mut Tournament, ctx: &mut TxContext) {
        // Make sure tournament has not started :: state 0.
        assert!(tournament.status == 0, ECannotWithdraw);

        // Find player's index in tournament's players vector.
        let (player_exists, player_idx) = vector::index_of(&tournament.players, &tx_context::sender(ctx));
        
        // Make sure player had entered the tournament.
        assert!(player_exists, EPlayerNoExist);

        // Remove player from tournament.
        vector::remove(&mut tournament.players, player_idx);

        // Remove their coin from tournament's prize.
        let player_payback = coin::take(&mut tournament.prize, ENTRY_FEE, ctx);

        // Transfer coin back to player.
        transfer::transfer(player_payback, tx_context::sender(ctx));
    }

    /// Starts n-th round for tournament.
    entry fun start_round(tournament: &mut Tournament, ctx: &mut TxContext) {
        let num_of_players = vector::length(&tournament.players);

        // Bail early if this is the last player.
        assert!(num_of_players > 1, ETournamentEnd);

        // Make sure you are in the correct round.
        assert!((tournament.capacity / (2^tournament.round)) == num_of_players, ECannotStartRound);

        let i = num_of_players;

        // Split players into matches of two-player pairs.
        while(i > 0) {
            // Grab two players from tournament.
            let player_0 = vector::pop_back(&mut tournament.players);
            let player_1 = vector::pop_back(&mut tournament.players);
            
            // Create a match for the current pair of players.
            let match = create_match(player_0, player_1, tournament.round, ctx);
            let match_id = object::uid_to_address(&match.id);

            // Add match id to tournament matches vector.
            vector::push_back(&mut tournament.matches, match_id);

            // Add match as a dof in tournament.
            dof::add(&mut tournament.id, match_id, match);

            i = i - 2;
        };
    }

    /// Gets all active matches and update tournament's players with winners.
    entry fun end_round(tournament: &mut Tournament, ctx: &mut TxContext) {

        // Get matches length from tournament.
        let i = vector::length(&tournament.matches);

        while(i > 0) {
            // Remove match from tournament and get their ID.
            let match_id = vector::pop_back(&mut tournament.matches);

            // Make sure that match is part of the tournament.
            assert!(dof::exists_(&tournament.id, match_id), EMatchNotFound);

            // Find match dynamic object field in tournament.
            let match: Match = dof::remove(&mut tournament.id, match_id);
            let Match {
                id,
                last_move_time: _,
                player_0,
                player_1,
                hash_0: _,
                hash_1: _,
                secret_0,
                secret_1,
                round,
            } = match;

            // Check if player_0 or player_1 has secret.
            if(option::is_none(&secret_0)) {
                // If _0 has no secret, make _1 the winner.
                vector::push_back(&mut tournament.players, player_1);
            } else if(option::is_none(&secret_1)) {
                // If _1 has no secret, make _0 the winner.
                vector::push_back(&mut tournament.players, player_0);
            } else {
                // Extract secrets for both players.
                let s_0 = option::extract(&mut secret_0);
                let s_1 = option::extract(&mut secret_1);

                // Take last bytes from secrets.
                let length_0 = vector::length(&s_0) - 1;
                let length_1 = vector::length(&s_1) - 1;
                let last_byte_0 = vector::borrow(&s_0, length_0);
                let last_byte_1 = vector::borrow(&s_1, length_1);

                // Get winner according to players' bytes XOR calc.
                let result = (*last_byte_0 + *last_byte_1) % 2;

                if(result == 1) {
                    vector::push_back(&mut tournament.players, player_1);
                } else {
                    vector::push_back(&mut tournament.players, player_0);
                };
            };

            i = i - 1;
        };

        // Increment round counter for next iteration.
        tournament.round = tournament.round + 1;
    }

    // Match functions.

    fun create_match(player_0: address, player_1: address, round: u64, ctx: &mut TxContext): Match{
        let match = Match{
            id: object::new(ctx),
            last_move_time: tx_context::epoch(ctx),
            player_0,
            player_1,
            hash_0: option::none(),
            hash_1: option::none(),
            secret_0: option::none(),
            secret_1: option::none(),
            round,
            winner: option::none(),
        };
        match
    }

    /// Updates player's respective match with their hash.
    entry fun set_hash(tournament: &mut Tournament, match_id: address, hash: vector<u8>, ctx: &mut TxContext) {
        // Make sure match exists.
        assert!(dof::exists_(&tournament.id, match_id), EMatchNotFound);

        // Get match from tournament.
        let match: &mut Match = dof::borrow_mut(&mut tournament.id, match_id);

        // Check if match is assigned to player.
        assert!((tx_context::sender(ctx) == match.player_0) || (tx_context::sender(ctx) == match.player_1), EPlayerNotFound);

        // Turn vector type into SHA3256-digest type.
        let hash_value = digest::sha3_256_digest_from_bytes(hash);

        // Figure which player is _0 || _1 and add hash value to match.
        if(tx_context::sender(ctx) == match.player_0) {
            option::fill(&mut match.hash_0, hash_value);
        } else {
            option::fill(&mut match.hash_1, hash_value);
        };

        // Update last move time with current epoch.
        match.last_move_time = tx_context::epoch(ctx);
    }

    /// Checks match validity according to players' hashes & secrets.
    entry fun reveal(tournament: &mut Tournament, match_id: address, secret: vector<u8>, ctx: &mut TxContext) {
        // Make sure match exists.
        assert!(dof::exists_(&tournament.id, match_id), EMatchNotFound);

        // Get match from tournament.
        let match: &mut Match = dof::borrow_mut(&mut tournament.id, match_id);

        // Check if player is assigned to match.
        assert!((tx_context::sender(ctx) == match.player_0) || (tx_context::sender(ctx) == match.player_1), EPlayerNotFound);

        // Proceed only if hashes for both players are present.
        assert!(!option::is_none(&match.hash_0) && !option::is_none(&match.hash_1), EHashNotFound);

        let secret_hash = sha3_256(secret);
        
        // Figure who player is _0 or _1 and get hash value from their match.
        let hash_value = if (tx_context::sender(ctx) == match.player_0) {
            option::borrow(&match.hash_0)
        } else {
            option::borrow(&match.hash_1)
        };

        // Make sure player's hash is the hash of their secret.
        assert!(secret_hash == digest::sha3_256_digest_to_bytes(hash_value), ENotCorrectSecret);

        
    }

}
