/*
    Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

let index = 0;
while (index < myAdmins.length) {
    if (myAdmins[index] == "Stop") {
        break;
    }
    index++;
}
document.write(`<div>We Have ${index} Admins</div>`);
document.write(`<hr>`);
for (let i = 0; i < index; i++)
{
    document.write(`<div> The Admin For Team ${i + 1} Is ${myAdmins[i]}`);
    document.write(`<h3>Team Members:</h3>`);
    for (let j = 0; j < myEmployees.length; j++)
    {
        if (myEmployees[j].charAt(0) == myAdmins[i].charAt(0))
        {
            document.write(`<p>- ${myEmployees[j]}</p>`);
        }
    }
    document.write(`</div>`);
    document.write(`<hr>`);
}
