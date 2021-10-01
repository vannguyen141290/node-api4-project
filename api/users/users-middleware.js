const Users = require('./users-model')
const userSchema = require('../../services/userSchema')

function logger(req, res, next) {
    const timestamp = new Date().toLocaleString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${timestamp}] ${method} request to ${url}`)
    next()
}

async function validateUserId(req, res, next) {
    try {
        const { id } = req.params
        const user = await Users.findById(id)
        if(user) {
            req.user = user
            next()
        } else {
            next({
                status: 404,
                message: `user with id ${id} not found!`
            })
        }
    } catch (error) {
        next(error)
    }
}

async function validateUser(req, res, next) {
    try {
        const validated = await userSchema.validate(req.body)
        req.body = validated
        next()
    } catch (err) {
        next({
            status: 422,
            message: err.message
        })
    }
}

module.exports = {
    logger,
    validateUserId,
    validateUser
}