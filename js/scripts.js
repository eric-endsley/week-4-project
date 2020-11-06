//Describe: PizzaOrder() 
//Test: should create a pizza order object with property size equal to size parameter, price set to 0 and all toppings set to false.
//Code: let newOrder = new PizzaOrder("large");
//Expect: newOrder.size.toEqual("large");

function PizzaOrder(size) {
  this.size = size;
  this.cheese = false;
  this.pepperoni = false;
  this.mushrooms = false;
  this.price = 0;
} 

let myPizza = new PizzaOrder();

//Describe: addCheese() 
//Test: should set value of cheese property to true in a PizzaOrder object
//Code: let newOrder = new PizzaOrder();
//Code: let newCheeseOrder = newOrder.addCheese
//Expect: newCheeseOrder.cheese.toEqual("true");

PizzaOrder.prototype.addCheese = function() {
  this.cheese = true
}

myPizza.addCheese();
myPizza.cheese
