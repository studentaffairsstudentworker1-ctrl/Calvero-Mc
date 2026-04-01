const panels = document.querySelectorAll(".panel");
const steps = document.querySelectorAll(".step-pill");

let currentStep = "avatar";

const panelOrder = [
  "avatar",
  "wardrobe",
  "studio",
  "story",
  "checkout"
];

function showPanel(panelName) {

  const currentIndex = panelOrder.indexOf(currentStep);
  const targetIndex = panelOrder.indexOf(panelName);

  if (targetIndex > currentIndex + 1) {
    return;
  }

  currentStep = panelName;

  panels.forEach(panel => {
    panel.classList.remove("active");
  });

  steps.forEach(step => {
    step.classList.remove("active");
  });

  const targetPanel = document.getElementById(`panel-${panelName}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
  }

  const step = document.querySelector(
    `.step-pill[onclick="showPanel('${panelName}')"]`
  );

  if (step) {
    step.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goNextStep() {

  const index = panelOrder.indexOf(currentStep);

  if (index < panelOrder.length - 1) {
    const next = panelOrder[index + 1];
    showPanel(next);
  }

}

function goBackStep() {

  const index = panelOrder.indexOf(currentStep);

  if (index > 0) {
    const prev = panelOrder[index - 1];
    showPanel(prev);
  }

}

document.addEventListener("DOMContentLoaded", () => {
  showPanel("avatar");
});
