// View items
const accountUsernameInput = document.querySelector("#account-username-input");
const accountEmailInput = document.querySelector("#account-email-input");
const accountPasswordInput = document.querySelector("#account-password-input");
const accountModifyBtn = document.querySelector("#account-modify-btn");
const accountDeleteBtn = document.querySelector("#account-delete-btn");

// Modifies the user with the information of the form
async function modifyUser(event) {
  // Prevents browser from reloading
  event.preventDefault();

  // Form values
  const username = accountUsernameInput.value.trim();
  const email = accountEmailInput.value.trim();
  const password = accountPasswordInput.value.trim();

  // If all the values are not empty, modify the user's account
  if (username && email && password) {
    // Tells the server to modify the user's account
    const res = await fetch("/api/users/", {
      method: "PUT",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    // If the server modified the user's account successfully, refresh the account view
    if (res.ok) {
      document.location.replace("/account");
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

// Deletes the user with the information of the form
async function deleteUser(event) {
  // Prevents browser from reloading
  event.preventDefault();

  // The user needs to confirm that he or she wants to delete the account, before continuing forward.
  if (confirm("Are you sure you want to delete your account") === false) {
    return;
  }

  // Form values
  const username = accountUsernameInput.value.trim();
  const email = accountEmailInput.value.trim();

  // If all the values are not empty, delete the user's account
  if (username && email) {
    // Tells the server to delete the user's account
    const res = await fetch("/api/users/", {
      method: "DELETE",
      body: JSON.stringify({ username, email }),
      headers: { "Content-Type": "application/json" },
    });

    // If the server deleted the user's account successfully, log out the user and redirect him or her to the homepage
    if (res.ok) {
      logoutUser();
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

// Logs out the user and redirects him or her to the homepage view
async function logoutUser() {
  // Tells the server to log out the user
  const res = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  // If the server logs out the user successfully, redirect him or her to the homepage view
  if (res.ok) {
    document.location.replace("/");
  } else {
    // Else send an alert with the status text of the response
    alert(res.statusText);
  }
}

// Account event listeners
accountModifyBtn.addEventListener("click", modifyUser);
accountDeleteBtn.addEventListener("click", deleteUser);
