// app.js - Main Application Script

// Keep track of active panel
let activePanel = "avatar";

// Show a specific panel
function showPanel(panelName) {
  // Panels
  const panels = document.querySelectorAll(".panel");
  panels.forEach(panel => panel.classList.remove("active"));

  // Set the selected panel active
  const targetPanel = document.getElementById(`panel-${panelName}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
    activePanel = panelName;
  }

  // Highlight the nav step
  const steps = document.querySelectorAll(".step-pill");
  steps.forEach(step => step.classList.remove("active"));
  const activeStep = [...steps].find(step => step.innerText.toLowerCase() === panelName);
  if (activeStep) activeStep.classList.add("active");
}

// Optional: Keyboard shortcuts for navigation
document.addEventListener("keydown", (e) => {
  const panelOrder = ["avatar", "wardrobe", "studio", "story", "checkout"];
  let index = panelOrder.indexOf(activePanel);

  if (e.key === "ArrowRight") {
    index = (index + 1) % panelOrder.length;
    showPanel(panelOrder[index]);
  } else if (e.key === "ArrowLeft") {
    index = (index - 1 + panelOrder.length) % panelOrder.length;
    showPanel(panelOrder[index]);
  }
});

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  console.log("Calvero Mc app initialized");

  // Initialize Studio (if not already initialized in studio.js)
  if (typeof buildStudio === "function") buildStudio();

  // Initialize Avatar / Wardrobe if needed
  if (typeof buildAvatar === "function") buildAvatar();
  if (typeof buildWardrobe === "function") buildWardrobe();

  // Initialize other global components
});
