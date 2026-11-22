// Q7 – Track mouse coordinates and place dots on double-click.
const trackingBox = document.querySelector("#tracking-box");
const coordinates = document.querySelector("#coordinates");

trackingBox.addEventListener("mousemove", event => {
  coordinates.textContent = `clientX: ${event.clientX}, clientY: ${event.clientY}`;
});

trackingBox.addEventListener("dblclick", event => {
  const boxBounds = trackingBox.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "red-dot";

  // Convert viewport coordinates to coordinates relative to the box.
  dot.style.left = `${event.clientX - boxBounds.left}px`;
  dot.style.top = `${event.clientY - boxBounds.top}px`;
  trackingBox.appendChild(dot);
});
