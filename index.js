const path = require('path')
const express = require('express')
const app = express()
const port = 3001

// // respuesta tipo
// app.get('/', (req, res) => res.send('Hello World!'))

// // caso de ejemplo con un objeto cualquiera
// app.get('/', (req, res) => res.json({ some: 'json', data: 1 })) 

// // ejemplo entregando un json directametne
// const jsonFile = require(path.join(__dirname, 'myFile.json'))
// app.get('/', (req, res) => res.json(jsonFile)) //

// ejemplo entregando un json directamente pero con formato api
const jsonFile = require(path.join(__dirname, 'myFile.json'))
app.get('/', (req, res) => res.json({ data: jsonFile })) //


app.listen(port, () => console.log(`Go! http://localhost:${port}!`))