const model = require('../models/bookauthors.js')

// get authors through books

function getAll(req, res, next) {
 
  const result = model.getAll(req.params.id)

  res.status(200).send(result)
}


// update author through books

function update(req, res, next) {
  const result = model.update(req.params.id,req.body)
  return res.status(201).send(result)
}

// delete author through books

function remove(req, res, next) {
  const result = model.remove(req.params.id, req.body)
  return res.status(201).send(result)

}


module.exports = { getAll, update, remove }