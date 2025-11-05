/*Rafael cosquillo 04/11/25
* Registrar partidas del torneo en el almacenamiento local*/
let nombre_blancas = prompt("Nombre de Blancas: ");
let nombre_negras = prompt("Nombre de Negras: ");
let resultado = ["Ganan blancas", "Ganan negras", "Empate"]

//2 Validacion
if (nombre_blancas.length == 0 || nombre_negras.length == 0) {
    console.log("Nombre es obligatorio");
    while(true){
        nombre_blancas = prompt("Nombre de Blancas: ");
        nombre_negras = prompt("Nombre de Negras: ");
        if (nombre_blancas.length != 0 && nombre_negras.length != 0){
            break
        }
    }
}

alert(nombre_blancas);
alert(nombre_negras)
// 3 local storage
localStorage.setItem(JSON.stringify(nombre_blancas),JSON.stringify(nombre_negras));

