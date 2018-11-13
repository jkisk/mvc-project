const shortid = require('short-id')
const fs = require('fs')
const path = require('path')
const bookPath = path.resolve(__dirname, '../data/books.json')
const booksJSON = fs.readFileSync(bookPath)
const books = JSON.parse(booksJSON)

// create

const create = (body) => {
  const errors = []
  const title = body.title
  const borrowed = body.borrowed || false
  const authors = [body.authors]

  let response
  if (title.length > 30) {
    errors.push('title cannot be longer than 30 characters')
    response = { errors }
  }
  else {
    const book = {
      id: shortid.generate(),
      title,
      borrowed,
      authors
    }
    books.push(book)
    response = book

    let bookData = JSON.stringify(books)
    fs.writeFileSync(bookPath, bookData)
  }
  return response
}

// get all

const getAll = (limit) => {
  return limit ? books.slice(0, limit) : books
}

// get one

const getOne = (id) => {
  // TODO: Add error handling
  return result = books.find(b => b.id === id)
}

// update

const update = (id, body) => {

  const updateIndex = books.findIndex(b => b.id === id)
  const errors = []
  const title = body.title
  const borrowed = body.borrowed
  const authors = [body.authors]

  let response
  if (!title) {
    errors.push('please provide title')
    response = { errors }
  }
  else {
    books[updateIndex] = {
      id,
      title,
      borrowed,
      authors
    }
    response = books[updateIndex]
  }
  return response
}

// delete

const remove = (id) => {
  const removeIndex = books.findIndex(b => b.id === id)
  // TODO: Add error handling
  return books.splice(removeIndex, 1)
}


module.exports = { create, getAll, getOne, update, remove }