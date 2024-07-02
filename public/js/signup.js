// View items
const signupUsernameInput = document.querySelector("#signup-username-input");
const signupEmailInput = document.querySelector("#signup-email-input");
const signupPasswordInput = document.querySelector("#signup-password-input");
const signupCreateAccountBtn = document.querySelector(
  "#signup-create-account-btn"
);
const signupCancelBtn = document.querySelector("#signup-cancel-btn");

// Creates a new account with the information of the form
async function createNewAccount(event) {
  // Prevents browser from reloading
  event.preventDefault();

  // Form values
  const username = signupUsernameInput.value.trim();
  const email = signupEmailInput.value.trim();
  const password = signupPasswordInput.value.trim();

  // If all the values are not empty, create the new account
  if (username && email && password) {
    // Tells the server to create a new user
    const res = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the server created the user successfully, redirect him or her to the quizzes view
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

// Redirects the user to the homepage view
function goToHomepageView() {
  document.location.replace("/");
}

// Sign up event listeners
signupCreateAccountBtn.addEventListener("click", createNewAccount);
signupCancelBtn.addEventListener("click", goToHomepageView);
