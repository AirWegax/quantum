let counter = localStorage.getItem('counter')
if (counter != 1) {
    location.href = '../../pages/acc.html'; 
}
function exitButton() {
    localStorage.removeItem('counter');
    location.href = '../../pages/acc.html';
}