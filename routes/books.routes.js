const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/books.ctrl.js')
const control = require('../controllers/bookauthors.js')

// books routes

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)
router.get('/:id', ctrl.getOne)
router.post('/:id', ctrl.update)
router.delete('/:id', ctrl.remove)


// authors through books routes

router.get('/:id/authors', control.getAll)
router.put('/:id/authors', control.update)
router.delete('/:id/authors', control.remove)




module.exports = router