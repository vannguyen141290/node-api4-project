const { nanoid } = require('nanoid')

const users = [
    {
        id: nanoid(),
        username: 'vannguyen',
        password: '1234'
    },
    {
        id: nanoid(),
        username: 'sanoo_singh',
        password: '5678'
    },
    {
        id: nanoid(),
        username: 'kumar',
        password: '9101'
    },
]

module.exports = users
