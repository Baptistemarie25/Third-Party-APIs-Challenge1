var calendarEl = document.getElementById('calendar');
var currentDayEl = document.getElementById('currentDay');


// display current date at the top 
const setCurrentDay = () => {
    var todaysDate = moment().format('MMM Do, YYYY');
    currentDayEl.textContent = todaysDate;
};

// generate each element and add event listener to sec

const generateHours = () => {
    for(i = 0; i < 9; i++) {
        var hourBlockEl = document.createElement('div');
        hourBlockEl.classList = 'row';
        calendarEl.appendChild(hourBlockEl);

        var hourTextEl = document.createElement('p');
        hourTextEl.classList = 'col-2';
        if (i + 9 < 12){
            hourTextEl.textContent = `${i + 9} AM`;
        } else if (i + 9 == 12) {
            hourTextEl.textContent = `${i + 9} PM`;
        } else {
            hourTextEl.textContent= `${i - 3} PM`;
        }

    }
}

