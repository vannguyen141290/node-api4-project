const Users = require('./users-model')

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

function validateLoginUser(req, res, next) {
    const username = req.body.username
    const password = req.body.password
    if(!username || !password) {
        next({
            message: 'username and password are required fields!'
        })
    } else {
        next()
    }
}

module.exports = {
    logger,
    validateUserId,
    validateLoginUser
}