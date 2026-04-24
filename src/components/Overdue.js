import React from 'react';
import './Overdue.css';

const Overdue = ({ tasks, filter, onDeleteTask }) => {
  const getCurrentDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
  };

  const isOverdue = (deadline) => {
    const taskDeadline = new Date(deadline);
    taskDeadline.setHours(0, 0, 0, 0);
    const today = getCurrentDate();
    return taskDeadline < today;
  };

  const isCurrentWeek = (deadline) => {
    const taskDate = new Date(deadline);
    taskDate.setHours(0, 0, 0, 0);
    const today = getCurrentDate();
    
    const dayOfWeek = today.getDay();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - dayOfWeek);
    startOfWeek.setHours(0, 0, 0, 0);
    
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
    
    return taskDate >= startOfWeek && taskDate <= endOfWeek;
  };

  const filterTasks = (tasksToFilter) => {
    const filtered = [];
    for (let i = 0; i < tasksToFilter.length; i++) {
      const task = tasksToFilter[i];
      if (filter === 'all') {
        filtered[filtered.length] = task;
      } else if (filter === 'week') {
        if (isCurrentWeek(task.deadline)) {
          filtered[filtered.length] = task;
        }
      } else if (filter === 'overdue') {
        if (isOverdue(task.deadline)) {
          filtered[filtered.length] = task;
        }
      }
    }
    return filtered;
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

  const filteredTasks = filterTasks(tasks);
  const sortedTasks = sortTasksByDate(filteredTasks);

  return (
    <div>
      <ol className="overdue-list">
        {sortedTasks.map((task, index) => (
          <li 
            key={task.id} 
            className={isOverdue(task.deadline) ? 'overdue-item overdue-warning' : 'overdue-item'}
          >
            <span className="overdue-title">{task.title}</span>
            <span className="overdue-deadline">{task.deadline}</span>
            <button 
              className="delete-btn"
              onClick={() => onDeleteTask(task.id)}>Удалить</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Overdue;