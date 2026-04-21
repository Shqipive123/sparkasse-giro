const { readStore, writeStore } = require("./utils/store");
const { emitEvent } = require("./core/eventStore");
const { postLedger } = require("./core/ledger");

function processPayment(fromAccountId, toAccountId, amount) {
    const db = readStore();
    const from = db.accounts.find(a => a.account_id === fromAccountId);
    const to = db.accounts.find(a => a.account_id === toAccountId);

    if (!from || !to) {
        return { status: "ACCOUNT_NOT_FOUND" };
    }

    emitEvent("PAYMENT_INITIATED", { fromAccountId, toAccountId, amount });
    from.balance = (from.balance || 0) - amount;
    to.balance = (to.balance || 0) + amount;
    postLedger(fromAccountId, toAccountId, amount);
    emitEvent("PAYMENT_COMPLETED", { fromAccountId, toAccountId, amount });
    writeStore(db);

    return { status: "APPROVED" };
}

module.exports = { processPayment };