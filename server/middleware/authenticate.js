const jwt = require('jsonwebtoken')
const router = require('../routes/auth')

const authenticate = (req, res, next) =>{
    try{
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwr.verify(token, 'AzQ,PI)0(' )

        req.user= decode
        next()
    }
    catch(error) {
        res.json({
            message: 'Autentication Failed!'
        })
    }
}

module.exports = authenticate