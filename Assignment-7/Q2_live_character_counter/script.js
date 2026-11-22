// Q2 – Live character counter with warning and maximum-length behavior.
const messageInput = document.querySelector("#message");
const counter = document.querySelector("#counter");
const resetButton = document.querySelector("#reset-button");
const maximumCharacters = 100;

function updateCounter() {
  const remainingCharacters = maximumCharacters - messageInput.value.length;
  counter.textContent = `${remainingCharacters} characters remaining`;
  counter.classList.toggle("warning", remainingCharacters <= 20 && remainingCharacters > 0);
  counter.classList.toggle("danger", remainingCharacters === 0);

  if (remainingCharacters > 20) counter.classList.remove("warning", "danger");
}

// beforeinput prevents insertion when the field already has 100 characters.
// Deletions and other non-inserting edits remain possible.
messageInput.addEventListener("beforeinput", event => {
  const isInsertion = event.inputType.startsWith("insert");
  if (isInsertion && messageInput.value.length >= maximumCharacters) {
    event.preventDefault();
  }
});

messageInput.addEventListener("input", updateCounter);

resetButton.addEventListener("click", () => {
  messageInput.value = "";
  updateCounter();
  messageInput.focus();
});

updateCounter();
