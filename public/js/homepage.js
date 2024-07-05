// View items
const homepageCreateAnAccountBtn = document.querySelector(
  "#homepage-create-an-account-btn"
);

// Redirects the user to the log in view
function goToSignUpView() {
  document.location.replace("/signup");
}

// Homepage event listeners
homepageCreateAnAccountBtn.addEventListener("click", goToSignUpView);
