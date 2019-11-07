const path = require('path')
const express = require('express')
const app = express()
const port = 3001

const request = require("request");

let options = {
  method: 'GET',
  url: 'http://robot2-principal.smartcob.cl:3030/legalia-juicios-data/123',
  headers: {
    'cache-control': 'no-cache',
    Connection: 'keep-alive',
    'Accept-Encoding': 'gzip, deflate',
    Host: 'support.oneskyapp.com',
    'Postman-Token': 'eb77a592-9a93-418c-9819-74b772b4ef19,826c98af-4658-4f46-b75f-28a76addcec9',
    'Cache-Control': 'no-cache',
    Accept: '*/*',
    'User-Agent': 'PostmanRuntime/7.19.0'
  },
  json: true
};

app.get('/', (req, res) => {
  
  request(options, function (error, response, body) {
    if (!error) {
      res.json({ result: true, data: [body] }) // en este caso body no es un arreglo, de lo contrario sería `data: body`
    } else {
      res.json({ result: false, error: error.message })
    }
  });
})

app.listen(port, () => console.log(`Go! http://localhost:${port}!`))
