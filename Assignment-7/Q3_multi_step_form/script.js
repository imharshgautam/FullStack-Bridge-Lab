// Q3 – Multi-step form with step-by-step validation.
const registrationForm = document.querySelector("#registration-form");
const formSteps = [...document.querySelectorAll(".form-step")];
const stepLabel = document.querySelector("#step-label");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const summary = document.querySelector("#summary");
const summaryContent = document.querySelector("#summary-content");
let currentStep = 0;

const fields = [
  document.querySelector("#name"),
  document.querySelector("#email"),
  document.querySelector("#password")
];

function showStep() {
  formSteps.forEach((step, index) => step.classList.toggle("active", index === currentStep));
  stepLabel.textContent = `Step ${currentStep + 1} of 3`;
  backButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === 2 ? "Submit" : "Next";
}

function validateCurrentStep() {
  const field = fields[currentStep];
  const errorElement = document.querySelector(`#${field.id}-error`);
  const value = field.value.trim();
  let errorMessage = "";

  if (!value) {
    errorMessage = "This field is required.";
  } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errorMessage = "Please enter a valid email address.";
  } else if (field.type === "password" && value.length < 6) {
    errorMessage = "Password must contain at least 6 characters.";
  }

  errorElement.textContent = errorMessage;
  return errorMessage === "";
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStep < formSteps.length - 1) {
    currentStep++;
    showStep();
    fields[currentStep].focus();
    return;
  }

  registrationForm.hidden = true;
  stepLabel.hidden = true;
  summary.hidden = false;
  summaryContent.textContent =
    `Name: ${fields[0].value.trim()} | Email: ${fields[1].value.trim()} | Password: ${"*".repeat(fields[2].value.length)}`;
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
});

// Clear a field's error as soon as the user corrects it.
fields.forEach(field => {
  field.addEventListener("input", () => {
    document.querySelector(`#${field.id}-error`).textContent = "";
  });
});

registrationForm.addEventListener("submit", event => event.preventDefault());
showStep();
