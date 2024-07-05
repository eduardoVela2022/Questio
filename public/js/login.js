// View items
const loginEmailInput = document.querySelector("#login-email-input");
const loginPasswordInput = document.querySelector("#login-password-input");
const loginLoginBtn = document.querySelector("#login-login-btn");
const loginCancelBtn = document.querySelector("#login-cancel-btn");

// Logs in a user with the information of the form
async function loginUser(event) {
  // Prevents browser from reloading
  event.preventDefault();

  // Form values
  const email = loginEmailInput.value.trim();
  const password = loginPasswordInput.value.trim();

  // If all the values are not empty, log in the user
  if (email && password) {
    // Tells the server to login in the user
    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the user was logged in successfully, redirect him or her to the quizzes view
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
function goToHomepageView(event) {
  // Prevents browser from reloading
  event.preventDefault();
  document.location.assign("/");
}

// Log in event listeners
loginLoginBtn.addEventListener("click", loginUser);
loginCancelBtn.addEventListener("click", goToHomepageView);
