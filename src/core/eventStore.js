const { readStore, writeStore } = require("../utils/store");

function emitEvent(type, data) {
    const db = readStore();
    db.events.push({ event_id: "evt_" + Date.now(), type, data, timestamp: Date.now() });
    writeStore(db);
}

module.exports = { emitEvent };