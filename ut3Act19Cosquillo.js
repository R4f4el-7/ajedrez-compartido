posicion ={"a":1, "b":2, "c":3, "d":4, "e":5, "f":6, "g":7, "h":8}
function esMovimientoValido(pieza, origen, destino){


}
function peonValido(origen, destino){
    columna_origen = posicion[origen.slice(0,1)];
    fila_origen = parseInt(origen.slice(1,2));
    columna_destino = posicion[destino.slice(0,1)];
    fila_destino = parseInt(destino.slice(1,2));

    console.log(columna_origen, fila_origen);
    console.log(columna_destino, fila_destino);

    if(fila_destino == fila_origen+1){
        console.log("Movimiento valido");
    }else{
        console.log("Movimiento no valido");
    }
}
function caballoValido(origen, destino){
    columna_origen = parseInt(posicion[origen.slice(0,1)]);
    fila_origen = parseInt(origen.slice(1,2));
    columna_destino = parseInt(posicion[destino.slice(0,1)]);
    fila_destino = parseInt(destino.slice(1,2));

    if (fila_destino == fila_origen+1){

    }
}
peonValido("a1","a2")

for (i=0; i<5; i++){
    linea = "";
    for(j=0; j<5; j++){
        if(j % 2!=0 && (i == 0 || i == 4) || i % 2!=0 && (j == 0 || j == 4)){
            linea += "O";
        }else{
            linea += "X";
        }
    }
    console.log(linea);
}
