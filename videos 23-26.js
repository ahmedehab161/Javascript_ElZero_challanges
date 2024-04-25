// Assiment 1

console.log(100_000); // 100000
console.log(1e5); // 100000
console.log(5e4 + 5e4); // 100000
console.log(100000); // 100000
console.log(Number("50000") + Number("50000")); // 100000
console.log(10 * 10000); // 100000
console.log(String("100000")); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(Math.pow(10 , 5)); // 100000
console.log(10 ** 5); // 100000

//------------------------------------------------------------------
// Assiment 2

console.log(+ -(Number.MIN_SAFE_INTEGER)); // 9007199254740991
//------------------------------------------------------------------
// Assiment 3

console.log(Math.round(Math.log10(Number.MAX_SAFE_INTEGER))); // 16

//-------------------------------------------------------------------
// Assiment 4

let myVar = "100.56789 Views";

console.log(Number.parseInt(myVar)); // 100
console.log(Number.parseFloat(myVar).toFixed(2)); // 100.57

//-------------------------------------------------------------------
// Assiment 5

let num = 10;

console.log(10 - Number.isInteger(num) * 8); // 2

//-------------------------------------------------------------------
// Assiment 6

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number.parseInt(flt)); // 10
console.log(flt - 0.4); // 10

//--------------------------------------------------------------------
// Assiment 7

