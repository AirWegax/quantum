// change date
// varivablse html element date
const dateOne = document.getElementById('date-one');
const dateTwo = document.getElementById('date-two');
const dateThere = document.getElementById('date-there');
const dateFour = document.getElementById('date-four');
const dateFive = document.getElementById('date-five');
const dateSix = document.getElementById('date-six');
const dateSeven = document.getElementById('date-seven');

//varibalse today-tomorow and more..
let date = new Date();

let month = date.getMonth();
let day = date.getDate();
let dayWeek = date.getDay();

//logick change date

month = month + 1;

updateDate();
setTimeout(updateDate, 10000);
function updateDate() {
	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 6;
		dateOne.textContent = 'Пн ' + month + '/' + day;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day;
		dateOne.textContent = 'Пн ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day - 1;
		dateOne.textContent = 'Пн ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day - 2;
		dateOne.textContent = 'Пн ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day - 3;
		dateOne.textContent = 'Пн ' + month + '/' + day;
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day - 4;
		dateOne.textContent = 'Пн ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 5;
		dateOne.textContent = 'Пн ' + month + '/' + day;
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 5;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 1;
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day;
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day - 1;
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day - 2;
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day - 3;
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 4;
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 4;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 2;
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 1;
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day;
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day - 1;
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day - 2;
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 3;
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 3;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 3;
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 2;
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day + 1;
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day;
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day - 1;
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 2;
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 2;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 4;
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 3;
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day + 2;
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day + 1;
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day;
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 1;
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 3;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 5;
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 4;
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day + 3;
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day + 2;
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day + 1;
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day;
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = day;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 1;
		dateSeven.textContent = 'Вс ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 5;
		dateSeven.textContent = 'Вс ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day + 4;
		dateSeven.textContent = 'Вс ' + month + '/' + day;
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day + 3;
		dateSeven.textContent = 'Вс ' + month + '/' + day;
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day + 2;
		dateSeven.textContent = 'Вс ' + month + '/' + day;
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day + 1;
		dateSeven.textContent = 'Вс ' + month + '/' + day;
	}
}

document.addEventListener('visibilitychange', updateDate);
window.addEventListener('blur', updateDate);