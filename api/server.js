// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

const express = require('express');
const server = express();

const actions = require('./actions/actions-router')
const projects = require('./projects/projects-router')

server.use(express.json())
server.use(logger)
server.use('/api/actions', actions)
server.use('/api/projects', projects)

server.get('/', (req, res) => {
    res.status(200).send(`<h1>Welcome to the API</h1>`)
})


function logger(req, res, next) {
    const newTime = new Date()
    const timestamp = newTime.toLocaleString()
    console.log(`[${timestamp}]: ${req.method} called to ${req.url}`)
    console.log('\n --- Start Body ---\n', req.body, '\n --- End Body --- \n')
    next()
}

module.exports = server;