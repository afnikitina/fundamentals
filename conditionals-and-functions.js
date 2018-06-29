/*
 * Conditionals, Functions, Scope, and Loops.
 */

/*
// Equals
let equals = 1 === "1";
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than or equals to
let greaterThanEq = 5 >= 5;

// Less than or equals to
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

let storeA = 31.10;
let storeB = 4.40;

let storeAIsLower = storeA < storeB;
//console.log(storeAIsLower);

function compareStorePrices (storeA, storeB) {
	if(storeA < storeB) {
		console.log("Store A has a lower price");
	} else if(storeB < storeA) {
		console.log("Store B has a lower price");
	} else {
		console.log("Both stores have the same price");
	}
}

compareStorePrices(5.87, 10.65);

function squareNum(number) {
	return number*number;
}

let squareNumber = squareNum(40.5);
console.log(squareNumber);

let x = 10;
function addNumbers(n, m) {
	return n + m;
}

console.log(x + addNumbers (46, 79));

// Scopes: global, local, and block scope
// Arrays - a special type of data structures
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
//console.log(ourArray[0]);

for (let i = 0; i < 4; i++) {
	console.log(ourArray[i]);
}
for (let i = 0; i < 3; i++) {
	console.log(ourArray[4][i]);
}
*/

let ourArray = [1,2,3,4,5,6,7,8,9,10];
let arrLength = ourArray.length;

for (let i = 0; i < arrLength; i++) {
	console.log(ourArray[i]);
}

let x = 0;
while ( x < 10) {
	console.log(x + ": Ran");
	x++;
}
