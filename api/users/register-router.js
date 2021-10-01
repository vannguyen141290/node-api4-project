const express = require('express')
const Users = require('./users-model')
const { validateUser } = require('./users-middleware')

const router = express.Router()

router.post('/', validateUser, async (req, res, next) => {
    try {
        const newUser = await Users.register(req.body)
        if(newUser) {
            res.status(201).json(newUser)
        } else {
            next({
                status: 400,
                message: 'username already taken'
            })
        }
    } catch (error) {
        next(error)
    }
})

module.exports = router
