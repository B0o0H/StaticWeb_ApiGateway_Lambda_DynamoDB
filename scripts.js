document.getElementById('orderForm').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevent the form from refreshing the page

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const message = document.getElementById('message').value;

    // Create order object
    const orderDetails = {
        name,
        email,
        product,
        quantity,
        message
    };

    try {
        // Send a POST request to the API Gateway endpoint
        const response = await fetch('https://i39wdd3t11.execute-api.us-west-2.amazonaws.com/test/submit-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        });

        const result = await response.json();
        document.getElementById('response').innerText = result.message;  // Display success message
        document.getElementById('orderForm').reset();  // Clear the form

    } catch (error) {
        console.error('Error submitting order:', error);
        document.getElementById('response').innerText = 'Error submitting order. Please try again.';  // Display error message
    }
});

