const express = require('express')
const Users = require('./users-model')
const { validateUser } = require('./users-middleware')

const router = express.Router()

router.post('/', validateUser, async (req, res, next) => {
    Users.login(req.body)
        .then(user => {
            if (user) {
                res.status(200).send({
                    message: `welcome back to the page ${user.username.toUpperCase()}`
                })
            } else {
                next({
                    status: 401,
                    message: 'username and/or password is invalid'
                })
            }
        })
        .catch(next)
})

module.exports = router
