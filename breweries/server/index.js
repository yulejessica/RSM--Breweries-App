require("dotenv").config();
const axios = require('axios');
const path = require("path");
const express = require("express");
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./database/db.js');
var router = require('./routes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);
app.use(express.static('client/dist'));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

let options = {
  url: 'https://api.openbrewerydb.org/breweries',
  headers: {
    'User-Agent': 'request',
  }
};
//get all data
app.get('/', (req, res) => {
  console.log("hit get all data in the server")
  axios.get(`${options.url}/`, {headers: options.headers})
  .then(list => res.status(200).send(list.data))
  .catch(err => res.status(500).send(err));
});

//get data by city
app.get('/city', (req, res) => {
  console.log('hit city!')
  let city = req.query.by_city;
  axios.get(`${options.url}/?by_city=${city}`, {headers: options.headers})
  .then(list => res.status(200).send(list.data))
  .catch(err => res.status(500).send(err));
})

//get data by state
app.get('/state', (req, res) => {
  console.log('hit state!')
  // let city = req.query.by_city;
  let state = req.query.by_state;
  // console.log('state', state)
  axios.get(`${options.url}/?by_state=${state}`, {headers: options.headers})
  .then(list => res.status(200).send(list.data))
  .catch(err => res.status(500).send(err));
})

//get data by city and state
app.get('/citystate', (req, res) => {
  console.log('hit citystate!')
  let city = req.query.by_city;
  let state = req.query.by_state;
  axios.get(`${options.url}/?by_city=${city}&by_state=${state}`, {headers: options.headers})
  .then(list => res.status(200).send(list.data))
  .catch(err => res.status(500).send(err));
})

//get data by id
app.get('/detail/:id', (req, res) => {
  console.log('hit id!')
  let id = req.params.id;
  axios.get(`${options.url}/${id}`, {headers: options.headers})
  .then(list => res.status(200).send(list.data))
  .catch(err => res.status(500).send(err));
})

