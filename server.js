//server.js to send the example.html page. Much of the code is borrowed and modified from the lecture example.
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, '/pub')))


const port = process.env.PORT || 5000
app.listen(port, () => {
    log(`Server started on port ${port}...`)
})