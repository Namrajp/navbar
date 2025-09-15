const navCenter = document.getElementById("nav");

document.addEventListener("DOMContentLoaded", function () {
  console.log(` <ul class="nav-links">
      <li><a class="nav-link" href="./">Home</a></li>
      <li><a class="nav-link" href="./work.html">Work</a></li>
      <li><a class="nav-link" href="./about.html">About</a></li>
      <li><a class="nav-link" href="./contact.html">Contact</a></li>
<ul>`);

  navCenter.innerHTML = `<div class="nav-center">
  <div class="nav-header">
    <img src="./assets/logo.svg" alt="logo" class="logo" />
    <button class="nav-toggle">
      <i class="fas fa-bars"></i>
    </button>
  </div>

  <div class="links-container">
    <ul class="nav-links">
      <li><a class="nav-link" href="./">Home</a></li>
      <li><a class="nav-link" href="./work.html">Work</a></li>
      <li><a class="nav-link" href="./about.html">About</a></li>
      <li><a class="nav-link" href="./contact.html">Contact</a></li>

      <!-- <li>
              <a href="#">profile</a>
            </li> -->
    </ul>
  </div>
</div>`;
});

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const linksContainer = document.querySelector(".links-container");
// close links
navToggle.addEventListener("click", function () {
  //   links.classList.toggle("show-links");
  //   console.log(linksHeight);
  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //   console.log(containerHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
