require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const massive = require('massive')


const { CONNECTION_STRING, SERVER_PORT } = process.env

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  console.log('Connected to database')
  });

const app = express();

app.use(bodyParser.json());


app.listen(SERVER_PORT, () =>
  console.log(`Listening on port ${SERVER_PORT}`)
  );

app.get('/api/houses', ctrl.getAll)