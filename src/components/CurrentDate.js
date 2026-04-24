import React from 'react';

const CurrentDate = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    
    return formattedDay + '.' + formattedMonth + '.' + year;
  };

  return (
    <div>Текущая дата: {getCurrentDate()}</div>
  );
};

export default CurrentDate;