// Menampilkan Hi, Name di banner Home
document.addEventListener("DOMContentLoaded", () => {
    const name = prompt("Masukkan nama kamu:");
    const welcomeText = document.getElementById("welcomeText");

    if (name && welcomeText) {
        welcomeText.textContent = "Hi, " + name;
    }
});

// Form Message Us
const form = document.getElementById("messageForm");
const resultBox = document.getElementById("resultBox");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const msg = document.getElementById("msgInput").value;

    resultBox.innerHTML = `
        <h3>Message Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${msg}</p>
    `;
});