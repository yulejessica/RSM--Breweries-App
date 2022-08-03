require("dotenv").config();
const axios = require('axios');
const path = require("path");

const { Brewery } = require("../database/db.js");

let options = {
  url: 'https://api.openbrewerydb.org/breweries',
  headers: {
    'User-Agent': 'request',
  }
};

module.exports = {
  findAll : () => {
    console.log('test1');
    // axios.get(`${options.url}/`, {headers: options.headers})
    // .then(res => res.status(200).send(res.data))
    // .catch(err => res.status(500).send(err));
    // return Brewery.find({});
  },
}
