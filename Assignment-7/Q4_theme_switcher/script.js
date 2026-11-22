// Q4 – Theme switcher using setAttribute() for all theme changes.
const themeButtons = document.querySelectorAll("[data-theme-choice]");
const themeStatus = document.querySelector("#theme-status");

function applyTheme(themeName) {
  const validThemes = ["light", "dark", "blue"];
  if (!validThemes.includes(themeName)) return;

  // setAttribute updates both the custom data attribute and body class.
  document.body.setAttribute("data-theme", themeName);
  document.body.setAttribute("class", `${themeName}-theme`);
  themeStatus.textContent = `Current theme: ${themeName[0].toUpperCase()}${themeName.slice(1)}`;
}

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.themeChoice);
  });
});

// Apply the initial theme consistently.
applyTheme(document.body.getAttribute("data-theme") || "light");
