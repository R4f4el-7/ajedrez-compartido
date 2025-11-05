/*Rafael cosquillo 04/11/25
* Simular capturas que ocurren en una partida*/
const prompt=require("prompt-sync")({sigint:true});

let num_jugadas = 0
while(true){
    num_jugadas = prompt("Num jugadas: ")

    if (num_jugadas > 0) {
        break
    }
}

let num_aleatorio = 0
let contador_captura = 0

for(let i=0; i<num_jugadas; i++){
    num_aleatorio = Math.floor((Math.random()*6)+1);
    if(num_aleatorio % 3 == 0 || num_aleatorio == 3){
        contador_captura ++;
        console.log("Hay captura:")
    }
    console.log("Jugada "+i+": numero "+num_aleatorio);
}
console.log("Cantidad de capturas: "+contador_captura);
let porcentaje = (contador_captura * 100) / num_jugadas ;
console.log("Porcentaje de captura: "+porcentaje+"%");

let tipo_partida

if(porcentaje > 20){
    tipo_partida = "Partida agresiva"
}else {
    tipo_partida = "Partida tranquila"
}
/*
alert("Total de jugadas: "+num_jugadas);
alert("Total de capturas: "+contador_captura);
alert("Porcentaje de captura: "+porcentaje);
alert("Tipo de partida: "+tipo_partida);*/