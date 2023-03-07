const express = require('express'),
    app = express(),
    cors = require('cors'),
    http = require('http'),
    path = require('path'),
    sqlite = require('sqlite3').verbose(),
    url = require('url'),
    { Server } = require("socket.io"),
    db = new sqlite.Database(path.resolve(__dirname, './db/server.db')),
    port = 6060,
    server = http.createServer(app),
    io = new Server(server, {
        cors: "localhost:3000",
        serveClient: true
    });

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({}))


server.listen(port)