document.addEventListener('DOMContentLoaded', function() {
    const pizzaForm = document.getElementById('pizza-order-form');
    const orderSummary = document.getElementById('order-summary');

    pizzaForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const size = document.getElementById('pizza-size').value;

        const toppings = [];
        document.querySelectorAll('input[name="topping"]:checked').forEach(function(checkbox) {
            toppings.push(checkbox.value);
        });

        // Check if user wants extra cheese
        const extraCheese = document.getElementById('extra-cheese').checked;

        // Check for additional toppings
        const additionalToppings = [];
        document.querySelectorAll('input[name="additional-topping"]:checked').forEach(function(checkbox) {
            additionalToppings.push(checkbox.value);
        });

        // Combine the default and additional toppings
        const allToppings = [...toppings, ...additionalToppings];

        const crustType = document.getElementById('crust-type').value;
        const sauce = document.getElementById('sauce').value;
        const instructions = document.getElementById('special-instructions').value;

        const pizza = new Pizza(size, allToppings, crustType, sauce, instructions, extraCheese);

        orderSummary.innerHTML = `<h2>Your Order Summary</h2>
                                 <p>Size: ${pizza.size}</p>
                                 <p>Toppings: ${pizza.toppings.join(', ')}</p>
                                 <p>Crust Type: ${pizza.crustType}</p>
                                 <p>Sauce: ${pizza.sauce}</p>
                                 <p>Special Instructions: ${pizza.instructions}</p>
                                 <p>Extra Cheese: ${pizza.extraCheese ? 'Yes' : 'No'}</p>`;
    });

    class Pizza {
        constructor(size, toppings, crustType, sauce, instructions, extraCheese) {
            this.size = size;
            this.toppings = toppings;
            this.crustType = crustType;
            this.sauce = sauce;
            this.instructions = instructions;
            this.extraCheese = extraCheese;
        }
    }
});
