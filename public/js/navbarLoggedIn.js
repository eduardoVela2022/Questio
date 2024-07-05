// View items
const navbarAccountBtn = document.querySelector("#navbar-account-btn");
const navbarQuizzesBtn = document.querySelector("#navbar-quizzes-btn");
const navbarLogoutBtn = document.querySelector("#navbar-logout-btn");

// Redirects the user to the account view
function goToAccountView() {
  document.location.assign("/account");
}

// Redirects the user to the quizzes view
function goToQuizzesView() {
  document.location.assign("/quizzes");
}

// Logs out the user and redirects him or her to the homepage view
async function logoutUser() {
  // Tells the server to log out the user
  const res = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // If the server logs out the user successfully, redirect him or her to the homepage view
  if (res.ok) {
    document.location.assign("/");
  } else {
    // Else send an alert with the status text of the response
    alert(res.statusText);
  }
}

// Navbar button event listeners
navbarAccountBtn.addEventListener("click", goToAccountView);
navbarQuizzesBtn.addEventListener("click", goToQuizzesView);
navbarLogoutBtn.addEventListener("click", logoutUser);
