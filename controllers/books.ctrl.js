const model = require('../models/books.model.js')

function getAll (req, res, next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({ data })
}

function create (req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
    return next({ status: 400, message: `Could not create new book`, errors: result.errors })
  }

  res.status(201).json({ data: result })
}

module.exports = { getAll, create }