const timeTimer = document.getElementById('time-timer')
const lessonLeft = document.getElementById('lesson-left')

let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let day = date.getDay();

function datesUpdated() {
	date = new Date();
	hour = date.getHours();
	min = date.getMinutes();
	day = date.getDay();
}
setInterval(datesUpdated, 1000) 

//test
// day = 3;
// hour = 13;
// min = 5;

let minTimer = 0;

if ((day === 0) || (day === 6)) {
	timeTimer.textContent = 'Выходные!';
}

function timeUpdate() {
	if (day >= 1 && day <= 5) {
		if (hour === 7) {
			minTimer = 60;
			minTimer = minTimer - min;
			timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
			minTimer = 0;
		}
		if (hour >= 8 && hour <= 13) {
			// first lesson
			if (hour === 8 && min <= 45) {
				// lesson left: 7
				minTimer = 45;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (7)';
				minTimer = 0;
			}
			// turn
			if (hour === 8) {
				if (min >= 45 && min <= 50) {
					// lesson left: 6
					minTimer = 50;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (6)';
					minTimer = 0;
				}
			}
			// second lesson
			if ((hour === 8) || (hour === 9)) {
				// lesson left: 6
				if (min >= 50) {
					minTimer = 95;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (6)';
					minTimer = 0;
				} else if (hour === 9 && min <= 35) {
					minTimer = 35;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (6)';
					minTimer = 0;	
				}
			}
			// lesson left: 5
			// turn
			if (hour === 9) {
				if (min >= 35 && min <= 45) {
					minTimer = 45;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (5)';
					minTimer = 0;
				}
			}
			// third lesson
			if ((hour === 9) || (hour === 10)) {
				// lesson left: 5
				if (min >= 45) {
					minTimer = 90;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (5)';
					minTimer = 0;
				} else if (hour === 10 && min <= 30) {
					minTimer = 30;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (5)';
					minTimer = 0;	
				}
			}
			if (hour === 10) {
				// lesson left: 4
				// turn
				if (min >= 30 && min <= 35) {
					minTimer = 35;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (4)';
					minTimer = 0;
				}
			}
			// fourth lesson
			if ((hour === 10) || (hour === 11)) {
				// lesson left: 4
				if (min >= 35) {
					minTimer = 80;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (4)';
					minTimer = 0;
				} else if (hour === 11 && min <= 20) {
					minTimer = 20;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (4)';
					minTimer = 0;	
				}
			}
			if (hour === 11) {
				// lesson left: 3
				if (min >= 20 && min <= 30) {
					minTimer = 30;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (3)';
					minTimer = 0;
				}
			}
			// fifth lesson
			if ((hour === 11) || (hour === 12)) {
				// lesson left: 3
				if (min >= 30) {
					minTimer = 75;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (3)';
					minTimer = 0;
				} else if (hour === 12 && min <= 10) {
					minTimer = 10;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (3)';
					minTimer = 0;	
				}
			}
			if (hour === 12) {
				// lesson left: 2
				if (min >= 10 && min <= 15) {
					minTimer = 15;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (2)';
					minTimer = 0;
				}
			}
			// sixth lesson
			if ((hour === 12) || (hour === 13)) {
				// lesson left: 2
				if (hour === 12 && min >= 15) {
					minTimer = 60;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (2)';
					minTimer = 0;
				} else if (hour === 13 && min <= 0) {
					minTimer = 5;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (2)';
					minTimer = 0;	
				}
			}
			if (hour === 13) {
				// lesson left: 1
				if (min >= 0 && min <= 5) {
					minTimer = 5;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (1)';
					minTimer = 0;
				}
			}
			// seventh lesson
			if (hour === 13 && min >= 5) {
				// lesson left: 1
				if (min < 50) {
					minTimer = 50;
					minTimer = minTimer - min;
					timeTimer.textContent = 'До конца: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (1)';
					minTimer = 0;
				}
			}
		}
	}
}

timeUpdate();
setInterval(timeUpdate, 1000)
