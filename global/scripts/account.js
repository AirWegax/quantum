// button get HTML
let button = document.getElementById('submit-btn')
let exitButtonZ = document.getElementById('exit')
// counter for SaveLogin
let counter = localStorage.getItem('counter')
// inputs get HTML
let dataLoginInput = document.getElementById('data-login')
let dataPasswordInput = document.getElementById('data-password')
if (counter == 1) {
    location.href = '../../quantum/pages/accounts_pages/zahar-id-s0b3g4x6m0x8e8.html';
}
// change color to default for inputs CSS
function borderColorChange() {
    dataLoginInput.style.border = '2px solid #fff';
    dataPasswordInput.style.border = '2px solid #fff';
}
//logic registration (ONLY JS)
button.onclick = function () {
    // login and password from HTML inputs
    let login = document.getElementById('data-login').value;
    let password = document.getElementById('data-password').value;
    // Zahar logick (login and password)
    if (loginZahar === login && passwordZahar === password) {
        localStorage.setItem('counter', '1');
        counter = localStorage.getItem('counter')
        location.href = '../../quantum/pages/accounts_pages/zahar-id-s0b3g4x6m0x8e8.html';
    } else if (loginZahar != login && passwordZahar === password) {
        dataLoginInput.style.border = '2px solid red';
        dataPasswordInput.style.border = '2px solid #20ff00';
        setTimeout(borderColorChange, 3500)
    } else if (loginZahar === login && passwordZahar != password) {
        dataLoginInput.style.border = '2px solid #20ff00';
        dataPasswordInput.style.border = '2px solid red';
        setTimeout(borderColorChange, 3500)
    } else {
        dataLoginInput.style.border = '2px solid red';
        dataPasswordInput.style.border = '2px solid red';
        setTimeout(borderColorChange, 3500)
    }
}


