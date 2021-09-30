const express = require('express')
const { logger } = require('./users/users-middleware')

const server = express()

server.use(express.json())
server.use(logger)

server.get('/', (req, res) => {
    res.send('<h1>Hello from THI NGUYEN</h1>')
})

server.get('*', (req, res, next) => {
    next({
        status: 404,
        message: `${req.method} request to ${req.originalUrl} not found!`
    })
})

server.use(errorHandling)

module.exports = server

function errorHandling(err, req, res, next) {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
}
