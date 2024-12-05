import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

/**
 * Component for displaying and managing a list of tasks.
 * This component fetches tasks from the backend, allows adding new tasks, 
 * marking tasks as complete, and deleting tasks.
 */
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

    /**
     * Handles the form submission for adding a new task.
     */
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

    /**
     * Marks a task as complete by sending a PUT request to the backend.
     */
    const handleMarkComplete = (id) => {
        axios.put(`http://localhost:5000/tasks/${id}`, { completed: true })
            .then(() => {
                setTasks(tasks.map(task =>
                    task.id === id ? { ...task, completed: true } : task
                ));
            })
            .catch(error => console.error('Error while updating the task', error));
    };

    /**
     * Deletes a task by sending a DELETE request to the backend.
     */
    const handleDeleteTask = (id) => {
        axios.delete(`http://localhost:5000/tasks/${id}`)
            .then(() => {
                setTasks(tasks.filter(task => task.id !== id));
            })
            .catch(error => console.error('Error while removing the task', error));
    };

    return (
        <div className="container mt-4">
            <TaskForm
                newTask={newTask}
                setNewTask={setNewTask}
                handleSubmit={handleSubmit}
            />
            <h2 className="mb-3">Liste des Tâches</h2>
            <ul className="list-group">
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
