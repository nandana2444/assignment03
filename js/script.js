// When the DOM content is loaded, execute the following code
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the element with the ID 'student-info' and store it in the variable 'studentInfo'
    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: YOUR_ID - Your Name';

    // Retrieve the form element with the ID 'pizza-order-form' and store it in the variable 'pizzaForm'
    const pizzaForm = document.getElementById('pizza-order-form');
    // Retrieve the element with the ID 'order-summary' and store it in the variable 'orderSummary'
    const orderSummary = document.getElementById('order-summary');

    // Add an event listener to the 'pizzaForm' for the form submission event
    pizzaForm.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the value of the selected pizza size from the dropdown menu
        const size = document.getElementById('pizza-size').value;

        // Initialize an empty array to store the selected toppings
        const toppings = [];
        // Select all checkboxes with the name 'topping' that are checked, and iterate over them
        document.querySelectorAll('input[name="topping"]:checked').forEach(function(checkbox) {
            // Push the value of each checked checkbox (topping) into the 'toppings' array
            toppings.push(checkbox.value);
        });

        // Get the value of the special instructions entered by the user
        const instructions = document.getElementById('special-instructions').value;

        // Create a new Pizza object with the selected size, toppings, and instructions
        const pizza = new Pizza(size, toppings, instructions);

        // Display the order summary with pizza details dynamically on the page
        orderSummary.innerHTML = `<h2>Your Order Summary</h2>
                                 <p>Size: ${pizza.size}</p>
                                 <p>Toppings: ${pizza.toppings.join(', ')}</p>
                                 <p>Special Instructions: ${pizza.instructions}</p>`;
    });

    // Define the Pizza class
    class Pizza {
        // Constructor function to create a new Pizza object with size, toppings, and instructions
        constructor(size, toppings, instructions) {
            this.size = size; // Size of the pizza
            this.toppings = toppings; // Array of selected toppings
            this.instructions = instructions; // Special instructions for the pizza
        }
    }
});
