console.log("Admin JS loaded!");

// --- Admin Product Management Btns ---
const addProductBtn = document.querySelector("#add-product-menu");
const removeProductBtn = document.querySelector("#remove-product-menu");

// Admin Management Containers
const addContainer = document.querySelector(".add-container");
const removeContainer = document.querySelector(".remove-container");

// Check if elements exist before adding event listeners
if (addProductBtn && addContainer && removeContainer) {
  addProductBtn.addEventListener("click", () => {
    addContainer.classList.toggle("show-container");
    removeContainer.classList.remove("show-container");
  });
}

if (removeProductBtn && addContainer && removeContainer) {
  removeProductBtn.addEventListener("click", () => {
    removeContainer.classList.toggle("show-container");
    addContainer.classList.remove("show-container");
  });
}

// --- Order Page Fix ---
document.addEventListener("DOMContentLoaded", () => {
  const orderPage = document.querySelector("body"); // Check if we're on order.html
  if (orderPage) {
    console.log("Order page detected!");

    // Example: Ensuring order-related elements exist
    const orderTable = document.querySelector("table");
    if (orderTable) {
      console.log("Order table found!");
    } else {
      console.warn("Order table not found.");
    }
  }
});
