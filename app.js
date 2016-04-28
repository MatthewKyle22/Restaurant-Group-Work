// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// // FOOD ITEMS CONSTRUCTOR
// function FoodItem (name, cal, vegan, gluten, citrus) {
//     this.name= name,
//     this.cal= cal,
//     this.vegan= vegan,
//     this.gluten= gluten,
//     this.citrus= citrus;
// }
// // LIST OF FOOD ITEMS
// var beef= new FoodItem("Beef", 350, false, false, true);
// var rice= new FoodItem("Rice", 150, true, false, true);
// var beans= new FoodItem("Beans", 170, false, true, true);
// var cheese= new FoodItem("Cheese", 300, false, true, true);
// var avocado= new FoodItem("Avocado", 100, true, true, false);
// var peppers= new FoodItem("Peppers", 50, true, true, true);
// var sugar= new FoodItem("Sugar", 400, true, true, true);
// var booze= new FoodItem("Booze", 350, true, true, true);
// // STRINGIFY METHOD FOR FOOD ITEMS
// FoodItem.prototype.stringify = function () {
//     return "This food item is " + this.name + "  this food item has " + this.cal + " calories."
//  + this.name + " is vegan? " + this.vegan + "! "
//  + this.name + " is gluten free? " + this.gluten + "! "
//  + this.name + " is citrus free? " + this.citrus + "!"
// };
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// // DRINK CONSTRUCTOR
// function Drink (name, description, price, ingredients) {
//     this.name= name,
//     this.description= description,
//     this. price= price,
//     this.ingredients= ingredients;
// }
// // DRINK ON THE MENU
// var margarita= new Plate("M&L's Signature 'garita", "the best damn 'garita you'll ever have", 10.00 [booze, sugar]);
// //STRINGIFY FOR DRINK
// Drink.prototype.stringify= function () {
//     return "The yummy " + this.name + " is made up of " + this.ingredients + " which is described as " + this.description + " all for the low low price of " + this.price
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// // PLATE CONSTRUCTOR
// function Plate (name, description, price, ingredients) {
//     this.name= name,
//     this.description= description,
//     this. price= price,
//     this.ingredients= ingredients; // include food items
// }
// // PLATES ON THE MENU
// var burritoPlate= new Plate("Burrito Madness", "cheesy beef rolled to perfection", 4.99, [beans.name, cheese.name, peppers.name, rice.name, beans.name]);
// var guacamolePlate= new Plate("Holy Guacamole!", "a plate for the vegan's delight", 5.99, [avocado, peppers, rice, beans]);
// //STRINGIFY FOR PLATE
// Plate.prototype.stringify= function () {
//     return ( "This delicious dish is called " + this.name + " and is made up of: " + this.ingredients + ". It can be described as " + this.price + ". Only " + this.ingredients + "!");
// }
// console.log(guacamolePlate.stringify())
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// // CONSTRUCTOR FOR ORDER
// function Order (plates) {
//     this.plates= plates
// }
// //STRINGIFY ORDER
// Order.prototype.stringify= function () {
//     return ("Your order consists of: " + this.plates + ".")
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// // CONSTRUCTOR FOR MENU
// function Menu (plates) {
//     this.plates= plates
// }
// // STRINGIFY MENU            COME BACK TO THIS ONE!!
// Menu.prototype.stringify= function () {
//     console.log()
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// // CONSTRUCTOR FOR RESTAURANT
// function Restaurant (name, description, menu) {
//     this.name= name,
//     this.description= description,
//     this.menu= menu
// }
// // STRINGIFY RESTAURANT
// Restaurant.prototype.stringify= function () {
//     return (" Welcome to " + this.name + " our restaurant is " + this.description + "." + " Check out these hot items you've gotta have right now: " + this.menu);
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// //CONSTRUCTOR FOR CUSTOMER (listing diet preferences)
// function Customer (dietaryPreference) {
//     this.dietaryPreference= dietaryPreference
// }
// // STRINGIFY CUSTOMER
// Customer.prototype.stringify= function() {
//     return ("We offer many dietary preferences for the masses. Here's a few : " + this.dietaryPreference);
// }
// // DIET RESTRICTIONS METHOD
// Plate.prototype.dietRestrict= function () {
//     FoodItem.vegan === true ? console.log("This meal is vegan"): console.log("This meal is not vegan")
//     FoodItem.gluten === true ? console.log("This meal is gluten free"): console.log("This meal is not gluten free")
//     FoodItem.citrus === true ? console.log("This meal is citrus free"): console.log("This meal is not citrus free")
// }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////