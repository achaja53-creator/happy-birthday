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

    launchConfetti();
    
    welcome.style.display = "none";
    main.style.display = "flex";
    main.classList.add("fade");

    typeTitle();

};

function typeLetter(){

    const lines = message.split("\n");

    let index = 0;

    function showLine(){

        if(index < lines.length){

            letterText.innerHTML += lines[index] + "<br><br>";

            index++;

            setTimeout(showLine,1200);

        }

    }

    showLine();

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

// =======================
// BALON
// =======================

const colors = [
"#ff4d6d",
"#ffd93d",
"#6bcB77",
"#4d96ff",
"#ff66c4"
];

for(let i=0;i<20;i++){

    let balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.background=
    colors[Math.floor(Math.random()*colors.length)];

    balloon.style.animationDuration=
    (8+Math.random()*6)+"s";

    balloon.style.animationDelay=
    Math.random()*5+"s";

    document.body.appendChild(balloon);

}

// ===========================
// CONFETTI
// ===========================

function launchConfetti(){

    const colors=[
        "#ff4d6d",
        "#ffd93d",
        "#6bcB77",
        "#4d96ff",
        "#ff66c4",
        "#ffffff"
    ];

    for(let i=0;i<150;i++){

        let c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        c.style.animationDuration=
        (2+Math.random()*3)+"s";

        document.body.appendChild(c);

        setTimeout(()=>{
            c.remove();
        },5000);

    }

}
