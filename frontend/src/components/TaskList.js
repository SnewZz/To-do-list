import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

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

  const handleMarkComplete = (id) => {
    axios.put(`http://localhost:5000/tasks/${id}`, { completed: true })
      .then(response => {
        setTasks(tasks.map(task =>
          task.id === id ? { ...task, completed: true } : task
        ));
      })
      .catch(error => console.error('Error while updating the task', error));
  };

  const handleDeleteTask = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(() => {
        setTasks(tasks.filter(task => task.id !== id));
      })
      .catch(error => console.error('Error while removing the task', error));
  };

  return (
    <div>
      <h1>To-do list</h1>
      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <h1>Liste des Tâches</h1>
      <ul>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            handleMarkComplete={handleMarkComplete}
            handleDeleteTask={handleDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
