import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';

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
      <h1>Дедлайны заданий</h1>
      <TaskForm onAddTask={addTask} />
      <ol className="tasks-list">
        {tasks.map((task, index) => (
          <li key={task.id} className="task-item">
            <span className="task-title">{task.title}</span>
            <span className="task-deadline">{task.deadline}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;