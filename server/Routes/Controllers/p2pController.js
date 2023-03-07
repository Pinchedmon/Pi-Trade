const sqlite = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite.Database(path.resolve(__dirname, '../../db/server.db'), sqlite.OPEN_READWRITE, (err) => { if (err) return console.error(err.message) });

class coinController {
    async make(req, res) {
    };
    async join(req, res) {
    };
    async leave(req, res) {
    };
    async accept(req, res) {
    };
}

module.exports = new coinController;