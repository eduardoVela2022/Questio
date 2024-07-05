// View items
const quizNameInputField = document.querySelector(".quiz-name-input-field");
const questionInputFields = document.querySelectorAll(".question-input-field");
const answerInputFields = document.querySelectorAll(".answer-input-field");
const formQuizCreateQuizBtn = document.querySelector(
  "#form-quiz-create-quiz-btn"
);

// const questionObject = {
//   question: "",
//   answers: [
//     {
//       answer: "",
//       isCorrect: false,
//     },
//   ],
// };

// Creates a new quiz with the information of the form
async function createNewQuiz(event) {
  // Prevents browser from reloading
  event.preventDefault();

  // Transforming Node Lists into Arrays.
  const questionInputArray = Array.from(questionInputFields);
  const answerInputArray = Array.from(answerInputFields);

  // Form values
  const quizName = quizNameInputField.value.trim();
  const questions = questionInputArray.map((inputField) =>
    inputField.value.trim()
  );
  const answers = answerInputArray.map((inputField) => inputField.value.trim());

  console.log(quizName);
  console.log(questions);
  console.log(answers);

  // If all the values are not empty, create the new quiz
  if (quizName && !questions.includes("") && !answers.includes("")) {
    // Tells the server to create a new quiz
    const res = await fetch("/api/quiz/", {
      method: "POST",
      body: JSON.stringify({ quizName, questions, answers }),
      headers: { "Content-Type": "application/json" },
    });

    // If the server created the quiz successfully, redirect him or her to the quizzes view
    if (res.ok) {
      document.location.replace("/quizzes");
    } else {
      // Else send an alert with the status text of the response
      alert(res.statusText);
    }
  } else {
    // Else send an alert telling the user to fill out the form
    alert(
      "Some of the fields of the form are missing. Please fill out all the fields of the form."
    );
  }
}

// Quiz form event listeners
formQuizCreateQuizBtn.addEventListener("click", createNewQuiz);
