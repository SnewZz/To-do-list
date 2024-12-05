import React from 'react';

const TaskItem = ({ task, handleMarkComplete, handleDeleteTask }) => {
  return (
    <li>
      {task.name} - {task.completed ? 'Terminé' : 'En cours'}
      {!task.completed && (
        <button onClick={() => handleMarkComplete(task.id)}>Terminer</button>
      )}
      <button onClick={() => handleDeleteTask(task.id)}>Supprimer</button>
    </li>
  );
};

export default TaskItem;
