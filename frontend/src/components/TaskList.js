import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => {
                console.log('Tâches reçues:', response.data);
                setTasks(response.data);
            })
            .catch(error => console.error('Error while retrieving tasks', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() === '') return;
        axios.post('http://localhost:5000/tasks', { name: newTask })
          .then(response => {
            setTasks([...tasks, response.data]);
            setNewTask('');
          })
          .catch(error => console.error('Error while adding new task', error));
      };

  return (
    <div>
        <h1>To-do list</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Ajouter une tâche"
                required
            />
            <button type="submit">Ajouter</button>
        </form>
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