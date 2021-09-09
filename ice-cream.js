// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
let newIceCreamFlavours = iceCreamFlavours.slice();
newIceCreamFlavours[5] = 'root beer';
console.log(newIceCreamFlavours);

console.log(iceCreamFlavours[0]);

console.log(newIceCreamFlavours[newIceCreamFlavours.length - 1]);

console.log(newIceCreamFlavours.length);