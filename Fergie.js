document.addEventListener("DOMContentLoaded", () => {
    const bgContainer = document.getElementById("gardenBg");

    function createSparkle() {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        const size = Math.random() * 8 + 4;
        const startX = Math.random() * 260 + (window.innerWidth / 2 - 130);
        const startY = (window.innerHeight / 2) + 100 - Math.random() * 100;

        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${startX}px`;
        sparkle.style.top = `${startY}px`;

        sparkle.style.animationDuration = `${Math.random() * 2 + 2.5}s`;

        bgContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 4000);
    }

    setInterval(createSparkle, 200);
});
