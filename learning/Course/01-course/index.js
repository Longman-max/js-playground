//This is my first JavaScript code

//Strings

console.log("Hello World");

//Variables
// We use let to declare a variable in JavaScript
// Rules for naming variables in JavaScript
// Cannot be a reserved keyword e.g let, if, else, var and so on
// It should be meaning. Don't use names like a, b, c, x, a1, b2 and so on
// Cannot start with a number
// Cannot contain space or hyphen(-)
// Use canal notation for naming i.e The first letter of the word should be in small letter then the next word should start with a capital letter. e.g let firstName
// And they are case sentitive
// Naming varibles:
// let firstName = 'Longman';
// let secondName = 'Agbai';

let name = "Longman";
console.log(name);

//Constants
//Constants remain the same and can't be changed othewise if you neeed to reassign a variable use let.

const interestRate = 0.3;
console.log(interestRate);

//Primitive/ Value types
//Categories of primitive types are; Strings. Number, Boolean, Undefined, Null

let nickName = "Longman"; // String Literal
let age = 17; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined; // undefined
let selectedColor = null; //null

// Reference Types here we have;
//Object, Array and Function

//Object
let person = {
  otherName: "Obasi",
  age: 17,
};
console.log(person);

// .Dot Notation- to get properties of an object.
person.otherName = "Longman";
console.log(person.otherName);

// .[]Bracket Notation- another way to get the property of an object
person["age"] = 18;
console.log(`You will be ${person.age} next year🔥🔥🔥`);

//Arrays (lists)
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
selectedColors[3] = 1;
console.log(selectedColors);

//To access an element in an array, you use the index of that element;
console.log(selectedColors[0]);
//To find the number of items in a list we use the length method.
console.log(selectedColors.length);

//Functions (performing a task)
// A pararmeter is what we have at the time of declaration while an argument is the actual value we supply for that parameter.
function greet(name, middleName) {
  console.log("Hello " + name + " " + middleName);
}
greet("Obasi", "Longman");

//Functions (calculating a value)
function square(number) {
  return number * number;
}
console.log(square(2));
