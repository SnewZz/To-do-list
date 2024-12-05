import React from 'react';

const TaskForm = ({ newTask, setNewTask, handleSubmit }) => {
  return (
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
  );
};

export default TaskForm;
