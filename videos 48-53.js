//Assignment 1
let start = 10;
let end = 100;
let exclude = 40;

for (start; start <= end; start += 10) {
  if (start === exclude) {
    continue;
  }
  console.log(start);
}
//-------------------------------------------------------------------------------------------------------------------------
//Assignment 2
let start2 = 10;
let end2 = 0;
let stop = 3;

for (start2; start2 > end2; start2--) {
  if (start2 < 10) {
    console.log(`0${start2}`);
    if (start2 === stop) {
      break;
    }
  } else {
    console.log(`${start2}`);
  }
}
//-------------------------------------------------------------------------------------------------------------------------
//Assignment 3
let start3 = 1;
let end3 = 6;
let breaker = 2;

for (let i = start3; i <= end3; i++) {
  console.log(i);

  for (let j = start3; j <= breaker; j++) {
    console.log("-- " + 2 * j);
  }
}
//-------------------------------------------------------------------------------------------------------------------------
//Assignment 4
let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  index -= jump;
  if (index == jump) break;
}
//-------------------------------------------------------------------------------------------------------------------------
//Assignment 5
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0; i < friends.length; i++) {
  if (friends[i].charAt(0).toLowerCase() === letter) {
    friends.splice(i, 1);
  }
  console.log(i + 1 + " => " + friends[i]);
}
// Output
/*
    1 => Sayed
    2 => Eman
    3 => Mahmoud
    4 => Osama
    5 => Sameh
*/
//-------------------------------------------------------------------------------------------------------------------------
//Assignment 6
let start4 = 0;
let swappedName = "elZerO";

swappedName = swappedName.split("");

for (start4; start4 < swappedName.length; start4++) {
  if (swappedName[start4] == swappedName[start4].toLowerCase()) {
    swappedName[start4] = swappedName[start4].toUpperCase();
  } else {
    swappedName[start4] = swappedName[start4].toLowerCase();
  }
}
console.log(swappedName.join(""));
// Output
("ELzERo");
//-------------------------------------------------------------------------------------------------------------------------
//Assignment 7
let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

/* 
Here We Pre-increment For The Start5 Var To Start From Index " 1 "
Instead Of " 0 "
*/
for (++start5; start5 < mix.length; start5++) {
  if (typeof mix[start5] === "string") {
    continue;
  }

  console.log(mix[start5]);
}

// Output
2;
3;
4;
//-------------------------------------------------------------------------------------------------------------------------
