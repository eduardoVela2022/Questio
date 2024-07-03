// View items
const playButtons = document.querySelectorAll(".play-btn");
const modifyButtons = document.querySelectorAll(".modify-btn");
const deleteButtons = document.querySelectorAll(".delete-btn");

// Redirects the user to the quiz view of the chosen quiz
function playQuiz(quizId) {
  document.location.replace(`/quiz/${quizId}`);
}

// Redirects the user to the modify quiz view of the chosen quiz
function modifyQuiz(quizId) {
  // TODO: Update Logic
}

// Deletes the chosen quiz
async function deleteQuiz(quizId, quizName) {
  // The user needs to confirm that he or she wants to delete the quiz, before continuing forward.
  if (confirm(`Are you sure you want to delete "${quizName}"`) === false) {
    return;
  }

  // Tells the server to delete the chosen quiz
  const res = await fetch(`/api/quizzes/${quizId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  // If the server deleted the quiz successfully, refresh the quizzes view
  if (res.ok) {
    document.location.replace("/quizzes");
  } else {
    // Else send an alert with the status text of the response
    alert(res.statusText);
  }
}

// All play buttons get added their event listener
playButtons.forEach((button) => {
  button.addEventListener("click", playQuiz(button.dataset.quizId));
});

// All modify buttons get added their event listener
modifyButtons.forEach((button) => {
  button.addEventListener("click", modifyQuiz(button.dataset.quizId));
});

// All delete buttons get added their event listener
deleteButtons.forEach(async (button) => {
  button.addEventListener(
    "click",
    await deleteQuiz(button.dataset.quizId, button.dataset.quizName)
  );
});
