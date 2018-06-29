/*
* Objects, Interfaces, and APIs
 */

// Objects have states and functionality

let dog = {
	name: "Steve",
	color: "brown",
	breed: "Pug",
	size: "small",
	bark: function(){
		console.log("Bark!");
	},
};

// dog.bark();

// passing by value and passing by reference
// objects are always passed by reference
// primitive types are passed by value
function x(y){
	y += 5;
	console.log(y);
}

let y = 5;
x(y);
console.log(y);

function printNum(obj) {
	obj.num += 5;
	console.log(obj.num);
}

let person = {
	name: "Tom",
	num: 10,
};
printNum(person);
console.log(person.num);


