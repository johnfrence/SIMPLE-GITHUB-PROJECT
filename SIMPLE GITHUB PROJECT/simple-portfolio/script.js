// Get the form from the page
const form = document.getElementById("contactForm");

// Run this code when the form is submitted
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  // Get what the user typed
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check that no field is empty
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } else {
    alert("Message sent!");
    form.reset(); // clear the form
  }
});
