import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Overdue from './components/Overdue';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, deadline) => {
    const newTask = {
      id: Date.now(),
      title: title,
      deadline: deadline
    };
    setTasks([newTask].concat(tasks));
  };

  return (
    <div className="app">
      <h1>Дедлайн заданий</h1>
      <TaskForm onAddTask={addTask} />
      <Overdue tasks={tasks} />
    </div>
  );
}

export default App;