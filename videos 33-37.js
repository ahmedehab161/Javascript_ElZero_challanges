// Assiment 1

// Test Case 1
let num = 9; // "009"

if (num < 10)
{
    console.log("00" + num);
    }

// Test Case 2
let num2 = 20; // "020"

if (num2 > 10 && num2 < 100)
{
    console.log("0" + num2)
    }

// Test Case 3
let num3 = 110; // "110"

if (num3 >= 100)
{
    console.log(num3);
}
//----------------------------------------------------------------------------------------
//Assiment 2

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log("{num1} Is The Same Value As {str}");

    if (num1 === str) {
        console.log("{num1} Is The Same Value As {str} And The Same Type");
    } else {
        console.log("{num1} Is The Same Value As {str} But Not The Same Type");
        
        if (num1 !== str2) {
          console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
        }
        
        if (str != str2 && typeof (str) == typeof (str2)) {
            console.log("{str} Is The Same Type As {str2} But Not The Same Value");
        }
    }
}

// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");
//------------------------------------------------------------------------------------------
//Assiment 3

let num5 = 10;
let num6 = 30;
let num7 = "30";

num5 < num7 && typeof num5 != typeof num7
    ? console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
    : console.log("Error");

num5 < num7 && num7 == num6 && typeof num7 == typeof num6
    ? console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
    : console.log("Error");

num7 !== num5 && typeof num7 != typeof num6
    ? console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
    : console.log("Error");

// Needed Output
// ("30 Is Larger Than 10 And Type string Not The Same Type As number");
// ("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
// ("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");