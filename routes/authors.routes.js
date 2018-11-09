const express = require('express')
const router = express.Router()
const control = require('../controllers/authors.ctrl.js')



router.get('/', control.getAll)
router.post('/', control.create)
router.get('/:id', control.getOne)
router.post('/:id', control.update)
router.delete('/:id', control.remove)

module.exports = router