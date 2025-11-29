document.addEventListener("DOMContentLoaded", () => {

    const tablero = document.getElementById("tablero");

    // Eventos del tablero
    tablero.addEventListener("mouseover", resaltarCasilla);
    tablero.addEventListener("mouseout", quitarResalte);
    tablero.addEventListener("click", seleccionarCasilla);

    // Resaltar casilla al pasar el mouse
    function resaltarCasilla(e) {
        if (e.target.classList.contains("casilla")) {
            e.target.style.backgroundColor = "yellow";
        }
    }

    // Quitar resaltado al salir del mouse
    function quitarResalte(e) {
        if (e.target.classList.contains("casilla")) {
            e.target.style.backgroundColor = "";
        }
    }

    // Seleccionar casilla al hacer clic
    function seleccionarCasilla(e) {
        if (e.target.classList.contains("casilla")) {
            console.log(`Casilla seleccionada: ${e.target.dataset.pos}`);
        }
    }

});
