//varibalse today-tomorow and more..
let date = new Date();

let month = date.getMonth();
let day = date.getDate();
let dayWeek = date.getDay();

//logick change date

month = month + 1;


if (dayWeek == 0) {
	day = date.getDate();
	day = day;
} else if (dayWeek == 1) {
	day = date.getDate();
	day = day + 1;
	document.title = 'Quantum ' + '| ' + 'ВС ' + month + '/' + day;	
} else if (dayWeek == 2) {
	day = date.getDate();
	day = day + 5;
	document.title = 'Quantum ' + '| ' + 'ВС ' + month + '/' + day;	
} else if (dayWeek == 3) {
	day = date.getDate();
	day = day + 4;
	document.title = 'Quantum ' + '| ' + 'ВС ' + month + '/' + day;	
} else if (dayWeek == 4) {
	day = date.getDate();
	day = day + 3;
	document.title = 'Quantum ' + '| ' + 'ВС ' + month + '/' + day;	
} else if (dayWeek == 5) {
	day = date.getDate();
	day = day + 2;
	document.title = 'Quantum ' + '| ' + 'ВС ' + month + '/' + day;	
} else if (dayWeek == 6) {
	day = date.getDate();
	day = day + 1;
	document.title = 'Quantum ' + '| ' + 'ВС ' + month + '/' + day;	
}