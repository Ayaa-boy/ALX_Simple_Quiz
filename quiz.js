 /**
     * Defines the main function for the quiz application.
     * This function handles answer checking and feedback display.
     */
    function checkAnswer() {
        // 1. Identify the Correct Answer:
        // Declare a variable to store the correct answer for the quiz question.
        const correctAnswer = "4";

        // 2. Retrieve the User’s Answer:
        // Use document.querySelector to select the currently checked radio button.
        // The 'name="quiz"' attribute ensures we target the radio buttons for this quiz.
        // The '?.value' safely accesses the 'value' property of the selected radio button.
        // If no radio button is selected, userAnswer will be null.
        const selectedChoice = document.querySelector('input[name="quiz"]:checked');
        const userAnswer = selectedChoice ? selectedChoice.value : null; // Get the value, or null if nothing selected

        // Get the feedback paragraph element to display messages.
        const feedbackElement = document.getElementById('feedback');

        // 3. Compare the User’s Answer with the Correct Answer:
        // Implement an if/else statement to compare the user's answer to the correct answer.
        if (userAnswer === correctAnswer) {
            // If the answer is correct, update the feedback text.
            feedbackElement.textContent = "Correct! Well done.";
            // Optionally, style for success (e.g., green text).
            feedbackElement.style.color = "green";
        } else {
            // If the answer is incorrect or no answer was selected, update the feedback text.
            feedbackElement.textContent = "That's incorrect. Try again!";
            // Optionally, style for error (e.g., red text).
            feedbackElement.style.color = "red";
        }
    }

    // 4. Add an Event Listener to the Submit Button:
    // Get a reference to the submit button using its ID.
    const submitButton = document.getElementById('submit-answer');

    // Add a click event listener to the submit button.
    // When the button is clicked, the 'checkAnswer' function will be executed.
    // Note: We pass the function name itself, not the result of calling the function (no '()').
    submitButton.addEventListener('click', checkAnswer);
    