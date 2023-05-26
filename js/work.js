function setupCarousel(sectionId) {
  const slides = document.querySelectorAll(`#${sectionId} .slide`);
  const nextBtn = document.querySelector(`#${sectionId} .nextBtn`);
  const prevBtn = document.querySelector(`#${sectionId} .prevBtn`);

  slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;

    // Add event listener for hover
    slide.addEventListener("mouseenter", function () {
      slide.querySelector(".slide-text").style.opacity = 1;
      slide.querySelector(".slide-img").style.filter = "blur(5px)";
    });

    slide.addEventListener("mouseleave", function () {
      slide.querySelector(".slide-text").style.opacity = 0;
      slide.querySelector(".slide-img").style.filter = "blur(0)";
    });
  });

  let counter = 0;
  nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
  });
  prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
  });

  function carousel() {
    if (counter === slides.length) {
      counter = 0;
    }
    if (counter < 0) {
      counter = slides.length - 1;
    }

    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });

    // Button display
    if (counter < slides.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
    if (counter > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }
  }

  prevBtn.style.display = "none";
}

// Apply carousel to section with ID "sec1"
setupCarousel("sec1");

// Apply carousel to section with ID "sec2"
setupCarousel("sec2");

// Apply carousel to section with ID "sec3"
setupCarousel("sec3");

// Apply carousel to section with ID "sec4"
setupCarousel("sec4");

// Apply carousel to section with ID "sec5"
setupCarousel("sec5");

