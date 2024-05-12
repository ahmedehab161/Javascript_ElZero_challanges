/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let index = 0;
while (index < myAdmins.length) {
    if (myAdmins[index] == "stop") {
        break;
    }
    index++;
}
document.write(`<div>We Have ${index} Admins</div>`);
document.write(`<hr>`);

document.write(`<div> The Admin For Team {x} Is {x}`);
document.write(`<h3>Team Members:</h3>`);
document.write(`<p>-</p>`);
document.write(`</div>`);
document.write(`<hr>`);