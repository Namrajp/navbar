const navCenter = document.getElementById("navigation");

document.addEventListener("DOMContentLoaded", function () {
  navCenter.innerHTML = `<div class="nav-center">
  <div class="nav-header">
    <img src="./assets/logo.svg" alt="logo" class="logo" />
    <button class="nav-toggle">
      <i class="fas fa-bars"></i>
    </button>
  </div>

  <div class="links-container">
    <ul class="nav-links">
              <li>
                <a href="#home" class="scroll-link">home</a>
              </li>
              <li>
                <a href="#about" class="scroll-link">about</a>
              </li>
              <li>
                <a href="#services" class="scroll-link">services</a>
              </li>
              <li>
                <a href="#tours" class="scroll-link">tours</a>
              </li>
     

      <!-- <li>
              <a href="#">profile</a>
            </li> -->
    </ul>
  </div>
</div>`;

  // close links
  getNavbarHeight();
  smoothScroll();
});

function getNavbarHeight() {
  const navToggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  const linksContainer = document.querySelector(".links-container");
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
}
/** fixed navbar */
function scrollNavbar() {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navigation");
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log(navbar);

    const scrollHeight = window.pageYOffset;
    if (scrollHeight > navHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
}
scrollNavbar();

function smoothScroll() {
  // ********** smooth scroll ************
  // select links
  const navbar = document.getElementById("navigation");
  // const links = document.querySelector(".nav-links");
  const linksContainer = document.querySelector(".links-container");

  const scrollLinks = document.querySelectorAll(".scroll-link");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // prevent default
      e.preventDefault();
      // navigate to specific spot
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);

      const navHeight = navbar.getBoundingClientRect().height;
      const containerHeight = linksContainer.getBoundingClientRect().height;
      const fixedNav = navbar.classList.contains("fixed-nav");
      let position = element.offsetTop - navHeight;
      // console.log(navHeight);

      if (!fixedNav) {
        position = position - navHeight;
      }
      if (navHeight > 82) {
        position = position + containerHeight;
      }

      window.scrollTo({
        left: 0,
        top: position,
      });
      // close
      linksContainer.style.height = 0;
    });
  });
  // calculate heights
}
