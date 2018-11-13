const shortid = require('short-id')
const fs = require('fs')
const path = require('path')
const authorPath = path.resolve(__dirname, '../data/authors.json')
const authorsJSON = fs.readFileSync(authorPath)
const authors = JSON.parse(authorsJSON)

// create

const create = (body) => {
  // TODO: add error handling
  const errors = []
  const first = body.first
  const last = body.last
  const author = {
    id: shortid.generate(),
    first,
    last,
  }

  authors.push(author)
  response = author

  let authorData = JSON.stringify(authors)
  fs.writeFileSync(authorPath, authorData)

  return response
}

// get all

const getAll = (limit) => {
  return limit ? authors.slice(0, limit) : authors
}

// get one

const getOne = (id) => {
  // TODO: Add error handling
  return result = authors.find(b => b.id === id)
}

// update

const update = (id, body) => {

  const updateIndex = authors.findIndex(b => b.id === id)
  const errors = []
  const first = body.first
  const last = body.last
  let response

  if (!first) {
    errors.push('please provide first')
    response = { errors }
  }
  else {
    authors[updateIndex] = {
      id,
      title,
      first,
      last
    }
    response = authors[updateIndex]
  }
  return response
}
// delete

const remove = (id) => {
  const removeIndex = authors.findIndex(b => b.id === id)
  // TODO: Add error handling
  return authors.splice(removeIndex, 1)
}


module.exports = { create, getAll, getOne, update, remove }