// Q8: Dynamic Object Updater
"use strict";

const user = { name: "John", email: "john@mail.com", age: 21 };
const userForm = document.querySelector("#userForm");
const userOutput = document.querySelector("#userOutput");

// Pre-fill the form with the original object values.
for (const [key, value] of Object.entries(user)) {
    userForm.elements[key].value = value;
}

function renderUser() {
    userOutput.textContent = JSON.stringify(user, null, 2);
}

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update the existing object using submitted form values.
    user.name = userForm.elements.name.value.trim();
    user.email = userForm.elements.email.value.trim();
    user.age = Number(userForm.elements.age.value);

    renderUser();
    console.log("Updated user object:", user);
});

renderUser();
