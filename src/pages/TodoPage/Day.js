import React from 'react';

import '../../css/styles.css';

export default function Day() {
  function getDay() {
    const weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const date = new Date();
    const curentYear = date.getFullYear();
    const currentDate = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentDay = weekday[date.getDay()];

    return {
      year: curentYear,
      date: currentDate,
      month: currentMonth,
      day: currentDay,
    };
  }

  const {
    year, month, date, day,
  } = getDay();

  return (
    <div className="todo-main__header">
      <h2 className="todo-main__date">{`${year}.${month}.${date}`}</h2>
      <h1 className="todo-main__day">{`${day}`}</h1>
    </div>
  );
}
