(function() {var implementors = {
"sui_indexer":[["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/recipients/struct.Recipient.html\" title=\"struct sui_indexer::models::recipients::Recipient\">Recipient</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/events/struct.Event.html\" title=\"struct sui_indexer::models::events::Event\">Event</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.Transaction.html\" title=\"struct sui_indexer::models::transactions::Transaction\">Transaction</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/transactions/struct.Transaction.html\" title=\"struct sui_indexer::models::transactions::Transaction\">Transaction</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/owner_history/struct.table.html\" title=\"struct sui_indexer::schema::owner_history::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/owner_history/struct.table.html\" title=\"struct sui_indexer::schema::owner_history::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/owner_history/struct.table.html\" title=\"struct sui_indexer::schema::owner_history::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/owner_history/struct.table.html\" title=\"struct sui_indexer::schema::owner_history::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/recipients/struct.table.html\" title=\"struct sui_indexer::schema::recipients::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/recipients/struct.Recipient.html\" title=\"struct sui_indexer::models::recipients::Recipient\">Recipient</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/move_calls/struct.MoveCall.html\" title=\"struct sui_indexer::models::move_calls::MoveCall\">MoveCall</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/error_logs/struct.ErrorLog.html\" title=\"struct sui_indexer::models::error_logs::ErrorLog\">ErrorLog</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/packages/struct.Package.html\" title=\"struct sui_indexer::models::packages::Package\">Package</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/addresses/struct.Address.html\" title=\"struct sui_indexer::models::addresses::Address\">Address</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/error_logs/struct.ErrorLog.html\" title=\"struct sui_indexer::models::error_logs::ErrorLog\">ErrorLog</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/transactions/struct.table.html\" title=\"struct sui_indexer::schema::transactions::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/checkpoints/struct.Checkpoint.html\" title=\"struct sui_indexer::models::checkpoints::Checkpoint\">Checkpoint</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/packages/struct.Package.html\" title=\"struct sui_indexer::models::packages::Package\">Package</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/objects/struct.DeletedObject.html\" title=\"struct sui_indexer::models::objects::DeletedObject\">DeletedObject</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/objects/struct.Object.html\" title=\"struct sui_indexer::models::objects::Object\">Object</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/owner/struct.table.html\" title=\"struct sui_indexer::schema::owner::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/owner/struct.table.html\" title=\"struct sui_indexer::schema::owner::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/checkpoints/struct.Checkpoint.html\" title=\"struct sui_indexer::models::checkpoints::Checkpoint\">Checkpoint</a>"],["impl&lt;'insert&gt; Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/events/struct.table.html\" title=\"struct sui_indexer::schema::events::table\">table</a>&gt; for &amp;'insert <a class=\"struct\" href=\"sui_indexer/models/events/struct.Event.html\" title=\"struct sui_indexer::models::events::Event\">Event</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/move_calls/struct.table.html\" title=\"struct sui_indexer::schema::move_calls::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/move_calls/struct.MoveCall.html\" title=\"struct sui_indexer::models::move_calls::MoveCall\">MoveCall</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/addresses/struct.Address.html\" title=\"struct sui_indexer::models::addresses::Address\">Address</a>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.DeletedObject.html\" title=\"struct sui_indexer::models::objects::DeletedObject\">DeletedObject</a>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/owner/struct.table.html\" title=\"struct sui_indexer::schema::owner::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/owner/struct.table.html\" title=\"struct sui_indexer::schema::owner::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/packages/struct.table.html\" title=\"struct sui_indexer::schema::packages::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/checkpoints/struct.table.html\" title=\"struct sui_indexer::schema::checkpoints::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/error_logs/struct.table.html\" title=\"struct sui_indexer::schema::error_logs::table\">table</a>: Insertable&lt;T&gt;,</span>"],["impl Insertable&lt;<a class=\"struct\" href=\"sui_indexer/schema/objects/struct.table.html\" title=\"struct sui_indexer::schema::objects::table\">table</a>&gt; for <a class=\"struct\" href=\"sui_indexer/models/objects/struct.Object.html\" title=\"struct sui_indexer::models::objects::Object\">Object</a>"],["impl&lt;T&gt; Insertable&lt;T&gt; for <a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a><span class=\"where fmt-newline\">where\n    &lt;<a class=\"struct\" href=\"sui_indexer/schema/addresses/struct.table.html\" title=\"struct sui_indexer::schema::addresses::table\">table</a> as AsQuery&gt;::Query: Insertable&lt;T&gt;,</span>"],["impl&lt;'a, T&gt; Insertable&lt;T&gt; for &amp;'a <a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a><span class=\"where fmt-newline\">where\n    <a class=\"struct\" href=\"sui_indexer/schema/objects_history/struct.table.html\" title=\"struct sui_indexer::schema::objects_history::table\">table</a>: Insertable&lt;T&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()