// =========================
// ELEMENT
// =========================

const opening = document.getElementById("opening");
const intro = document.getElementById("intro");
const letterPage = document.getElementById("letterPage");
const ending = document.getElementById("ending");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const introTitle = document.getElementById("introTitle");
const introText = document.getElementById("introText");

const letterText = document.getElementById("letterText");

const endingTitle = document.getElementById("endingTitle");
const endingText = document.getElementById("endingText");

const music = document.getElementById("music");

// =========================
// ISI SURAT
// =========================

const letterLines = [

"Selamat ulang tahun, Heni.",

"Hari ini usiamu bertambah satu tahun.",

"Semoga setiap langkahmu dipenuhi kebahagiaan, kesehatan, dan orang-orang yang selalu menyayangimu.",

"Website kecil ini mungkin sederhana.",

"Tetapi setiap barisnya dibuat dengan waktu, usaha, dan ketulusan.",

"Semoga semua doa baikmu menemukan jalannya.",

"Teruslah tersenyum, tetap menjadi dirimu sendiri, dan jangan berhenti mengejar impianmu.",

"🎂 Happy Birthday, Heni Alviani 🤍",

"— Tuan Muda Arrow"

];

// =========================
// MULAI
// =========================

startBtn.onclick = function(){

    document.title = "🎂 Happy Birthday Heni 🤍";

    opening.classList.remove("active");

    intro.classList.add("active");

    createStars();

    createBalloons();

    typeIntro();

    if(music){
        music.play().catch(()=>{});
    }

};
