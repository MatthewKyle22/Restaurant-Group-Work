
// arrayStringify - callback function
function arrayStringify(arr){
  var string ='';
  arr.forEach(function(arrayElement){
      string += arrayElement.stringify();
  });
  return string;
}


// FoodItem - lowest level object - Drink & Plate are defined by the foodItem
// objects they contain in their ingredients array.
function FoodItem( name, calories, vegan, glutenFree, citrusFree ){
  this.name       = name;
  this.calories   = calories;
  this.vegan      = vegan;
  this.glutenFree = glutenFree;
  this.citrusFree = citrusFree;
}
FoodItem.prototype.stringify = function(){
  return ( this.name + ": which contains " + this.calories +
                " calories.\n vegan: " + this.vegan + " | glutenFree: " + this.glutenFree +
                " | citrusFree: " + this.citrusFree + ".\n" );
};

// Drink & Plate - second level Objects - contain FoodItems and identifying
function Drink( name, description, price, ingredients ){
  this.name        = name;
  this.description = description;
  this.price       = price;
  this.ingredients = ingredients;
}
Drink.prototype.stringify = function(){
  return ( "\nThis is a " + this.name + ". It is a " + this.description +
                ". It costs: $" + this.price + ".\n Ingredients are: \n" +
                arrayStringify(this.ingredients));
};
function Plate( name, description, price, ingredients ){
  this.name        = name;
  this.description = description;
  this.price       = price;
  this.ingredients = ingredients;
}
Plate.prototype.stringify = function(){
  return ( "\nThis is a " + this.name + ". It is a " + this.description +
                ". It costs: $" + this.price + ".\n Ingredients are: \n" +
                arrayStringify(this.ingredients));
};
Plate.prototype.isVegan = function(){
  for(var i=0; i<this.ingredients.length; i++){
    if(!this.ingredients[i].vegan){
      return false;
    }
  }
  return true;
};
Plate.prototype.isGlutenFree = function(){
  for(var i=0; i<this.ingredients.length; i++){
    if(!this.ingredients[i].glutenFree){
      return false;
    }
  }
  return true;
};
Plate.prototype.isCitrusFree = function(){
  for(var i=0; i<this.ingredients.length; i++){
    if(!this.ingredients[i].citrusFree){
      return false;
    }
  }
  return true;
};


// Order & Plate - third level Objects - contain solely arrays of Drinks & Plates
function Order(plates){
  this.plates = plates;
}
Order.prototype.stringify = function(){
  return ( " ------- This Order is composed of the following Plates: ------ \n" +
              arrayStringify(this.plates));
};
function Menu(plates){
  this.plates = plates;
}
Menu.prototype.stringify = function(){
  return ( "\n ------- This Menu offers the following Plates & Drinks: ------ \n" +
              arrayStringify(this.plates));
};


// Restaurant - fourth(highest) level Object
function Restaurant(name, menu){
  this.name         = name;
  this.menu         = menu;
}
Restaurant.prototype.stringify = function(){
  return ("Welcome to " + this.name + "! We are a " + this.description +
          ". We serve a variety of items you may enjoy:\n" +
            this.menu.stringify() );
};

//////////////////////////////////////////////////
function Customer(dietaryPreferences){
  this.dietaryPreferences = dietaryPreferences;
}
Customer.prototype.stringify = function(){
  return ("A new customer wants some food.  They require the following diet:" +
          this.dietaryPreferences );
};

// Test
var beef= new FoodItem("Beef", 350, false, false, true);
var rice= new FoodItem("Rice", 150, true, false, true);
var beans= new FoodItem("Beans", 170, false, true, true);
var cheese= new FoodItem("Cheese", 300, false, true, true);
var avocado= new FoodItem("Avocado", 100, true, true, false);
var peppers= new FoodItem("Peppers", 50, true, true, true);
var sugar= new FoodItem("Sugar", 400, true, true, true);
var booze= new FoodItem("Booze", 350, true, true, true);
var salt = new FoodItem("Salt", 10, true, true, true);

var margarita = new Drink('Margarita','best mexican alcoholic beverage',12,[sugar,avocado,booze]);
var burrito   = new Plate('Burrito','plate with a promise to make you shart',7,[beef,beans,rice,beans, cheese]);
var guacamole = new Plate('Guacamole','green shart',4,[avocado,peppers,salt]);

var newMenu = new Menu([margarita, burrito, guacamole]);

var Diner = new Restaurant('M&L\'s Diner',newMenu);

console.log( Diner.stringify() );


