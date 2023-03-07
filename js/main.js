let links = document.querySelectorAll("#lnks a");
let bullets = document.querySelectorAll(".bts li");
let shuffles = document.querySelectorAll(".shuffle li");
let btn_up = document.querySelector(".btn-up");

// links.forEach((link) => {
//   link.addEventListener("click", function () {
//     links.forEach((btn) => btn.classList.remove("active"));
//     this.classList.add("active");
//   });
// });
// bullets.forEach((blt) => {
//   blt.addEventListener("click", function () {
//     bullets.forEach((btn) => btn.classList.remove("active"));
//     this.classList.add("active");
//   });
// });
// shuffles.forEach((shuffle) => {
//   shuffle.addEventListener("click", function () {
//     shuffles.forEach((btn) => btn.classList.remove("active"));
//     this.classList.add("active");
//   });
// });

function activeLinks(links) {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });
}

activeLinks(links);
activeLinks(bullets);
activeLinks(shuffles);

window.onscroll = (_) => {
  if (
    document.body.scrollTop > 1160 ||
    document.documentElement.scrollTop > 1160
  ) {
    btn_up.style.display = "block";
  } else {
    btn_up.style.display = "none";
  }
};
btn_up.addEventListener("click", (_) => {
  document.body.scrollTop = 0; //For Safari
  document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE & Opera
});
