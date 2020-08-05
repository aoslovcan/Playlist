const express = require('express');
const request = require('request');
let bodyParser = require('body-parser');

let cors = require('cors');
const { json } = require('express');

//Server create
const server = express();

server.listen('3001', () => {
  console.log('Server started on port 3001');
})

//Include json 

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
// aprove connection to server
server.use(cors());


server.get('/chart', (req, res) => {
    request(
      { url: 'https://api.deezer.com/chart' },
      (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return res.status(500).json({ type: 'error', message: err.message });
        }

        res.end(JSON.stringify(body));

     
      }
    )
    
  });











