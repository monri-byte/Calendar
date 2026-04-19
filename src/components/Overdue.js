import React from 'react';
import './Overdue.css';

const Overdue = ({ tasks }) => {
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
    <ol>
      {sortedTasks.map((task, index) => (
        <li 
          key={task.id} 
          className={isOverdue(task.deadline) ? 'overdue-item overdue-warning' : 'overdue-item'}
        >
          {task.title} - {task.deadline}
        </li>
      ))}
    </ol>
  );
};

export default Overdue;