// Q8 – Custom dropdown with capturing-phase outside-click detection.
const dropdown = document.querySelector("#dropdown");
const dropdownButton = document.querySelector("#dropdown-button");
const dropdownOptions = document.querySelector("#dropdown-options");
const selectionMessage = document.querySelector("#selection");

function setDropdownOpen(isOpen) {
  dropdownOptions.hidden = !isOpen;
  dropdownButton.setAttribute("aria-expanded", String(isOpen));
}

dropdownButton.addEventListener("click", () => {
  setDropdownOpen(dropdownOptions.hidden);
});

// Capture phase runs before bubbling listeners. A document-level capture
// listener closes the menu when the click target is outside the dropdown.
document.addEventListener("click", event => {
  if (!dropdown.contains(event.target)) {
    setDropdownOpen(false);
  }
}, true);

dropdownOptions.addEventListener("click", event => {
  const optionButton = event.target.closest("button[data-value]");
  if (!optionButton) return;

  dropdownButton.textContent = optionButton.dataset.value;
  selectionMessage.textContent = `Selected: ${optionButton.dataset.value}`;
  setDropdownOpen(false);
});
