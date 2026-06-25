const weddingDate = new Date("July 11, 2026 00:00:00").getTime();

const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${days} días ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "¡Llegó el gran día!";
    }
}, 1000);


// carrusel
let slides = document.querySelectorAll(".carousel img");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 3000);