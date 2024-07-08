// View items
const navbarLoginBtn = document.querySelector("#navbar-login-btn");
const navbarSignupBtn = document.querySelector("#navbar-signup-btn");

// Redirects the user to the log in view
function goToLoginView() {
  document.location.assign("/login");
}

// Redirects the user to the sign up view
function goToSignupView() {
  document.location.assign("/signup");
}

// Navbar button event listeners
navbarLoginBtn.addEventListener("click", goToLoginView);
navbarSignupBtn.addEventListener("click", goToSignupView);
