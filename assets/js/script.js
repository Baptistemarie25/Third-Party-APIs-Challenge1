var calendarEl = document.getElementById('calendar');
var currentDayEl = document.getElementById('currentDay');


// display current date at the top 
const setCurrentDay = () => {
    var todaysDate = moment().format('MMM Do, YYYY');
    currentDayEl.textContent = todaysDate;
};



