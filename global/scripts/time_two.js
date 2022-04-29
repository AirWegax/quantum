// start
const timeTimer = document.getElementById('time-timer')
const lessonLeft = document.getElementById('lesson-left')

let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let day = date.getDay();

let minTimer = 75;

function datesUpdated() {
	date = new Date();
	hour = date.getHours();
	min = date.getMinutes();
	day = date.getDay();
}
setInterval(datesUpdated, 1000)

if ((day === 0) || (day === 6)) {
	timeTimer.textContent = 'Выходные!';
}
function timeUpdate() {
	if (day >= 1 && day <= 5) {
		if ((hour === 13) || (hour === 14)) {
			minTimer = minTimer - min;
			if (hour === 13) {
				if (minTimer <= 75 && minTimer >= 60) {
					let timerHour;
					timerHour = minTimer - 60;
					timeTimer.textContent = 'До (1-го) урока: ' + '1 час ' + timerHour + ' минут';
				} else {
					timeTimer.textContent = 'До (1-го) урока: ' + minTimer + ' минут';
				}
			}
			if (hour === 14) {
				minTimer = 15;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До (1-го) урока: ' + minTimer + ' минут';
				minTimer = 0;
			}
		}
		// first lesson
	 	if ((hour === 14) || (hour === 15)) {
			// lesson left: 6
	 		if (min >= 15) {
	 			minTimer = 60;
	 			minTimer = minTimer - min;
	 			timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (6)';
	 			minTimer = 0;
	 		} else if (hour === 15 && min <= 0) {
	 			minTimer = 0;
	 			minTimer = minTimer - min;
	 			timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (6)';
	 			minTimer = 0;	
	 		}
			 // turn
	 		if (hour === 15) {
	 			if (min >= 0 && min <= 5) {
					// lesson left: 5
		 			minTimer = 5;
		 			minTimer = minTimer - min;
		 			timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
					lessonLeft.textContent = 'Осталось уроков: (5)';
		 			minTimer = 0;
	 			}
			}
		}
		// second lesson
		if (hour === 15 && min >= 5) {
			// lesson left: 5
		 	minTimer = 50;
			minTimer = minTimer - min;
			timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
			lessonLeft.textContent = 'Осталось уроков: (5)';
			minTimer = 0;
		}
		// turn
		if ((hour === 15) || (hour === 16)) {
			// lesson left: 4
		 	if (min >= 50) {
	 			minTimer = 60;
	 			minTimer = minTimer - min;
	 			timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (4)';
	 			minTimer = 0;
			} 
		}
		// third lesson
		if (hour === 16 && min >= 0) {
			// lesson left: 4
		 	minTimer = 45;
			minTimer = minTimer - min;
			timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
			lessonLeft.textContent = 'Осталось уроков: (4)';
			minTimer = 0;
		}
		if (hour === 16) {
			if (min >= 45 && min <= 55) {
				// lesson left: 3
	 			minTimer = 55;
	 			minTimer = minTimer - min;
	 			timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (3)';
	 			minTimer = 0;
			}
		}
		// fourth lesson
		if ((hour === 16) || (hour === 17)) {
			// lesson left: 3
			if (min >= 55) {
				minTimer = 100;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (3)';
				minTimer = 0;
			} else if (hour === 17 && min <= 40) {
				minTimer = 40;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (3)';
				minTimer = 0;	
			}
		}
		if (hour === 17) {
			if (min >= 40 && min <= 45) {
				// lesson left: 2
				minTimer = 45;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (2)';
				minTimer = 0;
			}
		}
		// fifth lesson
		if ((hour === 17) || (hour === 18)) {
			// lesson left: 2
			if (min >= 45) {
				minTimer = 90;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (2)';
				minTimer = 0;
			} else if (hour === 18 && min <= 30) {
				minTimer = 30;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (2)';
				minTimer = 0;	
			}
		}
		if (hour === 18) {
			if (min >= 30 && min <= 35) {
				// lesson left: 1
				minTimer = 35;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (1)';
				minTimer = 0;
			}
		}
		// sixth lesson
		if ((hour === 18) || (hour === 19)) {
			// lesson left: 1
			if (min >= 35) {
				minTimer = 80;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (1)';
				minTimer = 0;
			} else if (hour === 19 && min < 20) {
				minTimer = 20;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				lessonLeft.textContent = 'Осталось уроков: (1)';
				minTimer = 0;	
			}
		}
	}
}
setInterval(timeUpdate, 1000)
timeUpdate();
