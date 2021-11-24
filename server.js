//server.js to send the example.html page. Much of the code is borrowed and modified from the lecture example.
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))

app.get('/', (req, res) => {
    res.sendFile("pub/examples.html")
    res.sendFile("pub/examples.js")
})

app.get('/problem', (req, res) => {
    res.status(500).send('Server issues')
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    log(`Server started on port ${port}...`)
})