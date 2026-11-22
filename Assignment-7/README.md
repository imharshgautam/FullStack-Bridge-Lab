# Assignment 7 – HTML, CSS and JavaScript Solutions

This ZIP contains 9 independent mini-projects. Each question has its own
folder containing:
- `index.html` – page structure
- `style.css` – styling
- `script.js` – core JavaScript solution

## How to run
1. Extract the ZIP.
2. Open the folder for the question you want to test in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Interact with the page to test the required behavior.

No frameworks or external JavaScript libraries are used.

## Questions
1. Dynamic Product List Manager – event delegation, inline edit, outside-click save.
2. Live Character Counter – 100-character limit, warning colors, reset.
3. Multi-Step Form – three steps, validation, back/next, summary.
4. Theme Switcher – Light, Dark and Blue using `setAttribute()`.
5. Image Gallery – six images, modal preview, propagation control.
6. Real-Time Table Filter – case-insensitive input filtering and empty state.
7. Mouse Coordinates – 400×400 area, live coordinates, double-click dots.
8. Custom Dropdown – no `<select>`, outside click uses capture phase.
9. Form Submit Blocker – `preventDefault()`, inline live errors, success message.

## Notes
- Question 5 uses remote Picsum image URLs, so an internet connection is needed
  to load the sample gallery images.
- Question 7 reports `clientX` and `clientY` as requested; dots are positioned
  relative to the tracking box.
- Question 1 saves an inline edit when clicking outside the edited list item.
