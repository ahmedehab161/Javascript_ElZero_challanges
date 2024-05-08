// Assignment 1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice((num - num) , num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
//--------------------------------------------------------------------------------------------------------
//Assignment 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift() + friends.pop();

console.log(friends); // ["Eman", "Osama"]
//--------------------------------------------------------------------------------------------------------
//Assignment 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = [arrTwo.pop() , arrOne.pop() , arrOne.reverse() , arrTwo.reverse()];
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//--------------------------------------------------------------------------------------------------------
//Assignment 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][words.length - words.length].slice(2).toUpperCase()); // ZERO
//--------------------------------------------------------------------------------------------------------
//Assignment 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
//First Solution

let search1 = haystack.indexOf(needle);
if (search1 == 1) {
    console.log("Found");
} else {
    console.log("Not Found");
}
//--------------------------------------------
//Second Solution

let search2 = haystack.includes(needle);
if (search2) {
    console.log("Found");
} else {
    console.log("Not Found");
}
//--------------------------------------------
// Third Solution

let search3 = haystack.lastIndexOf(needle);
if (search3 == 1) {
  console.log("Found");
} else {
  console.log("Not Found");
}
//--------------------------------------------------------------------------------------------------------
//Assignment 6
/*
            --  Note  --
  This Is Not The Only Answer For This Task
  But It Is The Fastest
  If You Have Alternative Solution With The Same Output
  And The Same Requirments Then Goo :)
  And Share It Have A Nice Coding Day ;)
*/
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = [
  arr2.slice(
    arr1.length - arr2.length + arr1.length - arr2.length,
    arr1.length - arr2.length
  ),
  arr1.slice(arr1.length - arr2.length),
  arr2.slice(arr1.length - arr2.length),
];

allArrs = allArrs.join("").toLowerCase();

console.log(allArrs); // fxy
