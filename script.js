function showMessage() {
    alert("Happy Valentine's Day, Bestie! You're stuck with me forever 😈");
}

// Heart animation
document.addEventListener('DOMContentLoaded', () => {
    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.getElementById('heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Optional: Play background music
let music = new Audio('valentine.mp3');
document.body.addEventListener('click', () => {
    music.play();
}, { once: true });
