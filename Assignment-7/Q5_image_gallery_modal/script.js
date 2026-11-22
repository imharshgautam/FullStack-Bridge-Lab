// Q5 – Image gallery with modal preview and event propagation control.
const gallery = document.querySelector("#gallery");
const imageModal = document.querySelector("#image-modal");
const modalContent = document.querySelector("#modal-content");
const modalImage = document.querySelector("#modal-image");
const closeButton = document.querySelector("#close-button");

gallery.addEventListener("click", event => {
  if (event.target.tagName !== "IMG") return;

  modalImage.src = event.target.src.replace("/500/350", "/1200/850");
  modalImage.alt = event.target.alt;
  imageModal.classList.add("open");
  imageModal.setAttribute("aria-hidden", "false");
});

function closeModal() {
  imageModal.classList.remove("open");
  imageModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

// Clicking the overlay (outside the content) closes the preview.
imageModal.addEventListener("click", closeModal);

// Prevent clicks inside the modal content from bubbling to the overlay.
modalContent.addEventListener("click", event => event.stopPropagation());
closeButton.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});
