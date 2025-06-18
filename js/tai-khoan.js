// Add interactivity
document.addEventListener("DOMContentLoaded", function () {
  // Search functionality
  const searchInput = document.querySelector(".search-input");
  const tableRows = document.querySelectorAll("tbody tr");

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();

    tableRows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });

  // Create account button
  document.querySelector(".btn-primary").addEventListener("click", function () {
    alert("Tạo tài khoản mới - Chức năng sẽ được triển khai");
  });

  // Pagination
  document.querySelectorAll(".pagination button").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".pagination button")
        .forEach((b) => b.classList.remove("active"));
      if (!this.textContent.includes("‹") && !this.textContent.includes("›")) {
        this.classList.add("active");
      }
    });
  });
});

// Global variables for role change
let currentUserId = null;
let newRole = null;

// Function to handle role change
function changeRole(userId, role) {
  currentUserId = userId;
  newRole = role;

  // Find the correct row using tbody context
  const tableBody = document.querySelector("tbody");
  const row = tableBody.querySelector(`tr:nth-child(${userId})`);
  const userName = row.querySelector("td:nth-child(2)").textContent;

  document.getElementById(
    "modalMessage"
  ).textContent = `Bạn có chắc muốn thay đổi quyền của "${userName}" thành "${role}"?`;
  document.getElementById("roleModal").style.display = "block";
}

// Function to confirm role change
function confirmRoleChange() {
  if (currentUserId && newRole) {
    // Find the correct row using data attribute or nth-child with tbody context
    const tableBody = document.querySelector("tbody");
    const row = tableBody.querySelector(`tr:nth-child(${currentUserId})`);
    const roleCell = row.querySelector("td:nth-child(5) .badge");

    // Update role display
    if (newRole === "Admin") {
      roleCell.textContent = "Admin";
      roleCell.className = "badge badge-admin";
      // Update dropdown menu
      const dropdown = row.querySelector(".dropdown-content");
      dropdown.innerHTML =
        '<a href="#" onclick="changeRole(' +
        currentUserId +
        ", 'Người dùng')\">👤 Chuyển thành Người dùng</a>";
    } else if (newRole === "Người dùng") {
      roleCell.textContent = "Người dùng";
      roleCell.className = "badge badge-user";
      // Update dropdown menu
      const dropdown = row.querySelector(".dropdown-content");
      dropdown.innerHTML =
        '<a href="#" onclick="changeRole(' +
        currentUserId +
        ", 'Admin')\">🔑 Chuyển thành Admin</a>";
    }

    alert(`Đã thay đổi quyền thành "${newRole}" thành công!`);
  }
  closeModal();
}

// Function to close modal
function closeModal() {
  document.getElementById("roleModal").style.display = "none";
  currentUserId = null;
  newRole = null;
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("roleModal");
  if (event.target == modal) {
    closeModal();
  }
};
