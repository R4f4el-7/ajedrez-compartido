//Crea un array con varios jugadores (nombre, ELO, victorias, derrotas).
const jugadores = [
    { nombre: "Carlos", elo: 1500, victorias: 25, derrotas: 10 },
    { nombre: "Lucía", elo: 1620, victorias: 30, derrotas: 8 },
    { nombre: "Miguel", elo: 1400, victorias: 18, derrotas: 15 },
    { nombre: "Sara", elo: 1700, victorias: 35, derrotas: 5 },
    { nombre: "Andrés", elo: 1550, victorias: 22, derrotas: 12 }
];
//Calcula el ELO medio y la tasa de victorias.
const medioELO = jugadores.reduce((acc, j) => acc + j.elo, 0) / jugadores.length;
console.log("Elo medio: "+medioELO);

const victoriasTotales = jugadores.reduce((acc, j) => acc + j.victorias, 0);
const derrotasTotales = jugadores.reduce((acc, j) => acc + j.derrotas, 0);
let tasaVictoria = (victoriasTotales / (victoriasTotales+derrotasTotales)) * 100;

console.log("Victorias totales: "+victoriasTotales);
console.log("Derrotas totales: "+derrotasTotales);
console.log("Tasa de victorias: "+Math.floor(tasaVictoria)+"%");

//Muestra el top 3 ordenado por rendimiento.
const jugadoresTop3 = jugadores.sort((a, b) => b.victorias - a.victorias)
for (let j = 0; j < 3; j++) {
    console.log(jugadoresTop3[j]);
}
//Muestra un resumen en consola con reduce() y filter().
const victoriasMayor1500 = jugadores.filter(j => j.elo > 1500).reduce((acc,j) => acc + j.victorias, 0);
const derrotasMayor1500 = jugadores.filter(j => j.elo > 1500).reduce((acc,j) => acc + j.derrotas, 0);
let tasaVictoriaMayor1500 = ((victoriasMayor1500 * 100) / (victoriasMayor1500+derrotasMayor1500));

console.log("Estadistica de los jugadores con elo mayor a 1500")
console.log("Victorias totales: "+victoriasMayor1500);
console.log("Derrotas totales: "+derrotasMayor1500);
console.log("Tasa de victorias: "+Math.floor(tasaVictoriaMayor1500)+"%");



