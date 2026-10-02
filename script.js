const welcome = document.getElementById("welcome");
const card = document.getElementById("card");
const surprise = document.getElementById("surprise");

const openBtn = document.getElementById("openBtn");
const backBtn = document.getElementById("backBtn");
const restartBtn = document.getElementById("restartBtn");


/* =========================
   OPEN CARD
========================= */

openBtn.addEventListener("click", function () {

    // Open the card
    welcome.classList.add("hidden");
    card.classList.remove("hidden");

    // Start the music
    const music = document.getElementById("bgMusic");

    music.volume = 0.5;

    music.play().catch(function (error) {
        console.log("Music could not start:", error);
    });

    // Confetti
    createConfetti();

});


/* =========================
   CONTINUE
========================= */

backBtn.addEventListener("click", function () {

    card.classList.add("hidden");

    surprise.classList.remove("hidden");

    createConfetti();

});


/* =========================
   READ AGAIN
========================= */

restartBtn.addEventListener("click", function () {

    surprise.classList.add("hidden");

    welcome.classList.remove("hidden");

});


/* =========================
   CONFETTI
========================= */

function createConfetti() {

    const symbols = [
        "🌸",
        "✨",
        "💖",
        "🌷",
        "⭐",
        "💐",
        "❤️"
    ];

    for (let i = 0; i < 30; i++) {

        const confetti = document.createElement("div");

        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 15 + 15 + "px";

        confetti.style.zIndex = "100";

        confetti.style.pointerEvents = "none";


        const duration =
            Math.random() * 3 + 3;


        confetti.animate(
            [
                {
                    transform:
                        "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],

            {
                duration: duration * 1000,
                easing: "linear"
            }
        );


        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, duration * 1000);

    }
}

const pictureBtn = document.getElementById("pictureBtn");

pictureBtn.addEventListener("click", function () {

    // Start the music
    const music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 0.5;

        music.play().catch(function(error) {
            console.log("Music could not start:", error);
        });
    }

    // Fade out front page
    frontPage.classList.add("exit");

    setTimeout(function () {

        frontPage.style.display = "none";

        welcome.classList.remove("hidden");

        createConfetti();

    }, 800);

});