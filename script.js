const colors = [
    "#000000",
    "#1a1a00",
    "#111100",
    "#222200"
];

let i = 0;

setInterval(() => {
    document.body.style.background = colors[i];
    i = (i + 1) % colors.length;
}, 3000);

// click animation
document.querySelectorAll(".links a").forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(0.95)";
        setTimeout(() => {
            link.style.transform = "scale(1)";
        }, 150);
    });
});