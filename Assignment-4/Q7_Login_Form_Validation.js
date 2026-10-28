// Q7: Login Form Validation using RegExp
"use strict";

const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;
    const errors = [];

    if (!/^.{5,}$/.test(username)) {
        errors.push("Username must be at least 5 characters long.");
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must include at least one number.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must include at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must include at least one special character.");
    }

    const messageElement = document.querySelector("#messages");
    messageElement.className = errors.length ? "error" : "success";
    messageElement.textContent = errors.length
        ? errors.join("\n")
        : "Validation successful! The input meets the demo requirements.";

    console.log(errors.length ? "Validation errors:" : "Validation successful:", errors);
});
