const model = require('../models/bookauthors.js')

// get all authors of a book

function getAll(req, res, next){
  const result = model.getAll(req.params.id)
  
  if(result.error) return next({ status: 404, error:result.error })
  
  res.status(200).send(result)
}


// get author through books

function getAuthor(req, res, next) {
 
  const result = model.getAuthor(req.params.id, req.params.authorId)
  // TODO: Add error handling
  res.status(200).send(result)
  
}


// update author through books

function update(req, res, next) {

  const result = model.update(req.params.id,req.params.authorId)
  // TODO: Add error handling
  return res.status(201).send(result)

}

// delete author through books

function remove(req, res, next) {

  const result = model.remove(req.params.id, req.params.authorId)
  // TODO: Add error handling
  return res.status(201).send(result)

}


module.exports = { getAuthor, update, remove, getAll }