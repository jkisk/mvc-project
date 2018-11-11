const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
app.use(bodyParser.json())
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

//routes

const bookRoutes = require('./routes/books.routes.js')
app.use('/books', bookRoutes)

const authorRoutes = require('./routes/authors.routes.js')
app.use('/authors', authorRoutes)

// error handling

app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' } })
})

// server

const listener = () => console.log(`library listening on port ${port}!`)
app.listen(port, listener)

module.exports = app