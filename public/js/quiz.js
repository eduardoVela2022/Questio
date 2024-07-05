// View items
const questionAnswersButtons = document.querySelectorAll(
  ".question-answer-btn"
);
const quizSubmitBtn = document.querySelector("#quiz-submit-btn");

// Handles what happens when a user clicks an answer button
function handleAnswerClick(questionId, answerId) {
  // Gets the previously selected answer
  const previousSelectedAnswer = questionAnswersButtons.filter(
    (button) =>
      button.dataset.questionId === questionId &&
      button.classList.contains("selected-answer")
  );
  // Gets the answer button that was selected
  const selectedAnswer = questionAnswersButtons.filter(
    (button) => button.dataset.answerId === answerId
  );

  if (!previousSelectedAnswer) {
    // Marks that button as the selected answer
    selectedAnswer.classList.add("btn-primary");
    selectedAnswer.classList.add("selected-answer");
    selectedAnswer.classList.remove("btn-answer");

    return;
  }

  // If the selected answer is different from the previous one
  if (previousSelectedAnswer.dataset.answerId !== answerId) {
    // Marks that button as the selected answer
    selectedAnswer.classList.add("btn-primary");
    selectedAnswer.classList.add("selected-answer");
    selectedAnswer.classList.remove("btn-answer");

    // Unmarks the previous selected answer
    previousSelectedAnswer.classList.remove("btn-primary");
    previousSelectedAnswer.classList.remove("selected-answer");
    previousSelectedAnswer.classList.add("btn-answer");
  }
}

// Submits the quiz
function submitQuiz() {
  // Gets the answers that were selected by the user
  const userSelectedAnswers = questionAnswersButtons.filter((button) =>
    button.classList.contains("selected-answer")
  );

  // TODO: Calculate score
}

// Quiz event listeners
quizSubmitBtn.addEventListener("click", submitQuiz);

// All question answer buttons get added their event listener
questionAnswersButtons.forEach((button) => {
  button.addEventListener("click", () =>
    handleAnswerClick(button.dataset.questionId, button.dataset.answerId)
  );
});
