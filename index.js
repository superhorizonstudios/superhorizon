document.addEventListener("DOMContentLoaded", () => {
  // Menu Toggle Functionality
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Intersection Observer for Animations
  const sections = document.querySelectorAll("#about-us, #team .team-container");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); //Stop observing once triggered
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the section is visible
  );

  sections.forEach((section) => {
    section.style.opacity = "0"; // Start hidden
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease-out";
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Toggle visibility with animation
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.opacity = "0";
      dropdownContent.style.transform = "translateY(-10px)";
      setTimeout(() => (dropdownContent.style.display = "none"), 300);
    } else {
      dropdownContent.style.display = "block";
      setTimeout(() => {
        dropdownContent.style.opacity = "1";
        dropdownContent.style.transform = "translateY(0)";
      }, 10);
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("#about-us, #team .team-container");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target); // Stop observing once triggered
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the section is visible
  );

  sections.forEach((section) => {
    section.style.opacity = "0"; // Start hidden
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 1s ease-out";
    observer.observe(section);
  });
});



/*Image slider*/

document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let currentIndex = 0;

  const showSlide = (index) => {
    sliderContainer.style.transform = `translateX(-${index * 100}%)`;
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  // Automatic sliding
  let autoSlide = setInterval(nextSlide, 5000);

  // Pause on hover
  sliderContainer.addEventListener("mouseover", () => clearInterval(autoSlide));
  sliderContainer.addEventListener("mouseout", () => {
    autoSlide = setInterval(nextSlide, 5000);
  });

  // Button functionality
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});
