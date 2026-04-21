const { readStore } = require("../utils/store");

function getAccount(accountId) {
    const db = readStore();
    return db.accounts.find(a => a.account_id === accountId);
}

function getCards(accountId) {
    const account = getAccount(accountId);
    return account ? account.cards : [];
}

module.exports = { getAccount, getCards };