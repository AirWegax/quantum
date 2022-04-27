const timeTimer = document.getElementById('timetimer')

let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let day = date.getDay();

let minTimer = 0;

function datesUpdated() {
	date = new Date();
	hour = date.getHours();
	min = date.getMinutes();
	day = date.getDay();
}
setInterval(datesUpdated, 1000)

if ((day == 0) || (day == 6)) {
	timeTimer.textContent = 'Выходные!';
}

function timeUpdate() {
	if (day >= 1 && day <= 5) {
		if (hour <= 6) {
			timeTimer.textContent = 'Уроки кончились!';
			minTimer = 0;
		}
		if (hour >= 13 && min >= 55) {
			timeTimer.textContent = 'Уроки кончились!';
			minTimer = 0;
		}
		if (hour == 7) {
			minTimer = 60;
			minTimer = minTimer - min;
			timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
			minTimer = 0;
		}
		if (hour >= 8 && hour <= 13) {
			// first lesson
			if (hour == 8 && min <= 45) {
				minTimer = 45;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				minTimer = 0;
			}
			if (hour == 8) {
				if (min >= 45 && min <= 50) {
					minTimer = 50;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					minTimer = 0;
				}
			}
			// second lesson
			if ((hour == 8) || (hour == 9)) {
				if (min >= 50) {
					minTimer = 95;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;
				} else if (hour == 9 && min <= 35) {
					minTimer = 35;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;	
				}
			}
			if (hour == 9) {
				if (min >= 35 && min <= 45) {
					minTimer = 45;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					minTimer = 0;
				}
			}
			// third lesson
			if ((hour == 9) || (hour == 10)) {
				if (min >= 45) {
					minTimer = 90;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;
				} else if (hour == 10 && min <= 30) {
					minTimer = 30;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;	
				}
			}
			if (hour == 10) {
				if (min >= 30 && min <= 35) {
					minTimer = 35;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					minTimer = 0;
				}
			}
			// fourth lesson
			if ((hour == 10) || (hour == 11)) {
				if (min >= 35) {
					minTimer = 80;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;
				} else if (hour == 11 && min <= 20) {
					minTimer = 20;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;	
				}
			}
			if (hour == 11) {
				if (min >= 20 && min <= 30) {
					minTimer = 30;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					minTimer = 0;
				}
			}
			// fifth lesson
			if ((hour == 11) || (hour == 12)) {
				if (min >= 30) {
					minTimer = 75;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;
				} else if (hour == 12 && min <= 15) {
					minTimer = 15;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;	
				}
			}
			if (hour == 12) {
				if (min >= 15 && min <= 20) {
					minTimer = 20;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					minTimer = 0;
				}
			}
			// sixth lesson
			if ((hour == 12) || (hour == 13)) {
				if (min >= 20) {
					minTimer = 65;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;
				} else if (hour == 13 && min <= 5) {
					minTimer = 5;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					minTimer = 0;	
				}
			}
			if (hour == 13) {
				if (min >= 5 && min <= 10) {
					minTimer = 10;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					minTimer = 0;
				}
			}
			// seventh lesson
			if (hour == 13 && min >= 10) {
				if (min <= 55) {
					minTimer = 55;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До конца: ' + minTimer + ' минут';
					minTimer = 0;
				}
			}
			if (hour >= 13 && min >= 55) {
				timeTimer.textContent = 'Уроки кончились!';
				minTimer = 0;
			}
		}
	}
}

timeUpdate();
setInterval(timeUpdate, 1000)
