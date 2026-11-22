// Q6 – Real-time, case-insensitive table filtering.
const searchInput = document.querySelector("#search-input");
const studentRows = [...document.querySelectorAll("#student-rows tr")];
const emptyMessage = document.querySelector("#empty-message");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleRowCount = 0;

  studentRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    const matchesSearch = rowText.includes(searchTerm);
    row.hidden = !matchesSearch;
    if (matchesSearch) visibleRowCount++;
  });

  emptyMessage.hidden = visibleRowCount !== 0;
});
