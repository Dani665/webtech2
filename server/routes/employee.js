const express = require('express')
const router = express.Router()

const EmployeeController    = require('../controllers/EmployeeController')
const autenticate           = require('../middleware/authenticate')

router.get('/', EmployeeController.index)
router.get('/show/:id', EmployeeController.show)
router.post('/store', EmployeeController.store)
router.put('/update/:id', EmployeeController.update)
router.delete('/delete/:id', EmployeeController.destroy)
router.get('/showAll', EmployeeController.showall)

module.exports = router