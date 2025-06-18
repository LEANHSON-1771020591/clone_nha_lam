// File input display
document.getElementById("book_img").addEventListener("change", function (e) {
  const fileName = e.target.files[0] ? e.target.files[0].name : "";
  document.getElementById("fileName").textContent = fileName;
});

// Auto calculate discount
function calculateDiscount() {
  const price = parseFloat(document.getElementById("price").value) || 0;
  const priceOld = parseFloat(document.getElementById("price_old").value) || 0;

  if (price > 0 && priceOld > 0 && priceOld > price) {
    const discount = Math.round(((priceOld - price) / priceOld) * 100);
    document.getElementById("discount").value = discount;
  }
}

document.getElementById("price").addEventListener("input", calculateDiscount);
document
  .getElementById("price_old")
  .addEventListener("input", calculateDiscount);

// Form submission
document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const bookData = {};

  // Convert FormData to object
  for (let [key, value] of formData.entries()) {
    if (key !== "book_img") {
      bookData[key] = value;
    }
  }

  // Handle file
  const fileInput = document.getElementById("book_img");
  if (fileInput.files[0]) {
    bookData.book_img = fileInput.files[0].name;
  }

  console.log("Book data:", bookData);

  // Show success message
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Hide success message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);

  // Reset form after showing success
  setTimeout(() => {
    this.reset();
    document.getElementById("fileName").textContent = "";
  }, 1000);
});

// Reset form
document.querySelector(".btn-secondary").addEventListener("click", function () {
  document.getElementById("fileName").textContent = "";
});
