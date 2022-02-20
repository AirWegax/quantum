const inquryMain = document.getElementById('inqury-main')
const btn = document.getElementById('btn')

let idAll;

let counter = 0;

let ranNum = Math.floor(Math.random() * 9);
let ranNum2 = Math.floor(Math.random() * 9);
let ranNum3 = Math.floor(Math.random() * 9);
let ranNum4 = Math.floor(Math.random() * 10);
let ranNum5 = Math.floor(Math.random() * 9);
let ranNum6 = Math.floor(Math.random() * 9);
let ranNum7 = Math.floor(Math.random() * 9);
let result;
function inquryKey() {
    let div = document.querySelector(".inqury-main")
    let p = document.createElement('p')
    div.append(p)
    p.classList.add("idtext");
    let abc = "abcdefghijklmnopqrstuvwxyz";
        let rs = "";
        let rs2 = "";
        let rs3 = "";
        let rs4 = "";
        let rs5 = "";
        let rs6 = "";
        let rs7 = "";
        while (rs.length < 1) {
            rs += abc[Math.floor(Math.random() * abc.length)];
            rs2 += abc[Math.floor(Math.random() * abc.length)];
            rs3 += abc[Math.floor(Math.random() * abc.length)];
            rs4 += abc[Math.floor(Math.random() * abc.length)];
            rs5 += abc[Math.floor(Math.random() * abc.length)];
            rs6 += abc[Math.floor(Math.random() * abc.length)];
            rs7 += abc[Math.floor(Math.random() * abc.length)];
        }
    idAll = rs + ranNum + rs2 + ranNum2 + rs3 + ranNum3 + rs4 + ranNum4 + rs5 + ranNum5 + rs6 + ranNum6 + rs7 + ranNum7;
    btn.textContent = 'ID сгенерирован';
    p.textContent = "Ваш ID: " + idAll;
    btn.removeAttribute('onclick');
}
