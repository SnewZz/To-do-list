const { Pool } = require('pg');
const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,

});

app.get('/', (request, response) => {
    response.json({ info: 'Todo-list using Node.js, Express, and Postgres API' })
  })

// Route to get all the tasks
app.get('/tasks', async function(req, res) {
    try{
        const result = await pool.query(
            'SELECT * FROM tasks'
        );
    } catch(err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

// Route to add a specific task
app.post('/tasks', async function (req, res) {
  const { name } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO tasks (name) VALUES ($1) RETURNING *',
      [name]
    );
    res.status(201).json(result.rows[0]); 
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})