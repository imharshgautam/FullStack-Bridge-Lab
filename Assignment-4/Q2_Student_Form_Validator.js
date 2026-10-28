// Q2: Student Form Validator (Forms + RegExp)
"use strict";

const studentForm = document.querySelector("#studentForm");

const validationRules = {
    name: /^[A-Za-z]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

const errorMessages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email, e.g. example@domain.com.",
    phone: "Phone must contain exactly 10 digits.",
    password: "Password needs an uppercase letter, a number, and a special character."
};

studentForm.addEventListener("submit", event => {
    event.preventDefault();
    let isFormValid = true;

    for (const fieldName of Object.keys(validationRules)) {
        const input = studentForm.elements[fieldName];
        const errorElement = document.querySelector(`#${fieldName}Error`);
        const isValid = validationRules[fieldName].test(input.value.trim());

        input.classList.toggle("valid", isValid);
        input.classList.toggle("invalid", !isValid);
        errorElement.textContent = isValid ? "" : errorMessages[fieldName];

        if (!isValid) isFormValid = false;
    }

    document.querySelector("#result").textContent = isFormValid
        ? "Registration details are valid!"
        : "Please correct the highlighted fields.";
});
