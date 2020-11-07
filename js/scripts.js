//Business Logic:
function PizzaOrder(size, toppings, fancyToppings) {
  this.size = size;
  this.toppings = toppings;
  this.fancyToppings = fancyToppings;
  this.price = 0;
} 

PizzaOrder.prototype.calcPrice = function() {
  if (this.size === "large") {
    this.price = 16;
  } else if (this.size ==="small") {
    this.price = 10;
  } 
  this.price += 3 * this.toppings.length;
  this.price += 5 * this.fancyToppings.length;
}

//UI logic:
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();

    let sizeInput = $("input:radio[name=size]:checked").val();
    let toppingsInput = []
    let fancyToppingsInput = []

    $("input:checkbox[name=toppings]:checked").each(function() {
      toppingsInput.push($(this).val()) 
    });
    $("input:checkbox[name=fancy]:checked").each(function() {
      fancyToppingsInput.push($(this).val())
    });
  
    let newOrder = new PizzaOrder(sizeInput, toppingsInput, fancyToppingsInput);
    newOrder.calcPrice();
    $(".output").html(`<p class="price">Your pizza will cost you $${newOrder.price}</p>`)
  });
});

