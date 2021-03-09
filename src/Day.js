import React from 'react';

export default function Day() {

    function getDay() {
        const weekday = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
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
        }
    }

    const { year, month, date, day } = getDay();

    return (
        <div>
            {`${year}.${month}.${date}.${day}`}
        </div>
    );

}