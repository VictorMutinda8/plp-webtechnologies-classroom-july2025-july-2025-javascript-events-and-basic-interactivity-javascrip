// ====================
// Part 1: Event Handling
// ====================

// Example: Change text on button click
document.getElementById("eventBtn").addEventListener("click", function () {
  document.getElementById("eventMessage").textContent = " Button clicked! Event handled successfully.";
});


// ====================
// Part 2: Interactive Features
// ====================

// Feature 1: Dark/Light Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Feature 2: Counter
let counter = 0;
document.getElementById("incrementBtn").addEventListener("click", function () {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});
document.getElementById("decrementBtn").addEventListener("click", function () {
  counter--;
  document.getElementById("counterValue").textContent = counter;
});


// ====================
// Part 3: Form Validation
// ====================

document.getElementById("userForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop refresh

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let message = "";

  if (name.length < 3) {
    message = " Name must be at least 3 characters.";
  } else if (!/^[^\\s]+[^\\s]+\\.[^\\s]+$/.test(email)) {
    message = " Invalid email format.";
  } else if (password.length < 6) {
    message = " Password must be at least 6 characters.";
  } else {
    message = " Form submitted successfully!";
  }

  document.getElementById("formMessage").textContent = message;
});
