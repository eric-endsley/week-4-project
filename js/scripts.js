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
//Code: let newCheeseOrder = newOrder.addCheese()
//Expect: newCheeseOrder.cheese.toEqual("true");

PizzaOrder.prototype.addCheese = function() {
  this.cheese = true
}

myPizza.addCheese();
myPizza.cheese

//Describe: addPep() 
//Test: should set value of pepperoni property to true in a PizzaOrder object
//Code: let newOrder = new PizzaOrder();
//Code: let newPepOrder = newOrder.addPep()
//Expect: newPepOrder.pepperoni.toEqual("true");

PizzaOrder.prototype.addPep = function() {
  this.pepperoni = true
}

myPizza.addPep();
myPizza.pepperoni

//Describe: addMush() 
//Test: should set value of mushrooms property to true in a PizzaOrder object
//Code: let newOrder = new PizzaOrder();
//Code: let newMushOrder = newOrder.addCheese()
//Expect: newMushOrder.mushrooms.toEqual("true");

PizzaOrder.prototype.addMush = function() {
  this.mushrooms = true
}

//Describe: calcPrice()
//Test: should set PizzaOrder.price to 16 if pizza size is large
//Code: let newOrder = new PizzaOrder(large);
//Code: let orderPrice = newOrder.calcPrice()
//Expect: orderPrice.price.toEqual(16)

//Test: shoulde set PizzaOrder.price to 10 if pizza size is small
//Code: let newOrder = new PizzaOrder(small);
//Code: let orderPrice = newOrder.calcPrice()
//Expect: orderPrice.price.toEqual(10) 

//Test: should add 1 to price property if PizzaOrder.cheese = true
//Code: let newOrder = new PizzaOrder(small)
//Code: let newOrder.cheese = true
//Code: let newOrderPrice = newOrder.calcPrice()
//Expect: newOrderPrice.price.toEqual(11)

//Test: should add 3 to price property if PizzaOrder.pepperoni= true
//Code: let newOrder = new PizzaOrder(small)
//Code: let newOrder.pepperoni = true
//Code: let newOrderPrice = newOrder.calcPrice()
//Expect: newOrderPrice.price.toEqual(13)

//Test: should add 2 to price property if PizzaOrder.m = true
//Code: let newOrder = newPizzaOrder(small)
//Code: let newOrder.mushrooms = true
//Code: let newOrdprice = newOrder.calcPrice()
//Expect: newOrderPrice.price.toEqual(12)

PizzaOrder.prototype.calcPrice = function() {
  if (this.size === "large") {
    this.price = 16;
  }
  else if (this.size ==="small") {
    this.price = 10;
  } if (this.cheese === true) {
    this.price += 1
  } if (this.pepperoni === true) {
    this.price += 3
  } if (this.mushrooms === true) {
    this.price +=2 
  }
}

let newOrder = new PizzaOrder("large")
newOrder.calcPrice()
console.log(newOrder.price)

newOrder.addCheese()
newOrder.calcPrice()
console.log(newOrder.price)

newOrder.addPep()
newOrder.calcPrice()
console.log(newOrder.price)

newOrder.addMush()
newOrder.calcPrice()
console.log(newOrder.price)