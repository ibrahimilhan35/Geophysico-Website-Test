// Function to start the countdown
function startCountdown() {
    var inputElement = document.getElementById("countdownInput");
    var outputElement = document.getElementById("countdownOutput");
    var completionTitleElement = document.getElementById("completionTitle");

    // Get the user input
    var count = parseInt(inputElement.value);

    // Check if the input is a valid number and greater than zero
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Save the input value in local storage
    localStorage.setItem("lastInput", count);

    // Clear previous countdown
    outputElement.innerHTML = "";
    completionTitleElement.innerHTML = "The Words of the Week!"; // Reset completion title

    // Using a Promise for the countdown
    const countdownPromise = new Promise((resolve) => {
        var interval = setInterval(function () {
            outputElement.innerHTML = "T - " + count + " seconds";

            if (count === 0) {
                outputElement.innerHTML = "You've run out of time!";
                clearInterval(interval);
                resolve(); // Resolve the Promise when the countdown is completed
            }

            count--;
        }, 1000);
    });

    // Using the Promise
    countdownPromise.then(() => {
        console.log("Countdown Completed!"); // Log in the console when the countdown is completed

        // Display completion title after one second (adjust the delay as needed)
        setTimeout(() => {
            completionTitleElement.innerHTML = "It's like trying to hit snooze on life—doesn't quite work, does it?"; // Update completion title
        }, 1000);
    });
}

// Event listener for the button
document.getElementById("startButton").addEventListener("click", startCountdown);

// Retrieve the last input from local storage
var lastInput = localStorage.getItem("lastInput");
if (lastInput) {
    document.getElementById("countdownInput").value = lastInput;
}
