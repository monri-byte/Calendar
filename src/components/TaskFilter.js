import React from 'react';

const TaskFilter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <button onClick={() => onFilterChange('all')}>
        Все задания
      </button>
      <button onClick={() => onFilterChange('week')}>
        Текущая неделя
      </button>
      <button onClick={() => onFilterChange('overdue')}>
        Просроченные
      </button>
    </div>
  );
};

export default TaskFilter;