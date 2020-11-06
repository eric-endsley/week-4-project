//Describe: PizzaOrder() 
//Test: should create a pizza order object with property size equal to size parameter, price set to 0 and all toppings set to false.
//Code: let order = new PizzaOrder("large");
//Expect: order.size.toEqual("large");

function PizzaOrder(size) {
  this.size = size;
  this.cheese = false;
  this.pepperoni = false;
  this.mushrooms = false;
  this.price = 0;
} 

let myPizza = new PizzaOrder("large");
myPizza