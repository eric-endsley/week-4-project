//Business Logic:
function PizzaOrder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
} 

PizzaOrder.prototype.calcPrice = function() {
  if (this.size === "large") {
    this.price = 16;
  } else if (this.size ==="small") {
    this.price = 10;
  } if (this.toppings.includes("cheese")) {
    this.price += 1
  } if (this.toppings.includes("pepperoni")) {
    this.price += 3
  } if (this.toppings.includes("mushrooms")) {
    this.price +=2 
  }
}

//UI logic:
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    let sizeInput = $("input:radio[name=size]:checked").val();
    let toppingsInput = []
    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingsInput.push($(this).val())
    });
    let newOrder = new PizzaOrder(sizeInput, toppingsInput);
    newOrder.calcPrice();
    $(".output").html(`<p class="price">Your pizza will cost you $${newOrder.price}</p>`)
  });
});

