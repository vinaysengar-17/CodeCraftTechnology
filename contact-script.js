// Form submission handling with animation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = document.querySelector(".btn-submit");
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  // Simulate form submission (replace with actual AJAX call)
  setTimeout(() => {
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.background = "#28a745";

    // Reset form after 2 seconds
    setTimeout(() => {
      this.reset();
      submitBtn.innerHTML =
        '<span class="btn-text">Send Message</span><span class="btn-icon"><i class="fas fa-paper-plane"></i></span>';
      submitBtn.style.background =
        "linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)";
      submitBtn.disabled = false;
    }, 2000);
  }, 1500);
});

// Floating label functionality
document.querySelectorAll(".floating-label .form-control").forEach((input) => {
  input.addEventListener("focus", () => {
    input.nextElementSibling.classList.add("active");
  });

  input.addEventListener("blur", () => {
    if (!input.value) {
      input.nextElementSibling.classList.remove("active");
    }
  });

  // Initialize labels if input has value
  if (input.value) {
    input.nextElementSibling.classList.add("active");
  }
});
