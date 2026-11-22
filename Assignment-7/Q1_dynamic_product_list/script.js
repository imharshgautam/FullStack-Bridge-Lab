// Q1 – Dynamic Product List Manager using event delegation.
const productForm = document.querySelector("#product-form");
const productInput = document.querySelector("#product-input");
const productList = document.querySelector("#product-list");
let currentlyEditingItem = null;

// Save the current inline edit. Empty edits are discarded.
function saveEditedItem() {
  if (!currentlyEditingItem) return;

  const item = currentlyEditingItem;
  const editInput = item.querySelector(".edit-input");
  const nameSpan = item.querySelector(".product-name");

  if (editInput && nameSpan) {
    const updatedName = editInput.value.trim();
    if (updatedName) nameSpan.textContent = updatedName;
    editInput.replaceWith(nameSpan);
  }
  currentlyEditingItem = null;
}

function startEditing(item) {
  if (currentlyEditingItem === item) return;
  saveEditedItem();

  const nameSpan = item.querySelector(".product-name");
  const editInput = document.createElement("input");
  editInput.className = "edit-input";
  editInput.value = nameSpan.textContent;
  nameSpan.replaceWith(editInput);
  currentlyEditingItem = item;
  editInput.focus();
  editInput.select();

  editInput.addEventListener("keydown", event => {
    if (event.key === "Enter") saveEditedItem();
    if (event.key === "Escape") {
      editInput.value = "";
      saveEditedItem();
    }
  });
}

// Add products to the list.
productForm.addEventListener("submit", event => {
  event.preventDefault();
  const productName = productInput.value.trim();
  if (!productName) return;

  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.dataset.action = "delete";
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";

  listItem.append(nameSpan, editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
  productInput.focus();
});

// One parent listener handles every Edit and Delete button.
productList.addEventListener("click", event => {
  const actionButton = event.target.closest("button[data-action]");
  if (!actionButton || !productList.contains(actionButton)) return;

  const item = actionButton.closest("li");
  if (actionButton.dataset.action === "edit") startEditing(item);

  if (actionButton.dataset.action === "delete") {
    if (currentlyEditingItem === item) currentlyEditingItem = null;
    item.remove();
  }
});

// Clicking outside the item being edited automatically saves its edit.
document.addEventListener("click", event => {
  if (currentlyEditingItem && !currentlyEditingItem.contains(event.target)) {
    saveEditedItem();
  }
});
