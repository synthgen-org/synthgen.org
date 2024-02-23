require('dotenv').config();
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

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
    }
    // Update the content div
    document.getElementById("content").innerHTML = content;
  } catch (error) {
    console.error("Error fetching content:", error);
    // Handle errors and show an error component
    contentContainer.innerHTML = "<error-comp></error-comp>";
  }
}

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
    navigate(link.getAttribute("href"));
  });
});
