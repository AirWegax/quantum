//varibalse today-tomorow and more..
let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let dayWeek = date.getDay();

//logick change date

function checkMD() {
	month = date.getMonth();
	month = month + 1;
	if (month == 1 && day > 31) {
		month = month + 1;
	} else if(month == 2) {
		if (day >= 28) {
			month = 3;
		}
		if (day >= 29) {
			month = 3;
		}
	} else if(month == 3 && day > 31) {
		month = month + 1;
		day = 1;
	} else if(month == 4 && day > 30) {
		month = month + 1;
		day = 1;
	} else if(month == 5 && day > 31) {
		month = month + 1;
		day = 1;
	} else if(month == 6 && day > 30) {
		month = month + 1;
		day = 1;
	} else if(month == 7 && day > 31) {
		month = month + 1;
		day = 1;
	} else if(month == 8 && day > 31) {
		month = month + 1;
		day = 1;
	} else if(month == 9 && day > 30) {
		month = month + 1;
		day = 1;
	} else if (month == 10 && day > 31) {
		month = month + 1;
		day = 1;
	} else if(month == 11 && day > 30) {
		month = month + 1;
		day = 1;
	} else if(month == 12 && day > 31) {
		month = month + 1;
		day = 1;
	}

	if (day == 0) {
		month = month - 1;
		if (month == 1) {
			day = 31;
		} else if (month == 2) {
			day = 28;
			if (year == 2024) {
				day = 29;
			} else if (year == 2028) {
				day = 29;
			} else if (year == 2032) {
				day = 29;
			} else if (year == 2036) {
				day = 29;
			} else if (year == 2040) {
				day = 29;
			} else if (year == 2044) {
				day = 29;
			} else if (year == 2048) {
				day = 29;
			} else if (year == 2052) {
				day = 29;
			} else if (year == 2056) {
				day = 29;
			} else if (year == 2060) {
				day = 29;
			}
		} else if (month == 3) {
			day = 31;
		} else if (month == 4) {
			day = 30;
		} else if (month == 5) {
			day = 31;
		} else if (month == 6) {
			day = 30;
		} else if (month == 7) {
			day = 31;
		} else if (month == 8) {
			day = 31;
		} else if (month == 9) {
			day = 30;
		} else if (month == 10) {
			day = 31;
		} else if (month == 11) {
			day = 30;
		} else if (month == 12) {
			day = 31;
		}
	}
}

if (dayWeek == 0) {
	day = day - 2;
	checkMD();
	document.title = 'Quantum ' + '| ' + 'ПТ ' + month + '/' + day;	
} else if (dayWeek == 1) {
	day = date.getDate();
	day = day + 4;
	checkMD();
	document.title = 'Quantum ' + '| ' + 'ПТ ' + month + '/' + day;	
} else if (dayWeek == 2) {
	day = date.getDate();
	day = day + 3;
	checkMD();
	document.title = 'Quantum ' + '| ' + 'ПТ ' + month + '/' + day;	
} else if (dayWeek == 3) {
	day = date.getDate();
	day = day + 2;
	checkMD();
	document.title = 'Quantum ' + '| ' + 'ПТ ' + month + '/' + day;	
} else if (dayWeek == 4) {
	day = date.getDate();
	day = day + 1;
	checkMD();
	document.title = 'Quantum ' + '| ' + 'ПТ ' + month + '/' + day;	
} else if (dayWeek == 5) {
	day = date.getDate();
	day = day;
	checkMD();
	document.title = 'Quantum ' + '| ' + 'ПТ ' + month + '/' + day;	
} else if (dayWeek == 6) {
	day = date.getDate();
	day = day - 1;
	checkMD();
	document.title = 'Quantum ' + '| ' + 'ПТ ' + month + '/' + day;	
}