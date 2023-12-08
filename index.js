require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello WorJJlJJd!')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>sameershrikhande</h2>')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login at our Chai website...</h1>')
})

app.get('')

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})