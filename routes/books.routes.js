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
router.get('/:id/authors/:authorId', control.getAuthor)
router.put('/:id/authors/:authorId', control.update)
router.delete('/:id/authors/:authorId', control.remove)


module.exports = router