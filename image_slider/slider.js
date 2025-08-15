const slides = document.querySelectorAll("#slider img");
let current = 0;

function showSlide(index) {
    slides.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) img.classList.add("active");
    });
}

document.getElementById("next").addEventListener("click", () => {
    current = (current + 1) % slides.length;
    showSlide(current);
});

document.getElementById("prev").addEventListener("click", () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
});

// Auto slide every 3 seconds
setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
}, 3000);
