
/* ==========================================
   BY MY SIDE - INTERACTIONS
   Created by Harsh
========================================== */

// PAGE NAVIGATION

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");
    const navItems = document.querySelectorAll(".nav-item");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    navItems.forEach(button => {
        button.classList.remove("active-nav");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    const selectedButton = document.querySelector(
        `.nav-item[data-page="${pageId}"]`
    );

    if (selectedButton) {
        selectedButton.classList.add("active-nav");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// CUTE INTERACTIVE BUTTONS

const funMessages = {

    hug: {
        emoji: "🤗",
        title: "Sending a virtual hug!",
        text: "A warm hug, a little peace and lots of good wishes."
    },

    chai: {
        emoji: "☕",
        title: "Chai time!",
        text: "Ek cup chai, thoda peace ani khup sari smiles!"
    },

    panda: {
        emoji: "🐼",
        title: "Panda mode activated!",
        text: "No tension. Just eat, sleep, smile and be happy!"
    },

    joke: {
        emoji: "😂",
        title: "Bad joke incoming!",
        text: "Why did the heart go to school? Because it wanted to learn how to love responsibly! 😂"
    }

};

function showFun(type) {

    const message = funMessages[type];

    if (!message) return;

    document.getElementById("funEmoji").textContent =
        message.emoji;

    document.getElementById("funTitle").textContent =
        message.title;

    document.getElementById("funText").textContent =
        message.text;

    createHeart();
}


// FLOATING HEART EFFECT

function createHeart() {

    const heartContainer = document.getElementById("hearts");

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const symbols = ["♡", "💗", "💕", "✨", "🌸"];

    heart.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9500);
}


// CREATE BACKGROUND STARS

function createStars() {

    const starContainer = document.getElementById("stars");

    for (let i = 0; i < 65; i++) {

        const star = document.createElement("div");

        star.className = "star";

        star.style.left = Math.random() * 100 + "%";

        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        starContainer.appendChild(star);
    }
}


// CONTINUOUS HEART ANIMATION

function startHeartAnimation() {

    setInterval(() => {
        createHeart();
    }, 1800);

}


// OPTIONAL AMBIENT SOUND
// No music is played by default.

function toggleMusic() {

    const button = document.getElementById("musicBtn");

    button.textContent =
        button.textContent === "♪" ? "♡" : "♪";

    button.title =
        "No audio is configured in this version.";
}


// INITIALIZE WEBSITE

document.addEventListener("DOMContentLoaded", () => {

    createStars();

    startHeartAnimation();

    showPage("welcome");

    console.log("By My Side website loaded successfully ❤️");

});
