//   JavaScript Array methods

const items = [
  { name: "Bike", price: 100 },
  { name: "Tv", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//  ***FILTER****

const filtertedItems = items.filter((item) => {
  return item.price <= 100;
});

console.log(filtertedItems);

/*
  The MAP method allows you to get the key from an object to create a new list
*/

const itemNames = items.map((item) => {
  return item.name;
});

console.log(itemNames);

//  ***FIND***

const foundItem = items.find((item) => {
  return item.name === "Computer";
});

const newArray = [];

console.log(foundItem);

/*
newArray.push(foundItem);
console.log(newArray);
*/

// ****FOR EACH****

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  console.log(item.name);
}

//    The for each is similar to using for loops to iterating through the object of an array.

items.forEach((item) => {
  console.log(item.name);
});

// ***SOME***

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});

console.log(hasInexpensiveItems);

var total = 0;
var result = [];
for (p in items.price) {
  items.price += total;
}

console.log(total);

console.log(items.price);
