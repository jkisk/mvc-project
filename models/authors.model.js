const uuid = require('uuid/v4')
const authors = [ { id: uuid(), first: 'Margaret', last: 'Atwood' } ]

function getAll (limit) {
  return limit ? authors.slice(0, limit) : authors
}

function create (body) {
  const errors = []
  const first = body.first
  const last = body.last

  let response
  if (!name) {
    errors.push('name is required')
    response = { errors }
  } else {
    const author = { id: uuid(), first, last }
    authors.push(author)
    response = author
  }

  return response
}

module.exports = { getAll, create }