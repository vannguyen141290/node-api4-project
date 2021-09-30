const express = require('express')
const { logger } = require('./users/users-middleware')
const usersRouter = require('./users/users-router')
const loginRouter = require('./users/login-router')
const registerRouter = require('./users/register-router')

const server = express()

server.use(express.json())
server.use(logger)
server.use('/api/users', usersRouter)
server.use('/api/login', loginRouter)
server.use('/api/register', registerRouter)

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

function errorHandling(err, req, res, next) { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
}
