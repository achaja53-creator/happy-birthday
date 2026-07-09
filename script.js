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

// =========================
// INTRO
// =========================

function typeIntro(){

    const title = "Untuk Heni Alviani 🤍";

    const text =
    "Ada sebuah hadiah kecil yang ingin kusampaikan kepadamu.";

    introTitle.innerHTML = "";
    introText.innerHTML = "";

    let i = 0;

    const titleTyping = setInterval(function(){

        introTitle.innerHTML += title.charAt(i);

        i++;

        if(i >= title.length){

            clearInterval(titleTyping);

            setTimeout(typeIntroText,600);

        }

    },80);

    function typeIntroText(){

        let j = 0;

        const textTyping = setInterval(function(){

            introText.innerHTML += text.charAt(j);

            j++;

            if(j >= text.length){

                clearInterval(textTyping);

                setTimeout(showLetterPage,2000);

            }

        },40);

    }

}

// =========================
// PINDAH KE SURAT
// =========================

function showLetterPage(){

    intro.classList.remove("active");

    letterPage.classList.add("active");

    typeLetter();

}

// =========================
// EFEK MENGETIK SURAT
// =========================

function typeLetter(){

    letterText.innerHTML = "";

    let index = 0;

    function nextLine(){

        if(index >= letterLines.length){

            setTimeout(showEnding,2500);

            return;

        }

        letterText.innerHTML +=
        letterLines[index] + "<br><br>";

        index++;

        setTimeout(nextLine,1200);

    }

    nextLine();

}

 // =========================
// ENDING
// =========================

function showEnding(){

    letterPage.classList.remove("active");
    ending.classList.add("active");

    const scenes = [

        {
            title:"Terima kasih...",
            text:"Karena kamu telah hadir di dunia ini."
        },

        {
            title:"",
            text:"Semoga setiap langkahmu dipenuhi kebahagiaan, kesehatan, dan orang-orang yang selalu menyayangimu."
        },

        {
            title:"🎂 Happy Birthday",
            text:"Heni Alviani 🤍"
        },

        {
            title:"",
            text:"Mungkin hadiah ini sederhana.\n\nTetapi dibuat dengan waktu, usaha, dan ketulusan.\n\nSemoga kamu selalu memiliki alasan untuk tersenyum.\n\n— Tuan Muda Arrow 🤍"
        }

    ];

    let i = 0;

    function nextScene(){

        if(i >= scenes.length){

            restartBtn.style.display = "inline-block";
            return;

        }

        endingTitle.innerHTML = scenes[i].title;
        endingText.innerHTML = scenes[i].text.replace(/\n/g,"<br>");

        i++;

        setTimeout(nextScene,3500);

    }

    nextScene();

}

// =========================
// BINTANG
// =========================

function createStars(){

    const stars = document.getElementById("stars");

    stars.innerHTML = "";

    for(let i=0;i<120;i++){

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random()*100 + "vw";
        star.style.top = Math.random()*100 + "vh";

        star.style.animationDuration =
        (1 + Math.random()*3) + "s";

        stars.appendChild(star);

    }

}

// =========================
// BALON
// =========================

function createBalloons(){

    const colors = [
        "#ff4d6d",
        "#ffd93d",
        "#6bcB77",
        "#4d96ff",
        "#ff66c4"
    ];

    for(let i=0;i<18;i++){

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left = Math.random()*100 + "vw";

        balloon.style.background =
        colors[Math.floor(Math.random()*colors.length)];

        balloon.style.animationDuration =
        (8 + Math.random()*6) + "s";

        balloon.style.animationDelay =
        Math.random()*5 + "s";

        document.body.appendChild(balloon);

    }

}

// =========================
// PUTAR LAGI
// =========================

restartBtn.onclick = function(){

    location.reload();

};
