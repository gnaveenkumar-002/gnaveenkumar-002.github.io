document.addEventListener("DOMContentLoaded", function () {
  let prevScrollPos = window.scrollY;
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 100) {
      // Scroll down hides navbar, up shows it
      navbar.style.top = currentScrollPos > prevScrollPos ? "-100px" : "0";
    } else {
      navbar.style.top = "0";
    }

    prevScrollPos = currentScrollPos;
  });

  // Hide navbar on click, then scroll to section
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        navbar.style.top = "-100px";
      }, 700); // allow scroll to complete
    });
  });
});
