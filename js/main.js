// Select elements
const navMainLinks = document.querySelector("#nav_links");
// Get all the nav links
const navLinks = document.querySelectorAll("#nav_links a");
const navToggle = document.querySelector("#nav_toggle");
const shuffles = document.querySelectorAll(".shuffle li");
const boxes = document.querySelectorAll("#porto .box");
const landing = document.querySelector(".landing");
const bullets = document.querySelectorAll(".bts li");
const btnScrollToTop = document.querySelector("#btn_up");
const progressScroller = document.querySelector("#scroller");
const slider = document.querySelector(".image-slider");
const images = document.querySelectorAll(".image-slider img");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const searchIcon = document.querySelector("#search_icon");
const searchInput = document.querySelector("#search_input");
const skillsBullets = document.querySelectorAll(".skills li");

// toggle on click search icon
searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("show");
});

// Define the offset value for the sections
const offset = 100;

// Add a scroll event listener on the window object
window.addEventListener("scroll", () => {
  // Get the current scroll position
  const currentScrollPos = window.scrollY;

  // Loop through the nav links
  navLinks.forEach((link) => {
    // Get the corresponding section based on the link's href attribute
    const section = document.querySelector(link.getAttribute("href"));

    // Get the height of the section
    const sectionHeight = section.offsetHeight;

    // Get the distance of the section from the top of the page
    const sectionTop = section.offsetTop;

    // Check if the current scroll position is within the section
    if (
      currentScrollPos >= sectionTop - offset &&
      currentScrollPos < sectionTop + sectionHeight - offset
    ) {
      // Add the active class to the corresponding nav link
      link.classList.add("active");
    } else {
      // Remove the active class from the nav link
      link.classList.remove("active");
    }
  });
});
// Filter boxes based on category - Portfolio section
shuffles.forEach((button) => {
  button.addEventListener("click", (_) => {
    const category = button.textContent.toLowerCase();
    console.log(category);
    boxes.forEach((box) => {
      if (
        category === "all" ||
        box.getAttribute("data-category") === category
      ) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});

// Add active class to clicked links
const setActiveLink = (links) => {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((btn) => btn.classList.remove("active"));
      link.classList.add("active");
    });
  });
};

navToggle.addEventListener("click", (_) => {
  navMainLinks.classList.toggle("show");
  navLinks.forEach((ele) => {
    ele.addEventListener("click", (_) => {
      navMainLinks.classList.remove("show");
    });
  });
});

// Show/hide scroll-to-top button
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1160) {
    btnScrollToTop.classList.add("visible");
  } else {
    btnScrollToTop.classList.remove("visible");
  }
});

// Scroll to top when button is clicked
btnScrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Update scroll progress bar width
window.addEventListener("scroll", () => {
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollWidth = (scrollTop / scrollHeight) * 100;
  progressScroller.style.width = `${scrollWidth}%`;
});

// Image slider functionality
let currentImage = 0;

const showImage = (index) => {
  images[currentImage].style.display = "none";
  bullets[currentImage].classList.remove("active");
  currentImage = index;
  images[currentImage].style.display = "block";
  bullets[currentImage].classList.add("active");
};

leftBtn.addEventListener("click", () => {
  const lastIndex = images.length - 1;
  const newIndex = currentImage === 0 ? lastIndex : currentImage - 1;
  showImage(newIndex);
});

rightBtn.addEventListener("click", () => {
  const lastIndex = images.length - 1;
  const newIndex = currentImage === lastIndex ? 0 : currentImage + 1;
  showImage(newIndex);
});

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    showImage(index);
  });
});

// Initialize slider
images[currentImage].style.display = "block";
bullets[currentImage].classList.add("active");

// Initialize functionality for links
setActiveLink(navLinks);
setActiveLink(shuffles);
setActiveLink(bullets);
setActiveLink(skillsBullets);

// Define quote slider module
const quoteSlider = (function () {
  // Private variables and functions --'local scope'
  let currentQuote = 0;
  const quotes = document.querySelectorAll(".quote-slider .container");

  const showQuote = (index) => {
    quotes[currentQuote].classList.remove("active");
    currentQuote = index;
    quotes[currentQuote].classList.add("active");
  };

  // Public function to start the quote slider
  const startSlider = () => {
    // Initially show the first quote
    quotes[currentQuote].classList.add("active");

    // Start the quote slider
    setInterval(() => {
      // Find the currently active quote
      const activeQuote = document.querySelector(
        ".quote-slider .container.active"
      );

      // Check if there's a next quote
      if (activeQuote.nextElementSibling) {
        // If there is, make it active
        showQuote(currentQuote + 1);
      } else {
        // If there isn't, go back to the first quote
        showQuote(0);
      }
    }, 2000); // Change quote every 3 seconds
  };

  // Return public functions
  return {
    startSlider,
  };
})();

// Start the quote slider
quoteSlider.startSlider();
