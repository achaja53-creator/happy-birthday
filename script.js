const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");

const title = document.getElementById("typingTitle");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const lastBtn = document.getElementById("lastBtn");

const ending = document.getElementById("ending");
const endingTitle = document.getElementById("endingTitle");
const endingText = document.getElementById("endingText");

const titleText = "🎂 Happy Birthday Heni Alviani 🤍";

const message = `Selamat ulang tahun, Heni.

Hari ini usiamu bertambah satu.

Semoga setiap langkahmu dipenuhi kebahagiaan, kesehatan, dan keberanian.

Terima kasih sudah menjadi dirimu sendiri.

Mungkin hadiah ini sederhana.

Tetapi setiap barisnya dibuat dengan waktu, usaha, dan ketulusan.

Semoga semua doa baikmu menemukan jalannya.

Tetaplah menjadi pribadi yang baik, kuat, dan selalu tersenyum.

Selamat ulang tahun.

— Tuan Muda Arrow 🤍`;

openBtn.onclick = function(){

    welcome.style.display = "none";

    main.style.display = "flex";

    main.classList.add("fade");

    createStars();

    createBalloons();

    typeTitle();

};

function typeTitle(){

    let i = 0;

    title.innerHTML = "";

    const typing = setInterval(function(){

        title.innerHTML += titleText.charAt(i);

        i++;

        if(i >= titleText.length){

            clearInterval(typing);

            letter.style.display = "block";

            typeLetter();

        }

    },80);

}
