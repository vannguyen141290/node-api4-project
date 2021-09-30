const express = require('express')
const Users = require('./users-model')
const { validateUserId } = require('./users-middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const users = await Users.findAll()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', validateUserId, async (req, res) => {
    res.status(200).json(req.user)
})

module.exports = router
