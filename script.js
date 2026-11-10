const startButton = document.getElementById("startButton");

const welcomeScreen = document.getElementById("welcomeScreen");
const cakeScreen = document.getElementById("cakeScreen");

startButton.addEventListener("click", function() {

    welcomeScreen.classList.add("hidden");

    cakeScreen.classList.remove("hidden");

});

const cake = document.querySelector(".cake");
const candles = document.querySelectorAll(".candle");
const cakeMessage = document.getElementById("cakeMessage");

const letterScreen = document.getElementById("letterScreen");
const confettiButton = document.getElementById("confettiButton");

let isBlowing = false;


// Confetti function
function celebrate() {

    confetti({
        particleCount: 180,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#f4b8c6", "#a6bd99", "#fff0a8", "#d77f9e"]
    });

}


// Cake countdown
cake.addEventListener("click", async function() {

    if (isBlowing) return;

    isBlowing = true;

    cakeMessage.textContent = "blow out the candles in...";

    await new Promise(resolve => setTimeout(resolve, 1500));

    for (let i = 3; i >= 1; i--) {

        cakeMessage.textContent = i + "...";

        await new Promise(resolve => setTimeout(resolve, 1000));

    }

    // Extinguish candles
    candles.forEach(candle => {
        candle.classList.add("blown-out");
    });

    cakeMessage.textContent = "HAPPY BIRTHDAY!!! ♡";

    // Automatic confetti!
    celebrate();

    // Wait for the celebration before showing the letter
    await new Promise(resolve => setTimeout(resolve, 3500));

    cakeScreen.classList.add("hidden");
    letterScreen.classList.remove("hidden");

});


// Confetti AGAIN button
confettiButton.addEventListener("click", function() {

    celebrate();

});

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", function() {
    envelope.classList.add("open");
});