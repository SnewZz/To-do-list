import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        console.log('Tâches reçues:', response.data);
        setTasks(response.data);
      })
      .catch(error => console.error('Error while retrieving tasks', error));
  }, []);

  return (
    <div>
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.name} - {task.completed ? 'Terminé' : 'En cours'}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;