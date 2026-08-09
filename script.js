
const startScreen = document.getElementById("startScreen");
const birthdayScreen = document.getElementById("birthdayScreen");

const openBtn = document.getElementById("openBtn");
const gift = document.getElementById("gift");

const wishBtn = document.getElementById("wishBtn");
const secretMessage = document.getElementById("secretMessage");


// Open Gift

function openGift() {

    startScreen.classList.add("hidden");

    birthdayScreen.classList.remove("hidden");

    createConfetti();
}


// Both button and gift work

openBtn.addEventListener("click", openGift);

gift.addEventListener("click", openGift);


// Make a Wish

wishBtn.addEventListener("click", function () {

    secretMessage.classList.remove("hidden");

    wishBtn.innerText = "Wish Made! ✨";

    wishBtn.disabled = true;

    createConfetti();

});


// Confetti

function createConfetti() {

    const symbols = ["🎉", "✨", "💕", "🎈", "💗", "🌸"];

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.innerText =
            symbols[Math.floor(Math.random() * symbols.length)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize =
            Math.random() * 15 + 15 + "px";

        confetti.style.zIndex = "100";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        const duration =
            Math.random() * 3 + 3;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );


        setTimeout(() => {
            confetti.remove();
        }, duration * 1000);

    }
}


