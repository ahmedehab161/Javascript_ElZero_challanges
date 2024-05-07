/* 
    Arrays Challenges
*/

// Only Use The Vars Don't Use Any Number From Outside The Vars Like EX. (When Using Slice())

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

//Write Code Here

let newMy = my.pop() + my.pop();
console.log(my.reverse()); //["Osama" , "Elham" , "Mazero" , "Ahmed"]

//---------------------------------------------------------------------------------------
//It also can be solved with (Min() and Max())
let startIndex = counter - (--counter);

/*
                    Warning
Now because we decrement counter in the previous code 
counter now is = 2
*/ 

let endIndex = ++counter;

console.log(my.slice(startIndex, endIndex)); //["Elham", "Mazero"]

//------------------------------------------------------------------------------------------------
// ** This the Fastest Solution There Are Many Other Solutions **
console.log(my[1][0] + my[1][1] + my[2][2] + my[2][3] + my[2][4] + my[2][5]); // "Elzero"

//-----------------------------------------------------------------------------------------------
// ** This the Fastest Solution There Are Many Other Solutions **
console.log(my[2][4] + my[0][0]); //"rO"