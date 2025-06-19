// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");
const menuIcon = mobileMenuBtn.querySelector("i");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Change icon
  if (navMenu.classList.contains("active")) {
    menuIcon.className = "ri-close-line";
  } else {
    menuIcon.className = "ri-menu-line";
  }
});

// Active link handling
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // Remove active class from all links
    navLinks.forEach((l) => l.classList.remove("active"));

    // Add active class to clicked link
    e.target.closest(".nav-link").classList.add("active");

    // Close mobile menu if open
    navMenu.classList.remove("active");
    menuIcon.className = "ri-menu-line";
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar")) {
    navMenu.classList.remove("active");
    menuIcon.className = "ri-menu-line";
  }
});
