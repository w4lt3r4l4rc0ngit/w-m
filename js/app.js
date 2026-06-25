const weddingDate = new Date("July 11, 2026 17:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

    document.getElementById("timer").innerHTML =
        `${days} días ${hours} horas ${minutes} minutos`;
}, 1000);


document.getElementById("rsvpForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let asistencia = document.getElementById("asistencia").value;

    document.getElementById("mensaje").innerHTML =
        `Gracias ${nombre}, tu respuesta fue registrada: ${asistencia}`;
});