require('dotenv').config()
const express = require('express')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING } = process.env
const app = express()

const ctrl = require('./controller')

app.use(express.json())
app.use(express.static('public'))

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance)
    console.log('Connected to Database')
    app.listen(SERVER_PORT, () => {
      console.log(`server on ${SERVER_PORT}`)
    })
  })
  .catch(err => console.log(err))


app.get('/api/gethouses', ctrl.getHouses)
app.post('/api/createhouse', ctrl.create_house)
app.delete('/api/deletehouse/:id', ctrl.delete_house)

