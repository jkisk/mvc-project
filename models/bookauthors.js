
const fs = require('fs')
const path = require('path')
const authorPath = path.resolve(__dirname, '../data/authors.json')
const authorsJSON = fs.readFileSync(authorPath)
const authorsData = JSON.parse(authorsJSON)
const bookPath = path.resolve(__dirname, '../data/books.json')
const booksJSON = fs.readFileSync(bookPath)
const books = JSON.parse(booksJSON)


// get author of book through books

const getAuthor = (id, authorId) => {
  let book = books.find(b => b.id === id)
  let author = authorsData.find(a => a.id === authorId)
  const errors = []
  let response = []

  if (!book) {
    errors.push = { errors }
    response = errors
  }
  else {
    response = author
  }
  return response
}


// update authors of book through books

const update = (id, newAuthorid) => {
  const updateIndex = books.findIndex(b => b.id === id)
  const errors = []

  let response

  if (!id) {
    response = errors
  }
  else {
    books[updateIndex].authors.push(newAuthorid)
    response = books[updateIndex]
  }
  return response
}

// delete author of book through books

const remove = (id, authorId) => {
  const removeIndex = books.findIndex(b => b.id === id)

  let response

  if (!id) {
    response = errors
  }
  else {
    books[removeIndex].authors.splice(authorId, 1)
    response = books[removeIndex]
  }
  return response

}


module.exports = { getAuthor, update, remove }