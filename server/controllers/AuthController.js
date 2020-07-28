const User = require('../db/models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { tokenToString } = require('typescript')

const register = (req,res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }

        let user = new User ({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        
        User.findOne({$or:[{email: user.email}, {phone: user.phone}]}, (err, usr)=>{
            if(usr.email == user.email){
                return res.status(406).json({
                    error: 'User with email is already exists'
                })
            }else if(usr.phone == user.phone){
                return res.status(406).json({
                    error: 'User with phone number is already exists'
                })
            }
           

            user.save()
            .then(user => {
                res.json({
                    message: 'User Added Successfully!'
                })
            })
            .catch(error => {
                res.json({
                    message: 'An error occured!'
                })
            })
        })
    })
}

const login = (req, res, next)=> {
    var username = req.body.username    
    var password = req.body.password

    User.findOne({$or: [{email:username}, {phone:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
               /* if(err){
                    res.json({
                        error: err
                    })
                }*/
                if(result){
                    let token = jwt.sign({ name: user.name}, 'AzQ,PI)0(', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Successful!',
                        id: user.id,
                        name: user.name,
                        token: token
                    })
                }else{
                    res.json({
                        message: 'Password does not matched!'
                    })
                }
            })
        }else{
            res.json({
                message: 'No user found!'
            })
        }
    })
}


module.exports = {
    register, login
}