
const fs = require('fs')
const path = require('path')
const authorPath = path.resolve(__dirname, '../data/authors.json')
const authorsJSON = fs.readFileSync(authorPath)
const authorsData = JSON.parse(authorsJSON)
const bookPath = path.resolve(__dirname, '../data/books.json')
const booksJSON = fs.readFileSync(bookPath)
const books = JSON.parse(booksJSON)


const getAll = (id) => {
  let book = books.find(b => b.id === id)
  if(!book) return  { error: ['book not found'] }

  const authors = book.authors.map(author => authorsData.find(a => a.id === author))

  return authors
}

// get author of book through books

const getAuthor = (id, authorId) => {
  let book = books.find(b => b.id === id)
  if (!book) {
    return  { error: ['book not found'] }
    
  }
  
  let author = authorsData.find(a => a.id === authorId)
  if(!author){
    return  { error: ['author not found'] }
  }

  return author
}


// update authors of book through books

const update = (id, newAuthorid) => {
  const updateIndex = books.findIndex(b => b.id === id)
  const errors = []

  let response

  // TODO: Add error handling
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

  // TODO: Add error handling
  if (!id) {
    response = errors
  }
  else {
    books[removeIndex].authors.splice(authorId, 1)
    response = books[removeIndex]
  }
  return response

}


module.exports = { getAll, getAuthor, update, remove }