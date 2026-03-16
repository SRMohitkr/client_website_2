const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
  });
}

const forms = document.querySelectorAll(".js-form");
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.querySelector(".form-success");
    if (message) {
      message.classList.add("show");
      message.textContent =
        "Thank you! We have received your request and will confirm shortly.";
    }
    form.reset();
  });
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
