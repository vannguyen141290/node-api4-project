const express = require('express')
const { register } = require('./users-model')

const router = express.Router()

router.get('/', (req, res) => {
    console.log(`REQUEST FROM ${req.originalUrl}`)
})

module.exports = router
