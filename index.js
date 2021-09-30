const express = require('express')
require('dotenv').config()

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>Hello from THI NGUYEN</h1>')
})

// server.get('*', (req, res) => {
//     res.status()
// })

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`\n*** Server listening on port ${port} ***\n`)
})