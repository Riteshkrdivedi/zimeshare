document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("searchBar");
  const productItems = document.querySelectorAll(".product-item");

  searchBar.addEventListener("input", function () {
    const searchTerm = searchBar.value.toLowerCase();

    if (searchTerm.length > 2) {
      productItems.forEach((item) => {
        const productName = item.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchTerm)) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    } else {
      // If search term is less than 3 characters, show all items
      productItems.forEach((item) => {
        item.classList.remove("hidden");
      });
    }
  });
});
