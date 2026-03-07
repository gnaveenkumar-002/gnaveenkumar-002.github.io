// ===============================
// Typing Animation
// ===============================
const phrases = [
  "Software Engineer",
  "Backend Developer",
  "AWS Enthusiast",
  "Problem Solver"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typing");

function typeEffect() {
  if (!typingEl) return;

  const current = phrases[phraseIndex];

  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === current.length) {
    speed = 1800; // pause at full word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 500; // pause before next word
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Mobile Menu Toggle
// ===============================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when clicking a link (mobile UX)
  document.querySelectorAll(".navlist a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}


// ===============================
// Scroll Reveal Animation
// ===============================
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // animate once
    }
  });
}, observerOptions);

document.querySelectorAll(
  ".skill-card, .exp-item, .project-card, .about-box"
).forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// ===============================
// Contact Form Validation
// ===============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name.length < 2) {
      alert("Please enter a valid name (at least 2 characters).");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.length < 10) {
      alert("Message should be at least 10 characters long.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
