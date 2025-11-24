/*Rafael cosquillo 04/11/25
* Simular el tiempo de cada jugador en hacer sus jugadas*/
const prompt=require("prompt-sync")({sigint:true});

let nombre_j1 = prompt("Nombre de j1: ");
let nombre_j2 = prompt("Nombre de j2: ");

console.log("Jugador 1: "+nombre_j1);
console.log("Jugador 2: "+nombre_j2);

let num_jugadas = 0
while(true){
    num_jugadas = prompt("Num jugadas: ")

    if (num_jugadas > 0) {
        break
    }
}

let total_j1 = 0
let total_j2 = 0
let contador_jugadas_1 =0
let contador_jugadas_2 =0

for (let i = 1; i <= num_jugadas; i++) {
    let tiempo_aleatorio = Math.floor((Math.random()*30)+10);

    console.log("Jugada "+i+":"+tiempo_aleatorio+" segundos");

    if (i % 2 == 0){
        total_j2 += tiempo_aleatorio;
        contador_jugadas_2++
    }else{
        total_j1 += tiempo_aleatorio;
        contador_jugadas_1++
    }
}
console.log("Total de tiempo de j1: "+total_j1)
console.log("Total de tiempo de j2: "+total_j2)
let promedio_1 =total_j1/contador_jugadas_1
let promedio_2 =total_j2/contador_jugadas_2
console.log("Promedio j1: "+promedio_1)
console.log("Promedio j2: "+promedio_2)

if (promedio_1 == promedio_2){
    console.log("Empate técnico")
}
