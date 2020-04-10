require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const dah = require('../src/Components/Dashboard')


const PORT = 6352

const{SESSION_SECRET, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(db=>{
    app.set('db', db)
    console.log('db connected')
})

// app.use(
//     session({

//     })
// )

app.get('/api/houselists' , dash.getHouse)
app.post('/api/addhouse')
app.delete('/api/deletehouses')

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));