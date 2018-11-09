
const fs = require('fs')
const path = require('path')
const authorPath = path.resolve(__dirname, '../data/authors.json')
const authorsJSON = fs.readFileSync(authorPath)
const authorsData = JSON.parse(authorsJSON)
const bookPath = path.resolve(__dirname, '../data/books.json')
const booksJSON = fs.readFileSync(bookPath)
const books = JSON.parse(booksJSON)


// get all authors of book through books

const getAll = (id) => {
  let book = books.find(b => b.id === id)

  const errors = []
  let response = []
  if (!book) {
    errors.push = { errors }
    response = errors
  }

  else {
    let authorArray = book.authors
    for (ele of authorArray) {
      console.log(ele)
      response.push(authorsData.find(a => a.id === ele))

    }
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


module.exports = { getAll, update, remove }