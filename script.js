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

function typeLetter(){

    letterText.innerHTML = "";

    const lines = message.split("\n");

    let index = 0;

    function nextLine(){

        if(index < lines.length){

            letterText.innerHTML += lines[index] + "<br><br>";

            index++;

            setTimeout(nextLine,900);

        }else{

            lastBtn.style.display = "block";

        }

    }

    nextLine();

}

function createStars(){

    const stars = document.getElementById("stars");

    for(let i=0;i<120;i++){

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random()*100 + "vw";

        star.style.top = Math.random()*100 + "vh";

        star.style.animationDuration = (1+Math.random()*3) + "s";

        stars.appendChild(star);

    }

}

function createBalloons(){

    const colors = [
        "#ff4d6d",
        "#ffd93d",
        "#6bcB77",
        "#4d96ff",
        "#ff66c4"
    ];

    for(let i=0;i<20;i++){

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left = Math.random()*100 + "vw";

        balloon.style.background =
            colors[Math.floor(Math.random()*colors.length)];

        balloon.style.animationDuration =
            (8+Math.random()*6) + "s";

        balloon.style.animationDelay =
            Math.random()*5 + "s";

        document.body.appendChild(balloon);

    }

}
