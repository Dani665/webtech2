const Employee = require('../db/models/Employee')
const { response } = require('express')

//Show the list of Employees
const index = (req, res, next)=> {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured!'
        })
    })
}

const show = (req, res, next) => {
    let employeeID = req.params.id
    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        response.json({
            message: 'An error Occured!'
        })
    })
}


const store = async(req, res, next) => {
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })

    let emp = await Employee.find({email: req.body.email});

    console.log('Találtam-e?')
    console.log(emp)


    employee.save()
    .then(response => {
        res.json({
            message: 'Employee Added Successfully!',
            success: true
        })
    })
    .catch(error =>{
        response.json({
            message: 'An error Occured!',
            success: false
        })
    })
}

const update = (req, res, next) => {
    let employeeID = req.params.id

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeID, {$set: updateData})
    .then(() =>{
        res.json({
            message: 'Employee updated successfully!'
        })
    })
    .catch(error =>{
        response.json({
            message: 'An error Occured!'
        })
    })
}

const destroy = (req, res, next) => {
    let employeeID = req.params.id
    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        res.json({
            message: 'Employee deleted Successfully!'
        })
    })
    .catch(error =>{
        response.json({
            message: 'An error Occured!'
        })
    })
}

const showall = async(req, res, next) =>{
    await Employee.find({}, (err, employee)=>{
        if(err){
            return res.status(400).json({success: false, error: err})
        }
        if(!employee.length){
            return res
                .status(404) 
                .json({success: false, error: 'employee not found'})
        }
        return res.status(200).json({success: true, data: employee})
    }).catch(err => console.log(err))
}

module.exports = {
     index, show, store, update, destroy, showall
}