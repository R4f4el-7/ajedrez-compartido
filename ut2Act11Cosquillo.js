function iniciarPartida(){
    let turnoActual = 1;
    const turnosMaximo = 10;
    let cont_movimiento = 0;

    while (turnoActual <= 10) {
        let turno = "";

        if(turnoActual % 2 === 0){
            turno = "Negras"
        }else{
            turno = "Blancas";
        }

        if(esTurnoDeBlancas(turno)){
            console.log("Turno "+turnoActual+" → Mueven las ♙ blancas");
        }else{
            console.log("Turno "+turnoActual+" → Mueven las ♟ negras");
            console.log("las negras hacen un movimiento válido");
        }

        if(turnoActual === 10){
            console.log("Se alcanzó el número máximo de turnos. Partida finalizada.");
        }
        if(turnoActual % 3 === 0){
            console.log("Recordatorio: revisa el reloj de juego.")
        }

        (turnoActual % 2 === 0) ? cont_movimiento++: console.log("Cantidad de movimientos validos: "+cont_movimiento);

        turnoActual += 1;
    }
}
function esTurnoDeBlancas(turno){
    return (turno === "Blancas");
}
iniciarPartida();