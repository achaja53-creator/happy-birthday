const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");
const title = document.getElementById("typingTitle");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const titleText = "🎂 Happy Birthday Heni Alviani 🤍";

const message = `Selamat ulang tahun, Heni.

Semoga setiap langkahmu dipenuhi kebahagiaan, kesehatan, dan keberanian untuk mengejar semua impianmu.

Terima kasih sudah menjadi dirimu sendiri.

Website kecil ini mungkin sederhana, tetapi dibuat dengan tulus khusus untukmu.

Semoga hari ini menjadi awal dari banyak hal indah dalam hidupmu.

Selamat ulang tahun.

— Arrow 🤍`;

openBtn.onclick = () => {

    welcome.style.display = "none";
    main.style.display = "flex";
    main.classList.add("fade");

    typeTitle();

};

function typeTitle(){

    let i = 0;

    let typing = setInterval(()=>{

        title.innerHTML += titleText.charAt(i);

        i++;

        if(i >= titleText.length){

            clearInterval(typing);

            letter.style.display = "block";

            typeLetter();

        }

    },80);

}

function typeLetter(){

    let i = 0;

    let typing = setInterval(()=>{

        letterText.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(typing);

        }

    },30);

}
