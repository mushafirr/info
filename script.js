// simple click animation
const links = document.querySelectorAll(".links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        link.style.transform = "scale(0.95)";
        setTimeout(() => {
            link.style.transform = "scale(1)";
        }, 150);
    });
});
