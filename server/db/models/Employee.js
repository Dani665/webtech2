const mongoose      =require('mongoose')
const Schema        =mongoose.Schema

const employeeSchema    = new Schema({
    name: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    age: {
        type: Number
    }
}, {timestamps: true})

module.exports = mongoose.model('employee', employeeSchema)
//module.exports = employeeSchema