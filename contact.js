document.addEventListener('DOMContentLoaded', () => {
  const sendBtn = document.querySelector('.button');

  sendBtn.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.querySelector('input[name="Name"]').value.trim();
    const contact = document.querySelector('input[name="Contact Number"]').value.trim();
    const email = document.querySelector('input[name="Email"]').value.trim();
    const message = document.querySelector('textarea').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !contact || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear form fields
    document.querySelector('input[name="Name"]').value = "";
    document.querySelector('input[name="Contact Number"]').value = "";
    document.querySelector('input[name="Email"]').value = "";
    document.querySelector('textarea').value = "";
  });
});
