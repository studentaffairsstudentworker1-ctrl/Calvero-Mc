// Avatar.js - Calvero Mc

// Panels
const avatarPanel = document.getElementById("panel-avatar");

// Options
const skinOptions = ["#f9d5b3", "#e0ac69", "#c68642", "#8d5524"];
const hairOptions = ["#000000", "#3b2f2f", "#6b4423", "#f0c27b"];
const eyeOptions = ["#3a3a3a", "#1e90ff", "#228b22", "#8b4513"];

let avatarData = {
    skin: skinOptions[0],
    hair: hairOptions[0],
    eyes: eyeOptions[0],
};

// Three.js scene
let scene, camera, renderer, avatarMesh;

function initAvatarScene() {
    const container = document.createElement("div");
    container.id = "avatar-scene";
    avatarPanel.appendChild(container);

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    camera = new THREE.PerspectiveCamera(35, 400 / 400, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(400, 400);
    container.appendChild(renderer.domElement);

    // Simple avatar model (sphere for head)
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: avatarData.skin });
    avatarMesh = new THREE.Mesh(geometry, material);
    scene.add(avatarMesh);

    // Lighting
    const light = new THREE.PointLight(0xffd700, 1.2); // luxury gold
    light.position.set(5, 5, 5);
    scene.add(light);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    avatarMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

// Change avatar features
function changeSkin(color) {
    avatarData.skin = color;
    avatarMesh.material.color.set(color);
}

function changeHair(color) {
    avatarData.hair = color;
    // For demo, hair not modeled yet
    console.log("Hair color set to", color);
}

function changeEyes(color) {
    avatarData.eyes = color;
    console.log("Eye color set to", color);
}

// UI for avatar options
function buildAvatarOptions() {
    const optionsDiv = document.createElement("div");
    optionsDiv.classList.add("avatar-options");

    // Skin
    const skinLabel = document.createElement("p");
    skinLabel.innerText = "Skin Tone:";
    optionsDiv.appendChild(skinLabel);

    skinOptions.forEach(color => {
        const btn = document.createElement("button");
        btn.style.backgroundColor = color;
        btn.classList.add("option-btn");
        btn.onclick = () => changeSkin(color);
        optionsDiv.appendChild(btn);
    });

    // Hair
    const hairLabel = document.createElement("p");
    hairLabel.innerText = "Hair Color:";
    optionsDiv.appendChild(hairLabel);

    hairOptions.forEach(color => {
        const btn = document.createElement("button");
        btn.style.backgroundColor = color;
        btn.classList.add("option-btn");
        btn.onclick = () => changeHair(color);
        optionsDiv.appendChild(btn);
    });

    // Eyes
    const eyeLabel = document.createElement("p");
    eyeLabel.innerText = "Eye Color:";
    optionsDiv.appendChild(eyeLabel);

    eyeOptions.forEach(color => {
        const btn = document.createElement("button");
        btn.style.backgroundColor = color;
        btn.classList.add("option-btn");
        btn.onclick = () => changeEyes(color);
        optionsDiv.appendChild(btn);
    });

    // Next button
    const nextBtn = document.createElement("button");
    nextBtn.innerText = "Next → Wardrobe";
    nextBtn.classList.add("next-btn");
    nextBtn.onclick = () => goNextStep();
    optionsDiv.appendChild(nextBtn);

    avatarPanel.appendChild(optionsDiv);
}

// Init
document.addEventListener("DOMContentLoaded", () => {
    initAvatarScene();
    buildAvatarOptions();
});
