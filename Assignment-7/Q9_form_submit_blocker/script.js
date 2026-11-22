// Q9 – Form submit blocker with inline, live validation errors.
const accountForm = document.querySelector("#account-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const successMessage = document.querySelector("#success-message");

const formFields = [
  { input: nameInput, error: document.querySelector("#name-error") },
  { input: emailInput, error: document.querySelector("#email-error") },
  { input: passwordInput, error: document.querySelector("#password-error") }
];

function getFieldError(input) {
  const value = input.value.trim();

  if (input.id === "name" && !value) return "Name is required.";
  if (input.id === "email" && !value) return "Email is required.";
  if (input.id === "email" && !value.includes("@")) return "Email must contain @.";
  if (input.id === "password" && value.length < 6) {
    return "Password must be at least 6 characters.";
  }

  return "";
}

function validateField(field) {
  const errorMessage = getFieldError(field.input);
  field.error.textContent = errorMessage;
  field.input.classList.toggle("invalid", Boolean(errorMessage));
  return !errorMessage;
}

formFields.forEach(field => {
  field.input.addEventListener("input", () => {
    validateField(field);
    successMessage.hidden = true;
  });
});

accountForm.addEventListener("submit", event => {
  // Stop the browser's default navigation/form submission.
  event.preventDefault();

  const formIsValid = formFields.map(validateField).every(Boolean);
  if (!formIsValid) {
    successMessage.hidden = true;
    return;
  }

  successMessage.hidden = false;
  accountForm.reset();
  formFields.forEach(field => {
    field.error.textContent = "";
    field.input.classList.remove("invalid");
  });
});
