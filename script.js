const opening = document.getElementById("opening");
const scene1 = document.getElementById("scene1");
const letterScene = document.getElementById("letterScene");
const ending = document.getElementById("ending");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");

const letterText = document.getElementById("letterText");

const endingTitle = document.getElementById("endingTitle");
const endingText = document.getElementById("endingText");

const message = [

"Selamat ulang tahun, Heni.",

"Hari ini usiamu bertambah satu.",

"Semoga setiap langkahmu dipenuhi kebahagiaan, kesehatan, dan keberanian.",

"Terima kasih sudah menjadi dirimu sendiri.",

"Mungkin hadiah ini sederhana.",

"Tetapi setiap barisnya dibuat dengan waktu, usaha, dan ketulusan.",

"Semoga semua doa baikmu menemukan jalannya.",

"Selamat ulang tahun. 🤍",

"— Tuan Muda Arrow"

];

startBtn.onclick = function(){

    document.title = "🎂 Happy Birthday Heni 🤍";

    opening.style.display = "none";

    scene1.style.display = "flex";

    scene1.classList.add("fade");

    createStars();

    intro();

};
