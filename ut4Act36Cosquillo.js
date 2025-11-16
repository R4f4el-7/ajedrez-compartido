function mostrarTablero(tablero) {
    for (let i = 0; i < tablero.length; i++) {
        console.log(tablero[i].join(" "));
    }
}
//Función para mover piezas (sin validar reglas aún)
function moverPieza(tablero, origen, destino) {
    const [filaOrigen, colOrigen] = origen;
    const [filaDestino, colDestino] = destino;

    const pieza = tablero[filaOrigen][colOrigen];
    tablero[filaDestino][colDestino] = pieza;
    tablero[filaOrigen][colOrigen] = ".";
}
//Inicialice el tablero con las piezas en sus posiciones iniciales.
const tablero = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];
//Muestre el tablero en consola.
mostrarTablero(tablero);
//Permita al usuario (por prompt()) elegir una pieza y moverla a otra posición
let posicion ={"a":1, "b":2, "c":3, "d":4, "e":5, "f":6, "g":7, "h":8}

const posicionOrigen = prompt("Ingrese la posición de la pieza a mover (por ejemplo: e2):");
const posicionDestino = prompt("Ingrese la posición de destino (por ejemplo: e4):");

const origen = [];

moverPieza(tablero, [6, 4], [4, 4]);
mostrarTablero(tablero);