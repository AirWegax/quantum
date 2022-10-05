let lessonsList = document.querySelectorAll('.lessons-list');

let setWeek = document.querySelector('.week'); 
let setWeek2 = document.querySelector('.week2');

let windowOuterWidth = window.outerWidth;
let widthEqual = windowOuterWidth / 1.2;

lessonsList.forEach(function(userItem) {
  userItem.style.cssText = `width: ${widthEqual}px;`;
});

window.addEventListener('resize', (e) => {
  windowOuterWidth = window.outerWidth;
  widthEqual = windowOuterWidth / 1.2;
  // edit style lessonsList
  lessonsList.forEach(function(lessonsListItem) {
    lessonsListItem.style.cssText = `width: ${widthEqual}px;`;
  });
});

const globalDay = new Date();
let getMonth = globalDay.getMonth();
let setTextMonth = '';
// set default
getMonth += 1;

if (getMonth === 1) {
  setTextMonth = 'Январь';
} else if (getMonth === 2) {
  setTextMonth = 'Февраль';
} else if (getMonth === 3) {
  setTextMonth = 'Март';
} else if (getMonth === 4) {
  setTextMonth = 'Апрель';
} else if (getMonth === 5) {
  setTextMonth = 'Май';
} else if (getMonth === 6) {
  setTextMonth = 'Июнь';
} else if (getMonth === 7) {
  setTextMonth = 'Июль';
} else if (getMonth === 8) {
  setTextMonth = 'Август';
} else if (getMonth === 9) {
  setTextMonth = 'Сентебрь';
} else if (getMonth === 10) {
  setTextMonth = 'Октябрь';
} else if (getMonth === 11) {
  setTextMonth = 'Ноябрь';
} else if (getMonth === 12) {
  setTextMonth = 'Декабрь';
}

setWeek.textContent = `${setTextMonth} 1-7`;
setWeek2.textContent = `${setTextMonth} 7-14`;