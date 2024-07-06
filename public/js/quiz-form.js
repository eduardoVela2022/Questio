// View items
const quizNameInputField = document.querySelector(".quiz-name-input-field");
const questionInputFields = document.querySelectorAll(".question-input-field");
const answerInputFields = document.querySelectorAll(".answer-input-field");
const correctAnswerButtons = document.querySelectorAll(
  ".correct-answer-button"
);
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

// Creates the question objects
function formatQuestions(questions, answers) {
  // List were the question objects will be stored
  const questionList = [];

  // Question objects are created
  for (let counter = 0; counter < 10; counter++) {
    questionList.push({
      question: questions[counter],
      answers: formatAnswers(answers, counter),
    });
  }

  console.log(questionList);
}

// Creates the answer objects
function formatAnswers(answers, questionNumber) {
  // List were the answer objects will be stored
  const answerList = [];

  // Answer objects are created
  for (
    let counter = 0 + questionNumber * 4;
    counter < 4 + questionNumber * 4;
    counter++
  ) {
    answerList.push({
      answer: answers[counter],
      isCorrect: false,
    });
  }

  // Returns answer list
  return answerList;
}

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
      body: JSON.stringify({
        name: quizName,
        questions: formatQuestions(questions, answers),
      }),
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

// Handles the event of a correct answer button
function handleCorrectAnswerClick(event) {
  // Prevents browser from reloading
  event.preventDefault();

  // If the targeted button is already primary, return
  if (event.target.classList.contains("btn-primary")) {
    return;
  }

  // Changes the previous primary button's style to gray
  for (const button of correctAnswerButtons) {
    // If the button has the same question number as the targeted button
    // And it has the primary button class
    if (
      button.dataset.questionNumber === event.target.dataset.questionNumber &&
      button.classList.contains("btn-primary")
    ) {
      button.classList.remove("btn-primary");
      button.classList.add("btn-gray");
    }
  }

  // Changes the targeted button's style to primary
  event.target.classList.add("btn-primary");
  event.target.classList.remove("btn-gray");
}

// Quiz form event listeners
formQuizCreateQuizBtn.addEventListener("click", createNewQuiz);
correctAnswerButtons.forEach((button) =>
  button.addEventListener("click", handleCorrectAnswerClick)
);
