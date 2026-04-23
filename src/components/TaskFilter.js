import React from 'react';
import './TaskFilter.css';

const TaskFilter = ({ filter, onFilterChange }) => {
  return (
    <div className="task-filter">
      <button 
        className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => onFilterChange('all')}
      >
        Все задания
      </button>
      <button 
        className={filter === 'week' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => onFilterChange('week')}
      >
        Текущая неделя
      </button>
      <button 
        className={filter === 'overdue' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => onFilterChange('overdue')}
      >
        Просроченные
      </button>
    </div>
  );
};

export default TaskFilter;