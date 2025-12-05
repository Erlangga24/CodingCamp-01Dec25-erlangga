function getUserName() {
    let storedName = localStorage.getItem("username");

    if (!storedName || storedName.trim() === "") {
        storedName = prompt("Welcome to Our Website! Input your name:");

        if (!storedName || storedName.trim() === "") {
            storedName = "Guest";
        }

        localStorage.setItem("username", storedName);
    }

    return storedName;
}

const userName = getUserName();


const welcomeSpeech = document.getElementById("welcome-speech");
if (welcomeSpeech) {
    welcomeSpeech.innerHTML = `Hello, ${userName}! Welcome to Our Website!`;
}


const welcomeText = document.getElementById("welcomeText");
if (welcomeText) {
    welcomeText.innerText = `Hi ${userName}, Welcome To Website`;
}


function updateTime() {
    const timeBox = document.getElementById("currentTime");
    if (timeBox) {
        timeBox.innerText = new Date().toLocaleString();
    }
}
setInterval(updateTime, 1000);
updateTime();


const form = document.getElementById("messageForm");

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let nama = document.getElementById("nama").value.trim();
        let tanggal = document.getElementById("tanggal").value;
        let pesan = document.getElementById("pesan").value.trim();
        let jkInput = document.querySelector('input[name="jk"]:checked');

        if (!nama || !tanggal || !pesan || !jkInput) {
            alert("Semua data wajib diisi!");
            return;
        }

        
        document.getElementById("outNama").innerText = nama;
        document.getElementById("outTanggal").innerText = tanggal;
        document.getElementById("outJK").innerText = jkInput.value;
        document.getElementById("outPesan").innerText = pesan;

        alert("Pesan berhasil dikirim!");
        form.reset();
    });
}