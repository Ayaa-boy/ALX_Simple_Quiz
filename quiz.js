function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedbackDiv = document.getElementById("feedback");

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === correctAnswer) {
            feedbackDiv.textContent = "Correct! Well done.";
            feedbackDiv.style.color = "green";
        } else {
            feedbackDiv.textContent = "That's incorrect. Try again!";
            feedbackDiv.style.color = "red";
        }
    } else {
        feedbackDiv.textContent = "Please select an answer!";
        feedbackDiv.style.color = "orange";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
