const { getAccount } = require("./accounts");

function getCard(accountId, cardId) {
    const account = getAccount(accountId);
    if (!account) return null;
    return account.cards.find(c => c.card_id === cardId);
}

function getCardDisplay(accountId, cardId) {
    const card = getCard(accountId, cardId);
    if (!card) return null;
    return {
        card_id: card.card_id,
        card_display: card.card_display,
        brand: card.brand,
        last4: card.last4,
        expiry_month: card.expiry_month,
        expiry_year: card.expiry_year,
        type: card.type,
        issuer: card.issuer,
        status: card.status,
        is_default: card.is_default
    };
}

module.exports = { getCard, getCardDisplay };