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

  const sortTasksByDate = (tasksToSort) => {
    const sortedTasks = [];
    for (let i = 0; i < tasksToSort.length; i++) {
      sortedTasks[i] = tasksToSort[i];
    }
    sortedTasks.sort(function(a, b) {
      return new Date(a.deadline) - new Date(b.deadline);
    });
    return sortedTasks;
  };

  const sortedTasks = sortTasksByDate(tasks);

  return (
    <div className="app">
      <h1>Дедлайн заданий</h1>
      <TaskForm onAddTask={addTask} />
      <ol className="tasks-list">
        {sortedTasks.map((task, index) => (
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