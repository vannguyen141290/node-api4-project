const users = require('../../db/fakeDb')

function findAll() {
    return Promise.resolve(users)
}

function findById(id) {
    const user = users.find(user => user.id === (id))
    if(user) {
        return Promise.resolve(user)
    } else {
        return Promise.resolve(null)
    }
}

function login(data) {
    const username = data.username.trim()
    const pass = data.password.trim()
    const user = users.find(user => user.username === username && user.password === pass)
    if(user) {
        return Promise.resolve(user)
    } else {
        return Promise.resolve(null)
    }
}

function register() {
    return null
}

module.exports = {
    findAll,
    findById,
    login,
    register
}
