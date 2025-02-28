// Set the start date (change this to your actual special date)
const startDate = new Date("2021-02-27"); // Example: February 27, 2021
const today = new Date();

// Calculate the difference in time
const timeDiff = today - startDate;

// Convert to days
const daysCount = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

// Update the HTML element with the calculated days
document.getElementById("days-count").innerText = daysCount;

// Show an alert when the button is clicked
document.getElementById("special-message").addEventListener("click", function() {
    alert("I love you more every day! ❤️");
});
