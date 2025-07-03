function searchProduct() {
  const searchBox = document.getElementById("search-box");
  const query = searchBox.value.trim();
  if (query) {
    alert(`Searching for "${query}"... (functionality under development)`);
  } else {
    alert("Please enter something to search!");
  }
}