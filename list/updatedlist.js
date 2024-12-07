function goBack() {
    if (window.history.length > 1) {
        window.history.back(); // Go to the previous page in the history
    } else {
        window.location.href = 'index.html'; // Redirect to a default page if no history exists
    }
}

const newJuiceDiv = document.querySelector('.newJuice');

// Add event listener for the "Remove" button
newJuiceDiv.addEventListener('click', function (event) {
    if (event.target.classList.contains('remove-button')) {
        const item = event.target.closest('.item'); // Get the closest parent with the class 'item'
        if (item) {
            newJuiceDiv.removeChild(item); // Remove the entire item from the container
        }
    }
});