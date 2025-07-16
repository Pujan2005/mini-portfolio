document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } else if (!email.includes("@")) {
    alert("Please enter a valid email.");
  } else {
    alert("Message sent successfully!");
    this.reset();
  }
});
