// Call the function when the page loads
window.addEventListener("DOMContentLoaded", function () {
  handleInitialContent();

  // Additional check for direct navigation
  const currentPath = window.location.pathname;
  if (currentPath !== "/" && currentPath !== "/home") {
    fetchContent(currentPath);
  }
});

// Function to handle initial content based on the current path
function handleInitialContent() {
  const initialPath = window.location.pathname;
  fetchContent(initialPath);
}

// Function to handle navigation and update content
function navigate(path) {
  fetchContent(path);
  // Push the state to the history
  history.pushState({ path: path }, null, path);
}

// Function to fetch and update content
function fetchContent(path) {
  const contentContainer = document.getElementById("content");
  contentContainer.innerHTML = "<loading-comp></loading-comp>";

  try {
    // Simulate fetching content based on the path
    let content = "<h2>Page not found</h2>";
    if (path === "/home" || path === "/") {
      content = "<home-comp></home-comp>";
    } else if (path === "/about") {
      content = "<about-comp></about-comp>";
    } else if (path === "/contact") {
      content = "<contact-comp></contact-comp>";
    } else if (path === "/services") {
      content = "<services-comp></services-comp>";
    } else if (path === "/how-it-works") {
      content = "<how-it-works-comp></how-it-works-comp>";
    } else if (path === "/faqs") {
      content = "<faqs-comp></faqs-comp>";
    } else if (path === "/terms-of-service") {
      content = "<terms-of-service-comp></terms-of-service-comp>";
    } else if (path === "/privacy-policy") {
      content = "<privacy-policy-comp></privacy-policy-comp>";
    } else if (path === "/get-started") {
      content = "<get-started-comp></get-started-comp>";
    } else if (path === "/sign-up") {
      content = "<sign-up-comp></sign-up-comp>";
    } else if (path === "/thank-you") {
      content = "<thank-you-comp></thank-you-comp>";
    }

    // Update the content div
    contentContainer.innerHTML = content;

    // Set the active menu item
    setActiveMenuItem(path);

  } catch (error) {
    console.error("Error fetching content:", error);
    // Handle errors and show an error component
    contentContainer.innerHTML = "<error-comp></error-comp>";
  }
}

// Function to set the active menu item
function setActiveMenuItem(path) {
  // Remove the 'active' class from all menu items
  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.remove("active");
  });

  // Find the menu item that matches the current path and add the 'active' class
  const activeLink = document.querySelector(`nav a[href="${path}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

// Call fetchContent with the current path when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname; // Get the current URL path
  fetchContent(currentPath);
});

// Prevent default navigation and use our custom function
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Get the path from the clicked link
    const path = link.getAttribute("href");

    // Fetch and update the content
    fetchContent(path);
  });
});

// Function to handle back and forward navigation
window.onpopstate = function (event) {
  if (event.state) {
    fetchContent(event.state.path);
  }
};

// Prevent default navigation and use our custom function
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // Remove the 'active' class from all menu items
    document.querySelectorAll("nav a").forEach((otherLink) => {
      otherLink.classList.remove("active");
    });

    // Add the 'active' class to the clicked menu item
    link.classList.add("active");
    navigate(link.getAttribute("href"));
  });
});

//menu navigation
const menuToggle = document.getElementById("menu-toggle");
const closeMenu = document.getElementById("close-menu");
const menu = document.getElementById("menu");

// Toggle menu visibility
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  closeMenu.classList.toggle("active");
});

// Close menu when close button is clicked
closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
  closeMenu.classList.remove("active");
});

// Close menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("active");
    closeMenu.classList.remove("active");
  }
});

// Close menu when a menu item is clicked
const menuLinks = document.querySelectorAll("#menu a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    closeMenu.classList.remove("active");
  });
});
