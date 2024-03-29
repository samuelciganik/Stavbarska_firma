document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(this);

    // Create XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure request
    xhr.open("POST", this.action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // Define callback function
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Success
                console.log("Formulár úspešne odoslaný");
            } else {
                // Error
                console.error("Chyba pri odosielaní formulára");
            }
        }
    };

    // Encode form data and send request
    xhr.send(new URLSearchParams(formData));
});