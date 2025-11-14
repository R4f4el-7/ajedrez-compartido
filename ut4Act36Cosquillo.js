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
let posicion ={"a":1, "b":2, "c":3, "d":4, "e":5, "f":6, "g":7, "h":8};

let origen = prompt("Posicionde de origen(ej. e4, e5 ...): ");
let destino = prompt("Posicionde de destino(ej. e4, e5 ...): ");

columna_origen = posicion[origen.slice(0,1)];
fila_origen = parseInt(origen.slice(1,2));

columna_destino = posicion[destino.slice(0,1)];
fila_destino = parseInt(destino.slice(1,2));


moverPieza(tablero, [fila_origen, columna_origen], [fila_destino, columna_destino]);
mostrarTablero(tablero);