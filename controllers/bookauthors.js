const model = require('../models/bookauthors.js')

// get author through books

function getAuthor(req, res, next) {
 
  const result = model.getAuthor(req.params.id, req.params.authorId)
  res.status(200).send(result)
  
}


// update author through books

function update(req, res, next) {

  const result = model.update(req.params.id,req.params.authorId)
  return res.status(201).send(result)

}

// delete author through books

function remove(req, res, next) {

  const result = model.remove(req.params.id, req.params.authorId)
  return res.status(201).send(result)

}


module.exports = { getAuthor, update, remove }