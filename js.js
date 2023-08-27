function updateCountdown() {
    var start_date = new Date(new Date().getFullYear(), 10, 13);
    var current_date = new Date();
    var delta = start_date - current_date;
    var days = Math.floor(delta / (1000 * 60 * 60 * 24));
    var hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((delta % (1000 * 60)) / 1000);

    if (days > 0) {
        document.getElementById("countdown").innerHTML = "Faltan " + days + " días, " + hours + " horas, " + minutes + " minutos y " + seconds + " segundos para el 13 de noviembre.";
    } else {
        document.getElementById("countdown").innerHTML = "Ya pasó el 13 de noviembre.";
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);