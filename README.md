# To-do-list
This is an application for managing tasks as a to-do list. This project includes a Node.js backend with Express, a PostgreSQL database, and a React frontend.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)

## Setup Instructions

### 1. Set Up the Database

1. Open your PostgreSQL
2. Create a new database: ```CREATE DATABASE task_manager;```
3. Inside the `backend` directory, create a `.env` file: ```DB_USER=your_postgres_username
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=task_manager```
4. Initialize the database table: ```sql CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);```

### 3. Start the Backend
1. Navigate to the `backend` directory and enter : `npm install`
2. Start the server : `npm start` (It will run on http://localhost:5000)

### 4. Start the Frontend
1. Navigate to the `frontend` directory and enter : `npm install`
2. Start the React app: `npm start` (It will run on http://localhost:3000)
