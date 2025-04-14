document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = await fetch('https://your-api-endpoint.amazonaws.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
        alert
        document.getElementById('contactForm').reset();
    } else {
        alert
    }
});