/* 
Dataypes are categorised into two categories : 
    * Primitive Dataypes(Call by value)
    * Non-Primitive Datatypes(Call by referance)
Primitive Datatypes includes:
    * String
    * Number
    * Boolean
    * Null
    * Undefined
    * Symbol
    * BigInt
Non-Primitive Datatypes includes:
    * Arrays
    * Objects
    * Functions

*/
const a = 1; // Number
const b = 1.2; // Number
const c = "a"; // String
const d = true; // boolean
const e = null; // null
const f = undefined; // Undefined
const g = Symbol("a"); // Symbol

console.table([a, b, c, d, e, f, g]);

const marvel = [
	"IronMan",
	"Cap America",
	"Thor",
	"Hulk",
	"Black Widow",
	"Hawkeye",
]; // Arrays
const Employee = {
	name: "Rahul",
	age: "20",
	profession: "SDE 1",
}; // Object
const func = function () {
	console.log("Hello! World");
}; //Function

console.log(marvel);
console.log(Employee);
console.log(func());
