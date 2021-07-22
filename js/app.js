// Scroll Menu - show active section
function scrollingLinkAnimation() {
  const sections = document.querySelectorAll(".page-section");
  const sectionChildren = document.querySelectorAll(".page-section-container");
  const links = document.querySelectorAll(".main-link");

  const observer = new IntersectionObserver(function (sections, options) {
    sections.forEach((section) => {
      if (!section.isIntersecting) {
        return;
      }

      links.forEach((link) => {
        const linkName = link.classList[2];

        if (section.target.id === linkName) {
          link.classList.add("link-section");
        } else {
          link.classList.remove("link-section");
        }
      });

      if (section.target) {
        section.target.classList.add("show-page-section");
      }
    });
  });

  sections.forEach((section) => {
    observer.observe(section);
  });
}

scrollingLinkAnimation();

// Display and hide hovered menu categories:
function showHoveredMenuCategories(e) {
  // variables:
  const categorySections = document.querySelectorAll(".category-contain");
  categorySections.forEach((category) => {
    //   show menu:
    category.addEventListener("mouseenter", function (e) {
      category.children[1].classList.add("hovered-show");
    });

    // hide menu:
    category.addEventListener("mouseleave", function (e) {
      category.children[1].classList.remove("hovered-show");
    });
  });
}

showHoveredMenuCategories();

// sort through general categories
function sortThroughCategories(selected) {
  const items = document.querySelectorAll(".item");
  const categoryTitles = document.querySelectorAll(".food-title");
  const menuColumns = document.querySelectorAll(".menu-col");
  const menuTitleColumns = document.querySelectorAll(".menu-title-col");

  for (let i = 0; i < items.length; i++) {
    if (!items[i].classList.contains(selected)) {
      items[i].classList.add("hide-item");
      items[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
        duration: 1000,
      });
    } else {
      items[i].classList.remove("hide-item");
      items[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
        duration: 1000,
      });
    }
  }

  for (let i = 0; i < categoryTitles.length; i++) {
    if (categoryTitles[i].textContent.toLowerCase() !== selected) {
      categoryTitles[i].classList.add("hide-item");
    } else {
      categoryTitles[i].classList.remove("hide-item");
    }

    menuTitleColumns.forEach((title) => {
      if (title.children[0].classList.contains("hide-item")) {
        title.classList.add("d-none");
        title.animate([{ opacity: "0.5" }, { opacity: "1" }], {
          duration: 1000,
        });
        title.classList.remove("pt-none");
      } else {
        title.classList.remove("d-none");
        title.animate([{ opacity: "0.5" }, { opacity: "1" }], {
          duration: 1000,
        });
        title.classList.add("pt-none");
      }
    });
  }

  for (let i = 0; i < menuColumns.length; i++) {
    if (menuColumns[i].children[0].classList.contains("hide-item")) {
      menuColumns[i].classList.add("d-none");
    } else {
      menuColumns[i].classList.remove("d-none");
    }
  }
}

// sort through hovered menu categories:
function sortThroughHoveredCategories(selected) {
  // variables
  const subCategories = document.querySelectorAll(".hovered-item");
  const menuItems = document.querySelectorAll(".item");
  const categoryTitles = document.querySelectorAll(".food-title");
  const menuColumns = document.querySelectorAll(".menu-col");
  const menuTitleColumns = document.querySelectorAll(".menu-title-col");

  for (let i = 0; i < menuItems.length; i++) {
    if (!menuItems[i].classList.contains(selected)) {
      menuItems[i].classList.add("hide-item");
      menuItems[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
        duration: 1000,
      });
    } else {
      menuItems[i].classList.remove("hide-item");
      menuItems[i].animate([{ opacity: "0.5" }, { opacity: "1" }], {
        duration: 1000,
      });
    }
  }

  for (let i = 0; i < categoryTitles.length; i++) {
    if (categoryTitles[i].textContent.toLowerCase() !== selected) {
      categoryTitles[i].classList.add("hide-item");
    } else {
      categoryTitles[i].classList.remove("hide-item");
    }

    menuTitleColumns.forEach((title) => {
      if (title.children[0].classList.contains("hide-item")) {
        title.classList.add("d-none");
        title.animate([{ opacity: "0.5" }, { opacity: "1" }], {
          duration: 1000,
        });
        title.classList.remove("pt-none");
      } else {
        title.classList.remove("d-none");
        title.animate([{ opacity: "0.5" }, { opacity: "1" }], {
          duration: 1000,
        });
        title.classList.add("pt-none");
      }
    });
  }

  for (let i = 0; i < menuColumns.length; i++) {
    if (menuColumns[i].children[0].classList.contains("hide-item")) {
      menuColumns[i].classList.add("d-none");
    } else {
      menuColumns[i].classList.remove("d-none");
    }
  }
}

// Menu sorting via both category and sub category buttons:

function sortThroughMenu(e) {
  // variables:
  const categories = document.querySelectorAll(".category");
  const subCategories = document.querySelectorAll(".hovered-item");
  const menuItems = document.querySelectorAll(".item");
  const categoryTitles = document.querySelectorAll(".food-title");
  const menuColumns = document.querySelectorAll(".menu-col");
  const menuTitleColumns = document.querySelectorAll(".menu-title-col");
  const allBtn = document.querySelector(".all-btn");
  //   general menu sorting:
  categories.forEach((menucategory) => {
    menucategory.addEventListener("click", function (e) {
      const selectedCategory = menucategory.dataset.category;
      sortThroughCategories(selectedCategory);

      allBtn.addEventListener("click", function (e) {
        menuItems.forEach((item) => {
          item.classList.remove("hide-item");
          item.animate([{ opacity: "0.5" }, { opacity: "1" }], {
            duration: 1000,
          });
        });

        categoryTitles.forEach((category) => {
          category.classList.remove("hide-item");
        });

        menuColumns.forEach((col) => {
          col.classList.remove("d-none");
          col.animate([{ opacity: "0.5" }, { opacity: "1" }], {
            duration: 1000,
          });
        });

        menuTitleColumns.forEach((title) => {
          title.classList.remove("pt-none");
          title.classList.remove("d-none");
        });
      });
    });

    subCategories.forEach((subcategory) => {
      subcategory.addEventListener("click", function (e) {
        const selectedSubCategory = subcategory.dataset.hovered;

        sortThroughHoveredCategories(selectedSubCategory);

        allBtn.addEventListener("click", function (e) {
          menuItems.forEach((item) => {
            item.classList.remove("hide-item");
            item.animate([{ opacity: "0.5" }, { opacity: "1" }], {
              duration: 1000,
            });
          });

          categoryTitles.forEach((category) => {
            category.classList.remove("hide-item");
          });

          menuColumns.forEach((col) => {
            col.classList.remove("d-none");
            col.animate([{ opacity: "0.5" }, { opacity: "1" }], {
              duration: 1000,
            });
          });

          menuTitleColumns.forEach((title) => {
            title.classList.remove("pt-none");
            title.classList.remove("d-none");
          });
        });
      });
    });
  });
}

sortThroughMenu();
