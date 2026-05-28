const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll(".project-item");
const backToTopButton = document.querySelector("#backToTop");
const currentYear = document.querySelector("#currentYear");

// Update footer year automatically
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Filter portfolio projects by category
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((currentButton) => {
      currentButton.classList.remove("active");
    });

    button.classList.add("active");

    projectItems.forEach((project) => {
      const categories = project.dataset.category || "";
      const shouldShow =
        selectedFilter === "all" || categories.includes(selectedFilter);

      project.classList.toggle("d-none", !shouldShow);
    });
  });
});

// Show back-to-top button on scroll
window.addEventListener("scroll", () => {
  const shouldShowButton = window.scrollY > 500;
  backToTopButton.classList.toggle("is-visible", shouldShowButton);
});

// Smooth scroll to top
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
