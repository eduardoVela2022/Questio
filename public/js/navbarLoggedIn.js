// View items
const navbarAccountBtn = document.querySelector("#navbar-account-btn");
const navbarQuizzesBtn = document.querySelector("#navbar-quizzes-btn");
const navbarLogoutBtn = document.querySelector("#navbar-logout-btn");

// Navbar button functions
// Redirects the user to the account view
function goToAccountView() {
  document.location.replace("/account");
}

// Redirects the user to the quizzes view
function goToQuizzesView() {
  document.location.replace("/quizzes");
}

// Logs out the user and redirects him or her to the homepage
async function logoutUser() {
  // Tells the server to log out the user
  const res = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // If the server logs out the user successfully, redirect him or her to the homepage
  if (res.ok) {
    document.location.replace("/");
  } else {
    // Else send an alert with the status text of the response
    alert(res.statusText);
  }
}

// Navbar button event listeners
navbarAccountBtn.addEventListener("click", goToAccountView);
navbarQuizzesBtn.addEventListener("click", goToQuizzesView);
navbarLogoutBtn.addEventListener("click", logoutUser);
