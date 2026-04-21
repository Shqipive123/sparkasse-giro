const { readStore, writeStore } = require("../utils/store");

function postLedger(debit, credit, amount) {
    const db = readStore();
    db.ledger.push({ entry_id: "led_" + Date.now(), debit, credit, amount, timestamp: Date.now() });
    writeStore(db);
}

module.exports = { postLedger };