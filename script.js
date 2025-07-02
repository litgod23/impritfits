window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const topInfoBar = document.querySelector(".top-info-bar");
const mainNavbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    topInfoBar.classList.remove("hidden");
    mainNavbar.style.top = "40px";
  } else {
    topInfoBar.classList.add("hidden");
    mainNavbar.style.top = "0";
  }
});
const toggleBtn = document.getElementById("topInfoToggle");
const topInfoContent = document.getElementById("topInfoContent");

toggleBtn.addEventListener("click", () => {
  topInfoContent.classList.toggle("expanded");
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const links = navLinks.querySelectorAll("a");

  // Toggle nav and icon on click
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Auto-close nav on link click
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
});

function addToCart(productId) {
  fetch("php/add_to_cart.php", {
    method: "POST",
    body: JSON.stringify({ product_id: productId }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => alert(data.message))
    .catch((error) => console.error("Error:", error));
}
