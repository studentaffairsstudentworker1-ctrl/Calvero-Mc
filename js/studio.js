// studio.js - Calvero Mc

const studioPanel = document.getElementById("panel-studio");

// Create Studio Interface
function buildStudio() {
  // Container
  const container = document.createElement("div");
  container.classList.add("studio-container");

  // Upload Image
  const uploadLabel = document.createElement("label");
  uploadLabel.innerText = "Upload your design:";
  uploadLabel.classList.add("studio-label");
  const uploadInput = document.createElement("input");
  uploadInput.type = "file";
  uploadInput.accept = "image/*";
  uploadInput.onchange = previewDesign;

  container.appendChild(uploadLabel);
  container.appendChild(uploadInput);

  // Add Text
  const textLabel = document.createElement("label");
  textLabel.innerText = "Add custom text:";
  textLabel.classList.add("studio-label");
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.placeholder = "Write something here...";
  textInput.oninput = updateTextPreview;

  container.appendChild(textLabel);
  container.appendChild(textInput);

  // Color Picker
  const colorLabel = document.createElement("label");
  colorLabel.innerText = "Choose color:";
  colorLabel.classList.add("studio-label");
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.value = "#ffd700"; // gold default
  colorInput.oninput = updateColorPreview;

  container.appendChild(colorLabel);
  container.appendChild(colorInput);

  // Preview Box
  const preview = document.createElement("div");
  preview.id = "studio-preview";
  preview.classList.add("studio-preview");
  preview.innerHTML = "<p>Your design preview will appear here</p>";

  container.appendChild(preview);

  studioPanel.appendChild(container);
}

// Preview Image Upload
function previewDesign(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("studio-preview");
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.style.backgroundImage = `url(${e.target.result})`;
      preview.style.backgroundSize = "contain";
      preview.style.backgroundRepeat = "no-repeat";
      preview.style.backgroundPosition = "center";
      preview.innerHTML = ""; // remove text placeholder
    };
    reader.readAsDataURL(file);
  }
}

// Update Text Overlay
function updateTextPreview(event) {
  const preview = document.getElementById("studio-preview");
  const text = event.target.value;
  preview.innerHTML = `<span class="studio-text">${text}</span>`;
}

// Update Background Color
function updateColorPreview(event) {
  const preview = document.getElementById("studio-preview");
  preview.style.backgroundColor = event.target.value;
}

// Initialize Studio
document.addEventListener("DOMContentLoaded", buildStudio);
