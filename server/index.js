const express = require("express")
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8080

// Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//serving up static files
app.use(express.static(path.join(__dirname, '..', 'public')))

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

//error handling
app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
