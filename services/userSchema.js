const yup = require('yup')

const userSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is required!')
        .min(3, 'username should be at least 3 chars')
        .max(15, 'username should be 10 chars most'),
    password: yup
        .string()
        .trim()
        .required('password is required!')
        .min(3, 'password should be at least 3 chars')
        .max(15, 'password should be 10 chars most')
})

module.exports = userSchema
