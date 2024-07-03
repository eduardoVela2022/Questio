// View items
const homepageCreateAnAccountBtn = document.querySelector(
  "#homepage-create-an-account-btn"
);

// Redirects the user to the log in view
function goToLoginView() {
  document.location.replace("/login");
}

// Homepage event listeners
homepageCreateAnAccountBtn.addEventListener("click", goToLoginView);
