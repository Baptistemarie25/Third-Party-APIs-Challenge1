var calendarEl = document.getElementById('calendar');
var currentDayEl = document.getElementById('currentDay');
var taskInfoArray = JSON.parse(localStorage.getItem('calendarEvents'));
if (!taskInfoArray) {
    taskInfoArray = []
};

// display current date at the top 
const setCurrentDay = () => {
    var todaysDate = moment().format('MMM Do, YYYY');
    currentDayEl.textContent = todaysDate;
};

//save task to local storage on button click 
const storeEvents  = () => {
    localStorage.setItem('calendarEvents', JSON.stringify(taskInfoArray))
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
        
        var eventEl = document.createElement('input');
        eventEl.classList = 'col-8';
        eventEl.setAttribute('id',`hourInput${i}`);
        eventEl.value = taskInfoArray[i] || '';
        var saveButtonEl = document.createElement('button');
        saveButtonEl.classList = 'col-2 btn-primary';
        saveButtonEl.textContent = 'save';
        saveButtonEl.setAttribute('data-blockhour', i);
        saveButtonEl.addEventListener('click', function(event) {
            // stored button i clicked on as a variable
            var clickedButtonEl = event.target;
            // set my hourIndex variable to custom attribute that was created on save button 
            var hourIndex = clickedButtonEl.getAttribute('data-blockHour');
            // grab input element that corresponds to the save button that is clicked
            var inputEl = document.getElementById(`hourInput${hourIndex}`);
            //stored the text content of the input element to the taskInfoArray
            taskInfoArray[hourIndex] = inputEl.value;
            //called the store Events function to store the events in local storage
            storeEvents();
        })

        hourBlockEl.appendChild(hourTextEl);
        hourBlockEl.appendChild(eventEl);
        hourBlockEl.appendChild(saveButtonEl);
    }
};


// apply bootstrap to change colors of the hours for past present future
//
setCurrentDay();
generateHours();
