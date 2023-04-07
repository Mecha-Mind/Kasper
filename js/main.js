const navLinks = document.querySelectorAll("#nav_links a");
console.log(navLinks);
const navToggle = document.querySelector("#nav_toggle");
const shuffles = document.querySelectorAll(".shuffle li");

const landing = document.querySelector(".landing");

const bullets = document.querySelectorAll(".bts li");

function activeLinks(links) {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

activeLinks(navLinks);
activeLinks(shuffles);
activeLinks(bullets);

const navMainLinks = document.querySelector("#nav_links");
console.log(navMainLinks);

navToggle.addEventListener("click", (_) => {
  navMainLinks.classList.toggle("show");
  navLinks.forEach((ele) => {
    ele.addEventListener("click", (_) => {
      navMainLinks.classList.remove("show");
    });
  });
});

// Show/hide scroll-to-top button
const btnUp = document.querySelector("#btn_up");
console.log(btnUp);

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1160) {
    btnUp.style.display = "flex";
  } else {
    btnUp.style.display = "none";
  }
});

// Scroll to top when button is clicked
btnUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Update scroll progress bar width
const scroller = document.querySelector("#scroller");
console.log(scroller);

window.addEventListener("scroll", () => {
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollWidth = (scrollTop / height) * 100;
  scroller.style.width = `${scrollWidth}%`;
});
