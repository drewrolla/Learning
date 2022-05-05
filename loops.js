let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
let cookingList = ['pasta', 'coconut oil', 'green beans', 'tomato sauce'];
let buyThese = [];

//practice
for (let i = 0; i < groceryList.length; i++){
  console.log(groceryList[i]);
}

for (let i = 0; i < groceryList.length; i++){
  for (let j = 0; j < cookingList.length; j++){
    if (groceryList[i] === cookingList[j]){
      buyThese.push(cookingList[j]);
    }
  }
}
console.log(buyThese);

for (let i = 0; i < groceryList.length; i++){
  console.log(groceryList[i]);
  if (groceryList[i] === 'coffee beans'){
    break;
  }
}
console.log("Yummy yummy.");

let bananas = 47;
let bananaPeels = 0;

do {
  bananaPeels++;
  console.log(bananaPeels + " bananas eaten.");
} while (bananaPeels < bananas);
console.log("That's a lot of potassium.");
