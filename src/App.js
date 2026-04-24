import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import Overdue from './components/Overdue';
import CurrentDate from './components/CurrentDate';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

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
      <CurrentDate />
      <TaskForm onAddTask={addTask} />
      <TaskFilter filter={filter} onFilterChange={setFilter} />
      <Overdue tasks={tasks} filter={filter} />
    </div>
  );
}

export default App;