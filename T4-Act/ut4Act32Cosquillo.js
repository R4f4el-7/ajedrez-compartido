//Crea un módulo movimientos.js con una función moverPieza(origen, destino).
import {moverPieza}  from "./movimientos.js";
//Crea otro módulo historial.js que exporte una función registrarJugada(jugada).
import {mostrarHistorial, registrarJugada} from "./historial.js";
//En juego.js, importa ambos y combina su uso:
// Llama a moverPieza() y registra la jugada
moverPieza("e2", "e4");
registrarJugada("e4");

moverPieza("e7", "e5");
registrarJugada("e5");

moverPieza("g1", "f3");
registrarJugada("Cf3");
//Muestra el historial final en consola
mostrarHistorial();
