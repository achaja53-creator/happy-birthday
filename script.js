const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");
const title = document.getElementById("typingTitle");
const letter = document.getElementById("letter");
const letterText = document.getElementById("letterText");

const titleText = "🎂 Happy Birthday Heni Alviani 🤍";

const message = `Selamat ulang tahun, Heni.

Hari ini usiamu bertambah satu.

Semoga setiap langkahmu dipenuhi kebahagiaan, kesehatan, dan keberanian.

Terima kasih sudah menjadi dirimu sendiri.

Website kecil ini mungkin sederhana.

Namun setiap barisnya dibuat dengan waktu, usaha, dan ketulusan.

Semoga semua doa baikmu terkabul.

Dan semoga kamu selalu memiliki alasan untuk tersenyum.

Selamat ulang tahun.

— Tuan Muda Arrow 🤍`;

openBtn.onclick = function(){

    launchConfetti();

    welcome.style.display = "none";
    main.style.display = "flex";
    main.classList.add("fade");

    typeTitle();

};

function typeTitle(){

    let i = 0;

    title.innerHTML = "";

    let typing = setInterval(function(){

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

    letterText.innerHTML = "";

    const lines = message.split("\n");

    let index = 0;

    function nextLine(){

        if(index < lines.length){

            letterText.innerHTML += lines[index] + "<br><br>";

            index++;

            setTimeout(nextLine,800);

        }else{

            setTimeout(launchFireworks,1000);
        }

    }

    nextLine();

}

/* =========================
   BINTANG
========================= */

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

    let star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";
    star.style.top=Math.random()*100+"vh";

    star.style.anima cotionDuration=(1+Math.random()*3)+"s";

    stars.appendChild(star);

}

/* =========================
   BALON
========================= */

const colors=[
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

/* =========================
   CONFETTI
========================= */

function launchConfetti(){

    for(let i=0;i<120;i++){

        let c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        c.style.animationDuration=
        (2+Math.random()*3)+"s";

        document.body.appendChild(c);

        setTimeout(function(){

            c.remove();

        },5000);

    }

}

/* ==========================
        FIREWORK
========================== */

function launchFireworks(){

    const colors=[
    "#ff4d6d",
    "#ffd93d",
    "#6bcB77",
    "#4d96ff",
    "#ff66c4",
    "#ffffff"
    ];

    for(let i=0;i<18;i++){

        setTimeout(()=>{

            let fire=document.createElement("div");

            fire.className="firework";

            fire.style.left=Math.random()*100+"vw";
            fire.style.top=Math.random()*60+"vh";

            fire.style.background=
            colors[Math.floor(Math.random()*colors.length)];

            document.body.appendChild(fire);

            setTimeout(()=>{

                fire.remove();

            },1400);

        },i*250);

    }

}
