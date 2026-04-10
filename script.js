const colors = [
    "#ff6b6b",
    "#feca57",
    "#48dbfb",
    "#1dd1a1",
    "#5f27cd",
    "#ff9ff3"
];

let i = 0;

setInterval(() => {
    document.body.style.background = colors[i];
    i = (i + 1) % colors.length;
}, 1000);

// click effect
document.querySelectorAll(".links a").forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(0.95)";
        setTimeout(() => {
            link.style.transform = "scale(1)";
        }, 150);
    });
});
