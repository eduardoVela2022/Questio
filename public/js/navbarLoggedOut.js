// View items
const navbarLoginBtn = document.querySelector("#navbar-login-btn");
const navbarSignupBtn = document.querySelector("#navbar-signup-btn");

// Redirects the user to the log in view
function goToLoginView() {
  try {
    document.location.assign("/login");
  } catch (error) {
    console.error("Error redirecting to login:", error);
    // Handle the error, e.g., display a message to the user
  }
}

// Redirects the user to the sign up view
function goToSignupView() {
  document.location.assign("/signup");
}

// Navbar button event listeners
navbarLoginBtn.addEventListener("click", goToLoginView);
navbarSignupBtn.addEventListener("click", goToSignupView);
