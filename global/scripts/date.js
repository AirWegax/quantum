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

let year = date.getFullYear();
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
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateOne.textContent = 'Пн ' + month + '/' + day;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateOne.textContent = 'Пн ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day - 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateOne.textContent = 'Пн ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day - 2;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateOne.textContent = 'Пн ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day - 3;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateOne.textContent = 'Пн ' + month + '/' + day;
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day - 4;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateOne.textContent = 'Пн ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 5;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateOne.textContent = 'Пн ' + month + '/' + day;
	}
	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 5;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateTwo.textContent = 'Вт ' + month + '/' + day;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day - 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day - 2;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day - 3;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 4;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateTwo.textContent = 'Вт ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 4;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateThere.textContent = 'Ср ' + month + '/' + day;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 2;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateThere.textContent = 'Ср ' + month + '/' + day;
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day - 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day - 2;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 3;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateThere.textContent = 'Ср ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 3;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFour.textContent = 'Чт ' + month + '/' + day;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 3;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 2;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day + 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day - 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 2;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFour.textContent = 'Чт ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 2;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFive.textContent = 'Пт ' + month + '/' + day;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 4;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 3;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day + 2;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day + 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day - 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateFive.textContent = 'Пт ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day - 3;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSix.textContent = 'Сб ' + month + '/' + day;
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 5;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 4;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day + 3;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day + 2;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day + 1;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day;
		if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSix.textContent = 'Сб ' + month + '/' + day;	
	}

	if (dayWeek == 0) {
		day = date.getDate();
		day = day;
				if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSeven.textContent = 'Вс ' + month + '/' + day;	
	} else if (dayWeek == 1) {
		day = date.getDate();
		day = day + 1;
				if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSeven.textContent = 'Вс ' + month + '/' + day;	
	} else if (dayWeek == 2) {
		day = date.getDate();
		day = day + 5;
				if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSeven.textContent = 'Вс ' + month + '/' + day;	
	} else if (dayWeek == 3) {
		day = date.getDate();
		day = day + 4;
				if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSeven.textContent = 'Вс ' + month + '/' + day;
	} else if (dayWeek == 4) {
		day = date.getDate();
		day = day + 3;
				if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSeven.textContent = 'Вс ' + month + '/' + day;
	} else if (dayWeek == 5) {
		day = date.getDate();
		day = day + 2;
				if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSeven.textContent = 'Вс ' + month + '/' + day;
	} else if (dayWeek == 6) {
		day = date.getDate();
		day = day + 1;
				if (month == 1 && day >= 31) {
			month = month + 1;
		} else if(month == 2) {
			if (day >= 28) {
				month = 3;
			}
			if (day >= 29) {
				month = 3;
			}
		} else if(month == 3 && day >= 31) {
			month = month + 1;
		} else if(month == 4 && day >= 30) {
			month = month + 1;
		} else if(month == 5 && day >= 31) {
			month = month + 1;
		} else if(month == 6 && day >= 30) {
			month = month + 1;
		} else if(month == 7 && day >= 31) {
			month = month + 1;
		} else if(month == 8 && day >= 31) {
			month = month + 1;
		} else if(month == 9 && day >= 30) {
			month = month + 1;
		} else if(month == 10 && day >= 31) {
			month = month + 1;
		} else if(month == 11 && day >= 30) {
			month = month + 1;
		} else if(month == 12 && day >= 31) {
			month = month + 1;
		}
		dateSeven.textContent = 'Вс ' + month + '/' + day;
	}
}

document.addEventListener('visibilitychange', updateDate);
window.addEventListener('blur', updateDate);