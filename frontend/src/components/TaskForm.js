import React from 'react';

const TaskForm = ({ newTask, setNewTask, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une tâche"
          className="form-control"
          required
        />
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </div>
    </form>
  );
};

export default TaskForm;
