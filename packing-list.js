const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let item in packingList) {
  console.log(packingList[item]);
}

console.log(packingList[3]);