const fs = require("fs");
const PATH = "./src/data/raw_store.json";

function readStore() {
    return JSON.parse(fs.readFileSync(PATH));
}

function writeStore(data) {
    fs.writeFileSync(PATH, JSON.stringify(data, null, 2));
}

module.exports = { readStore, writeStore };