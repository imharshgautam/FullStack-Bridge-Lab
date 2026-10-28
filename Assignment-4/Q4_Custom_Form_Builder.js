// Q4: Custom Form Builder (Forms + Classes)
"use strict";

class FormBuilder {
    constructor(fields, container) {
        this.fields = fields;
        this.container = container;
    }

    buildForm() {
        const fieldMarkup = this.fields.map((field, index) => {
            const safeName = String(field.name).replace(/[^a-zA-Z0-9_-]/g, "");
            const safeLabel = String(field.label).replace(/[&<>"']/g, character => ({
                "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
            })[character]);
            const type = ["text", "email", "password", "number"].includes(field.type)
                ? field.type
                : "text";

            return `<label for="field-${index}">${safeLabel}
                <input id="field-${index}" name="${safeName}" type="${type}" ${field.required ? "required" : ""}>
            </label>`;
        }).join("");

        this.container.innerHTML = `<form id="generatedForm">${fieldMarkup}<button type="submit">Submit</button></form>`;

        this.container.querySelector("form").addEventListener("submit", event => {
            event.preventDefault();
            const formData = this.getFormData();
            document.querySelector("#output").textContent = JSON.stringify(formData, null, 2);
            console.log("Submitted form data:", formData);
        });
    }

    getFormData() {
        const form = this.container.querySelector("form");
        const result = {};
        for (const field of this.fields) {
            const input = form.elements[field.name];
            if (input) result[field.name] = input.value;
        }
        return result;
    }
}

const fields = [
    { name: "username", type: "text", label: "Username", required: true },
    { name: "email", type: "email", label: "Email address", required: true },
    { name: "age", type: "number", label: "Age", required: true }
];

const builder = new FormBuilder(fields, document.querySelector("#formContainer"));
builder.buildForm();
