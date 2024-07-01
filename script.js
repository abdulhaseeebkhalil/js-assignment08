// var cost;

// for (var i = 0; i < cost.length; i++) {
//     for (var j = 0; j < someArray.length; j++) {
//         cost = 99;
//         console.log(cost);
//       }
// }



var animals = ["goat", "cat", "crow"];
var products = ["milk", "cheese", "burger"];
var foodItems = [];
var k = 0;

for (var i = 0; i < animals.length; i++) {
    for (var j = 0; j < products.length; j++) {
      foodItems[k] = animals[i] + products[j];
      k++;
    }
}

console.log(foodItems);

var human = ["king", "queen"];
var tribe = ["khalil", "afridi"];
var mix = [];
var k = 0;
for (var i = 0; i < human.lenght; i++) {
  for (var j = 0; j < tribe.lenght; j++) {
    mix[k] = human[i] + tribe[j];
    k++
  }
  console.log(mix);
}