import React from 'react';

const TaskItem = ({ task, handleMarkComplete, handleDeleteTask }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {task.name} - {task.completed ? 'Terminé' : 'En cours'}
      <div>
        {!task.completed && (
          <button
            className="btn btn-secondary btn-sm me-2"
            onClick={() => handleMarkComplete(task.id)}
          >
            Terminer
          </button>
        )}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDeleteTask(task.id)}
        >
          Supprimer
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
