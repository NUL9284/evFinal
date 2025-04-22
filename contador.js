        // Función para obtener la fecha del próximo lunes a las 5 a.m.
        function getNextMondayAtFiveAM() {
            const now = new Date();
            const nextMonday = new Date(now);

            // Establecemos el día de la semana para el próximo lunes (0: Domingo, 1: Lunes, ...)
            const dayOfWeek = nextMonday.getDay();
            const daysUntilNextMonday = (7 - dayOfWeek + 1) % 7; // Si hoy es lunes, se suman 7 días.

            nextMonday.setDate(now.getDate() + daysUntilNextMonday); // Establece la fecha del próximo lunes
            nextMonday.setHours(5, 0, 0, 0); // Establece la hora a las 5 AM

            return nextMonday;
        }

        // Función para actualizar la cuenta regresiva
        function updateCountdown() {
            const countdownDate = getNextMondayAtFiveAM();
            const now = new Date();
            const timeRemaining = countdownDate - now;

            if (timeRemaining <= 0) {
                document.getElementById("contador").innerHTML = "¡¡¡EL EVENTO FINAL HA COMENZADO!!!";
                document.getElementById("contador").style.display="block";
                document.getElementById("contador").style.display="none";
                return;
            }

            // Calculamos los días, horas, minutos y segundos restantes
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById("contador").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // Actualizamos la cuenta regresiva cada segundo
            setTimeout(updateCountdown, 1000);
        }

        // Iniciar la cuenta regresiva
        updateCountdown();