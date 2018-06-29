//"use strict";

//let popup2 = window.open("popup2.html", "popup", " ");
/*
console.group("Properties of the current popup window object:");
console.log(`innerHeight: ${popup1.innerHeight}`);
console.log(`innerWidth: ${popup1.innerWidth}`);
console.log(`outerHeight: ${popup1.outerHeight}`);
console.log(`outerWidth: ${popup1.outerWidth}`);
console.log(`screenX: ${popup1.screenX}`);
console.log(`screenY: ${popup1.screenY}`);
console.log(`scrollX: ${popup1.scrollX}`);
console.log(`scrollY: ${popup1.scrollY}`);
console.groupEnd();
*/
/* Output:
Properties of the current popup window object:
sample-script.js:8 innerHeight: 300
sample-script.js:9 innerWidth: 400
sample-script.js:10 outerHeight: 366
sample-script.js:11 outerWidth: 416
sample-script.js:12 screenX: 150
sample-script.js:13 screenY: 200
sample-script.js:14 scrollX: 0
sample-script.js:15 scrollY: 0

window.name = "Window Object";

*/
/*
window.name = "Exploring Window Object";
let popup2 = window.open("popup2.html","popup",
	"height=300,width=400,top=150,left=400,location,menubar,scrollbars,toolbar");

let i = 1;
let timer = window.setInterval(adjustWindow, 2000);

function adjustWindow() {
	if (i > 9) {
		clearInterval(timer);
	}
	else {
		console.log("outerH: %i, outerW: %i, innerH: %i, innerW: %i, screenX: %i, screenY: %i, scrollX: %i, scrollY: %i",
			popup2.outerHeight, popup2.outerWidth, popup2.innerHeight, popup2.innerWidth, popup2.screenX, popup2.screenY,
			popup2.scrollX, popup2.scrollY);
	}
	switch (i) {
		case 1:
			popup2.scrollBy(50,30);
			break;
		case 2:
			popup2.moveBy(50,30);
			break;
		case 3:
			popup2.moveTo(200,100);
			break;
		case 4:
			popup2.resizeBy(50,50,);
			break;
		case 5:
			popup2.resizeTo(700,500);
			break;
		case 6:
			popup2.resizeTo(1000,1000);
			break;
		case 7:
			popup2.resizeTo(500,500);
			break;
		case 8:
			popup2.blur();
			break;
		case 9:
			popup2.close();
			break;
	}
	i++;
}
*/
/*
console.time("Stopwatch");
let j = 1;
for (let i = 0; i < 1000; i++)
	j += i;
console.info("j = %i", j);
console.timeEnd("Stopwatch");
*/
/*
let cache = window.sessionStorage;
cache.clear();
cache.setItem("key1", "This is my saved data");
console.log(`Saved data: ${cache.getItem("key1")}`);
*/
/*
function logMessage() {
	console.log("The timer went off!");
}

let timer = setTimeout(logMessage(), 2000);
*/
/*
window.alert("This is an alert box.\nThis is a second line.");
if (window.confirm("Is it OK to proceed?")){
	let answer = window.prompt("How many pets do you have?", 0);
	console.log(`${answer} pets were entered`);
}
else {
	console.log("Confirmation failed")
}
*/
let result = 0;

function showDialog() {
	let dialog = document.getElementById("glass");
	dialog.style.visibility = "visible";
}

function closeDialog() {
	let dialog = document.getElementById("glass");
	dialog.style.visibility = "hidden";
}

function OK() {
	let input = document.getElementById("numPets");
	result = input.value;
	closeDialog();
	console.log(`Pets: ${result}`);
}

closeDialog();