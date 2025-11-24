/*
* Nombre: Rafael cosquillo
* fecha: 20/11/25
* descripcion: funciones para completar un codigo relacionado con un torneo ajedrez
* */
/* =========================
   DATOS AUTOR (ELIMINAR ESTE COMENTARIO)
   ========================= */

/* =========================
   UTILIDADES COMUNES
   ========================= */



/* =========================
   EJERCICIO 1
   Modelo de datos y utilidades básicas
   ========================= */
//funcion que devuelve objeto segun la id
function buscarPieza(id,piezas){
    for(i=0;i<piezas.length;i++){
        if(piezas[i].id == id){
            return piezas[i];
        }
    }
    return null;
}
//contador de objetos separado por tipos
function contarPorTipo(piezas){
    let conteo = piezas.reduce((acc, pieza) => {
        if (acc[pieza.tipo]) {
            acc[pieza.tipo] = acc[pieza.tipo] + 1;
        }else {
            acc[pieza.tipo] = 1;
        }
        return acc;
    }, {});
    return conteo;
}
function listarPorColor(color, piezas){
    let arr_color = piezas.filter(p => p.color === color);
    return arr_color;
}

/**
 * Inventario 16 piezas por jugador:Blancas (P1..P16) y Negras (P17..P32)
 * Formato:
 *  { id: "P1", tipo: "peon"|"torre"|..., color: "blanco"|"negro", capturada: false }
 */
const piezasIniciales = [
  { id: "P1",  tipo: "rey",    color: "blanco", capturada: false },
  { id: "P2",  tipo: "reina",  color: "blanco", capturada: false },
  { id: "P3",  tipo: "torre",  color: "blanco", capturada: false },
  { id: "P4",  tipo: "torre",  color: "blanco", capturada: false },
  { id: "P5",  tipo: "alfil",  color: "blanco", capturada: false },
  { id: "P6",  tipo: "alfil",  color: "blanco", capturada: false },
  { id: "P7",  tipo: "caballo",color: "blanco", capturada: false },
  { id: "P8",  tipo: "caballo",color: "blanco", capturada: false },
  { id: "P9",  tipo: "peon",   color: "blanco", capturada: false },
  { id: "P10", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P11", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P12", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P13", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P14", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P15", tipo: "peon",   color: "blanco", capturada: false },
  { id: "P16", tipo: "peon",   color: "blanco", capturada: false },

  { id: "P17", tipo: "rey",    color: "negro", capturada: false },
  { id: "P18", tipo: "reina",  color: "negro", capturada: false },
  { id: "P19", tipo: "torre",  color: "negro", capturada: false },
  { id: "P20", tipo: "torre",  color: "negro", capturada: false },
  { id: "P21", tipo: "alfil",  color: "negro", capturada: false },
  { id: "P22", tipo: "alfil",  color: "negro", capturada: false },
  { id: "P23", tipo: "caballo",color: "negro", capturada: false },
  { id: "P24", tipo: "caballo",color: "negro", capturada: false },
  { id: "P25", tipo: "peon",   color: "negro", capturada: false },
  { id: "P26", tipo: "peon",   color: "negro", capturada: false },
  { id: "P27", tipo: "peon",   color: "negro", capturada: false },
  { id: "P28", tipo: "peon",   color: "negro", capturada: false },
  { id: "P29", tipo: "peon",   color: "negro", capturada: false },
  { id: "P30", tipo: "peon",   color: "negro", capturada: false },
  { id: "P31", tipo: "peon",   color: "negro", capturada: false },
  { id: "P32", tipo: "peon",   color: "negro", capturada: false }
];

console.log(buscarPieza("P1",piezasIniciales));
console.log(contarPorTipo(piezasIniciales));
console.log(listarPorColor("blanco", piezasIniciales));

/* =========================
   EJERCICIO 2
   Gestión de capturas e integridad de datos
   ========================= */

function capturarPieza(id, piezas){
    let obj_pieza = buscarPieza(id, piezas);
    if(obj_pieza){
        obj_pieza.capturada = true;
        return obj_pieza;
    }else{
        return null;
    }
}
function obtenerCapturadas(piezas){
    let arr_piezas_capturada = piezas.filter(p => p.capturada == true);
    return arr_piezas_capturada;
}
function porcentajeCapturas(piezas){
    let obj_captura = {
        total: piezas.length,
        capturadas: obtenerCapturadas(piezas).length,
        porcentaje: (obtenerCapturadas(piezas).length / piezas.length) * 100
    };
    return obj_captura;
}
console.log(capturarPieza("P3",piezasIniciales))
console.log(capturarPieza("P4",piezasIniciales))
console.log(obtenerCapturadas(piezasIniciales))
console.log(porcentajeCapturas(piezasIniciales))


/* =========================
   EJERCICIO 3
   Estadísticas, puntuación y ranking
   ========================= */
function calcularPuntuacionTotal(piezas, valores){
    let contador = 0;
    for (let i = 0; i < piezas.length; i++){
        if (piezas[i].capturada == false){
            contador = contador + valores[piezas[i].tipo];
        }
    }
    return contador;
}
function rankingPiezas(piezas, valores){
    let arr_piezas_potencia = [];
    let captu_1_0 = 0;

    for (let i=0; i<piezas.length; i++){
        //esta al reves
        if (piezas[i].capturada == false){
            captu_1_0 = 1;
        }else{
            captu_1_0 = 0;
        }
        arr_piezas_potencia[i] = {
            id: piezas[i].id,
            tipo: piezas[i].tipo,
            color: piezas[i].color,
            potencia: valores[piezas[i].tipo] * captu_1_0,
        }
    }
    let arr_piezas_potencia_ordenado = arr_piezas_potencia.sort((a,b) => b.potencia - a.potencia );
    return arr_piezas_potencia_ordenado;
}

/**
 * Valores estándar de las piezas para puntuación
 */
const valores = {
  rey: 1000,
  reina: 9,
  torre: 5,
  alfil: 3,
  caballo: 3,
  peon: 1
};

console.log(calcularPuntuacionTotal(piezasIniciales, valores));
console.log(rankingPiezas(piezasIniciales, valores));

/* =========================
   EJERCICIO 4
   Exportación y mini-interpretador de comandos
   ========================= */

function exportarEstado(piezas, valores){
    const fecha = new Date();
    let arr_copia = piezas.map(p => p)
    let obj_estado = {
        piezas: arr_copia,
        puntuacion: calcularPuntuacionTotal(piezasIniciales, valores),
        fechas: fecha
    };

    return JSON.stringify(obj_estado);
}
function procesarComando(texto, piezas, valores){


}
console.log(exportarEstado(piezasIniciales, valores));
