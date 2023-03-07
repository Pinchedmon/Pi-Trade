const sqlite = require('sqlite3').verbose(),
    path = require('path');
const db = new sqlite.Database(path.resolve(__dirname, './db/server.db'), sqlite.OPEN_READRIGHT, (err) => { if (err) return console.error(err.message) });


// const sql = `DROP TABLE posts`;
// const sql = `CREATE TABLE posts (ID INTEGER PRIMARY KEY AUTOINCREMENT, name, text, course, category, comments default 0, likes default 0, postImg, date);`
// db.run(sql)
const sql = ` CREATE TABLE users (ID INTEGER PRIMARY KEY AUTOINCREMENT, name, email, password, avatar DEFAULT "http://localhost:6060/public/default.jpeg");`
db.run(sql)
 //const sql = "INSERT INTO users (name, username,info, email, password) VALUES (?, ?, ?)"
// db.run(sql, ["pinchedmon", "temnikovalx@icloud.com", 12341234], (err) => {
//         if (err) return console.error(err.message)
// })
// const sql = "DROP TAble messages_info";
// db.run(sql)

// const sql = `CREATE TABLE comments (ID INTEGER PRIMARY KEY AUTOINCREMENT,commentId INTEGER, postId INTEGER, name, text, likes default 0, comments default 0, commentImg, date);`
// db.run(sql)
//const sql = ` CREATE TABLE messages (ID INTEGER PRIMARY KEY AUTOINCREMENT, names);`
//db.run(sql)
// const sql = ` CREATE TABLE messages_info (ID INTEGER PRIMARY KEY AUTOINCREMENT, names, name, text, messageImg, date, read DEFAULT FALSE);`
// db.run(sql)
// const sql = ` CREATE TABLE follows (ID INTEGER PRIMARY KEY AUTOINCREMENT, name, object);`
// db.run(sql)
// const sql = ` CREATE TABLE notifications (receiverName, senderName, type, object, read DEFAULT FALSE, date);`
// db.run(sql)
