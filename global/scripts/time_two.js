// start
const timeTimer = document.getElementById('timetimer')

const date = new Date();

let hour = date.getHours();
let min = date.getMinutes();
let day = date.getDay();

let minTimer = 75;

if ((day == 0) || (day == 6)) {
	timeTimer.textContent = 'Выходные!';
}
function timeUpdate() {
	if (day >= 1 && day <= 5) {
		if (hour <= 12) {
			timeTimer.textContent = 'Уроки кончились!';
		}
		if (hour >= 19 && min >= 20) {
			timeTimer.textContent = 'Уроки кончились!';
		} else if (hour >= 19) {
			timeTimer.textContent = 'Уроки кончились!';
		}
		if (hour <= 12) {
			timeTimer.textContent = 'Уроки кончились!';
		}

		if ((hour == 13) || (hour == 14)) {
			minTimer = minTimer - min;
			if (hour == 13) {
				if (minTimer <= 75 && minTimer >= 60) {
					let timerHour = 0;
					timerHour = minTimer - 60;
					timeTimer.textContent = 'До урока: ' + '1 час ' + timerHour + ' минут';
				} else {
					timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
				}
			}
			if (hour == 14) {
				minTimer = 15;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
				minTimer = 0;
			}
		}
		// first lesson
	 	if ((hour == 14) || (hour == 15)) {
	 		if (min >= 15) {
	 			minTimer = 60;
	 			minTimer = minTimer - min;
	 			timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
	 			minTimer = 0;
	 		} else if (hour == 15 && min <= 0) {
	 			minTimer = 0;
	 			minTimer = minTimer - min;
	 			timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
	 			minTimer = 0;	
	 		}
	 		if (hour == 15) {
	 			if (min >= 0 && min <= 5) {
		 			minTimer = 5;
		 			minTimer = minTimer - min;
		 			timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
		 			minTimer = 0;
	 			}
			}
		}
		// second lesson
		if (hour == 15 && min >= 5) {
		 	minTimer = 50;
			minTimer = minTimer - min;
			timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
			minTimer = 0;
		}
		if ((hour == 15) || (hour == 16)) {
		 	if (min >= 50) {
	 			minTimer = 60;
	 			minTimer = minTimer - min;
	 			timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
	 			minTimer = 0;
			} 
		}
		// third lesson
		if (hour == 16 && min >= 0) {
		 	minTimer = 45;
			minTimer = minTimer - min;
			timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
			minTimer = 0;
		}
		if (hour == 16) {
			if (min >= 45 && min <= 55) {
	 			minTimer = 55;
	 			minTimer = minTimer - min;
	 			timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
	 			minTimer = 0;
			}
		}
		// fourth lesson
		if ((hour == 16) || (hour == 17)) {
			if (min >= 55) {
				minTimer = 100;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				minTimer = 0;
			} else if (hour == 17 && min <= 40) {
				minTimer = 40;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				minTimer = 0;	
			}
		}
		if (hour == 17) {
			if (min >= 40 && min <= 45) {
				minTimer = 45;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
				minTimer = 0;
			}
		}
		// fifth lesson
		if ((hour == 17) || (hour == 18)) {
			if (min >= 45) {
				minTimer = 90;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				minTimer = 0;
			} else if (hour == 18 && min <= 30) {
				minTimer = 30;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				minTimer = 0;	
			}
		}
		if (hour == 18) {
			if (min >= 30 && min <= 35) {
				minTimer = 35;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До урока: ' + minTimer + ' минут';
				minTimer = 0;
			}
		}
		// sixth lesson
		if ((hour == 18) || (hour == 19)) {
			if (min >= 35) {
				minTimer = 80;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				minTimer = 0;
			} else if (hour == 19 && min <= 20) {
				minTimer = 20;
				minTimer = minTimer - min;
				timeTimer.textContent = 'До перемены: ' + minTimer + ' минут';
				minTimer = 0;	
			}
		}
		if (hour >= 19 && min >= 20) {
			timeTimer.textContent = 'Уроки кончились!';
		} else if (hour >= 19) {
			timeTimer.textContent = 'Уроки кончились!';
		}
	}
}
timeUpdate();
setInterval(timeUpdate, 2000)
document.addEventListener('visibilitychange', timeUpdate);
window.addEventListener('blur', timeUpdate);
