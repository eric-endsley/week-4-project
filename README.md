# (p)Izz'A Pizza Parlor Order Page

#### A pizza ordering webpage which outputs the price of a users custom pizza order, 11/6/20

#### By Eric Endsley

## Description
This webpage consists of a variety of radio and checkbox input forms which return a price to the user based on what pizza size and pizza toppings are selected. For each time the order form is filled out, a new pizza object is constructed with properties for size, toppings and price. A prototype is used to determine the price value for the pizza object based on the values of the other two properties which are obtained from the users selections in the form, and the price is output to the user upon submission.

## Tests & Specs
#### Tests
//Describe: PizzaOrder()<br> 
//Test: should create a pizza order object with property size equal to size parameter and price set to 0<br> 
//Code: let newOrder = new PizzaOrder("large");<br> 
//Expect: newOrder.size.toEqual("large");<br> 

//Test: should create a pizza order object with property toppings equal to an array passed in the toppings parameter<br> 
//Code: let newOrder = new PizzaOrder("large", ["cheese", "pepperoni"]);<br> 
//Expect: newOrder.toppings.toEqual(["cheese", "pepperoni"]);<br> 


Describe: calcPrice()

Test: should set PizzaOrder.price to 16 if pizza size is large<br>
Code: let newOrder = new PizzaOrder(large);<br>
Code: let orderPrice = newOrder.calcPrice();<br>
Expect: orderPrice.price.toEqual(16);

Test: shoulde set PizzaOrder.price to 10 if pizza size is small<br>
Code: let newOrder = new PizzaOrder(small);<br>
Code: let orderPrice = newOrder.calcPrice();<br>
Expect: orderPrice.price.toEqual(10)

Test: should add 1 to price if PizzaOrder.toppings includes cheese<br>
Code: let newOrder = new PizzaOrder(small, [cheese]);<br>
Code: let newOrderPrice = newOrder.calcPrice();<br>
Expect: newOrderPrice.price.toEqual(11);

Test: should add 3 to price property if PizzaOrder.toppings includes pepperoni<br>
Code: let newOrder = new PizzaOrder(small, ["cheese", "pepperoni"]);<br>
Code: let newOrderPrice = newOrder.calcPrice();<br>
Expect: newOrderPrice.price.toEqual(14);

Test: should add 2 to price property if PizzaOrder.toppings includes mushrooms<br>
Code: let newOrder = newPizzaOrder(small, ["cheese", "mushrooms"]);<br>
Code: let newOrdprice = newOrder.calcPrice();<br>
Expect: newOrderPrice.price.toEqual(13);

#### Specs
| Test | Input | Output |
| :----------- | :----------------------| :----------- |
| Pizza Order Constructor |||
| should create a pizza order object with property size equal to size parameter and price set to 0| "large" | PizzaOrder {size: "large", ... price: 0 } |
| should create a pizza order object with property toppings equal to an array passed in the toppings parameter | "large", "["cheese", "pepperoni"] | PizzaOrder {size: "large", toppings: Array(2), price: 0} |


## Setup
#### Clone and Open Locally
 1. Open the [programming language quiz github page](https://github.com/eric-endsley/week-4-project.git) by clicking the link or copy/pasting https://github.com/eric-endsley/week-4-project.git in the navigator bar of a web browser application.

 2. Click the green Code button in the upper-right part of the window and then EITHER:

 3. a. Copy the HTTPS URL for the repo and use it in the git clone command in git-bash or another git terminal by inputting: "git clone https://github.com/eric-endsley/week-4-project.git"<br> 
 OR b. Click "Download Zip" and unzip the file to an accessible location on your machine.

 4. Select the index.html file and open it with a web-browser application of your choice.

## Technologies Used
HTML, CSS, Bootstrap, Javascript and JQuery

## Known Bugs
None

## Contact Information
To ask questions or report a bug, contact [Eric Endsley](mailto:eric.endsley4@gmail.com)

## Legal

This software is licensed under the MIT license.