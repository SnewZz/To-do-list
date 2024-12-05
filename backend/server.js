const { Pool } = require('pg');
const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (request, response) => {
    response.json({ info: 'Todo-list using Node.js, Express, and Postgres API' })
  })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})