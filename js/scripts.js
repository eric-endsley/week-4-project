//Describe: PizzaOrder() 
//Test: should create a pizza order object with property size equal to size parameter and price set to 0
//Code: let newOrder = new PizzaOrder("large");
//Expect: newOrder.size.toEqual("large");

//Test: should create a pizza order object with property toppings equal to an array passed in toppings parameter
//Code: let newOrder = new PizzaOrder("large", ["cheese", "pepperoni"])
//Expect: newOrder.toppings.toEqual(["cheese", "pepperoni"])

function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
} 

let newPizza = new PizzaOrder("large", ["cheese", "pepperoni"])
console.log(newPizza.toppings)

//Describe: calcPrice()
//Test: should set PizzaOrder.price to 16 if pizza size is large
//Code: let newOrder = new PizzaOrder(large);
//Code: let orderPrice = newOrder.calcPrice()
//Expect: orderPrice.price.toEqual(16)

//Test: shoulde set PizzaOrder.price to 10 if pizza size is small
//Code: let newOrder = new PizzaOrder(small);
//Code: let orderPrice = newOrder.calcPrice()
//Expect: orderPrice.price.toEqual(10) 

//Test: should add 1 to price if PizzaOrder.toppings includes cheese
//Code: let newOrder = new PizzaOrder(small)
//Code: let newOrder.toppings = ["cheese"]
//Code: let newOrderPrice = newOrder.calcPrice()
//Expect: newOrderPrice.price.toEqual(11)

//Test: should add 3 to price property if PizzaOrder.toppings includes pepperoni
//Code: let newOrder = new PizzaOrder(small)
//Code: let newOrder.toppings = ["cheese", "pepperoni"]
//Code: let newOrderPrice = newOrder.calcPrice()
//Expect: newOrderPrice.price.toEqual(14)

//Test: should add 2 to price property if PizzaOrder.toppings includes mushrooms
//Code: let newOrder = newPizzaOrder(small)
//Code: let newOrder.toppings = ["cheese", "mushrooms"]
//Code: let newOrdprice = newOrder.calcPrice()
//Expect: newOrderPrice.price.toEqual(13)

PizzaOrder.prototype.calcPrice = function() {
  if (this.size === "large") {
    this.price = 16;
  }
  else if (this.size ==="small") {
    this.price = 10;
  } if (this.toppings.includes("cheese")) {
    this.price += 1
  } if (this.toppings.includes("pepperoni")) {
    this.price += 3
  } if (this.toppings.includes("mushrooms")) {
    this.price +=2 
  }
}

let newOrder = new PizzaOrder("large", ["cheese", "mushrooms", "pepperoni"])
newOrder.calcPrice()
console.log(newOrder.price)
