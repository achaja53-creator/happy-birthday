const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");
const title = document.getElementById("typingTitle");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const titleText = "🎂 Happy Birthday Heni Alviani 🤍";

const message = `Selamat ulang tahun, Heni.

Hari ini usiamu bertambah satu, tetapi semoga bukan hanya angka yang bertambah.

Semoga setiap langkahmu dipenuhi kebahagiaan, kesehatan, dan keberanian untuk mengejar semua impianmu.

Terima kasih sudah menjadi dirimu sendiri.

Website kecil ini mungkin sederhana.

Namun setiap barisnya dibuat dengan waktu, usaha, dan ketulusan.

Aku berharap hari ini menjadi salah satu hari terbaik dalam hidupmu.

Semoga semua doa baikmu menemukan jalannya.

Dan semoga kamu selalu memiliki alasan untuk tersenyum.

Selamat ulang tahun.

— Tuan Muda Arrow 🤍`;

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

// ==========================
// Membuat bintang
// ==========================

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

    let star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(1+Math.random()*3)+"s";

    stars.appendChild(star);

}
