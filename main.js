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
