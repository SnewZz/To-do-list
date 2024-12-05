import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">To-do list</h1>
      <TaskList />
    </div>
  );
}

export default App;
