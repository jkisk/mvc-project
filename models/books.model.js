const uuid = require('uuid/v4')
const books = [ { id: uuid(), title: 'Alias Grace', borrowed: false , author: "id"} ]

function getAll (limit) {
  return limit ? books.slice(0, limit) : authors
}

function create (body) {
  const errors = []
  const title = body.title
  const borrowed = body.borrowed
  const authors = [body.authors]

  let response
  if (!title) {
    errors.push('title is required')
    response = { errors }
  } else {
    const book = { id: uuid(), title, borrowed, authors}
    authors.push(author)
    response = book
  }

  return response
}

module.exports = { getAll, create }