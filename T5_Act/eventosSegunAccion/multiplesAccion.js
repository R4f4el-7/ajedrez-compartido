/*getElementById("id") Más rápido Solo sirve para IDs
* querySelector("#id") Primer elemento que coincida con el selector CSS , Un poco más lento
*  y acepta cualquier selector CSS*/
const tablero = document.getElementById("tablero");
//const tablero = document.querySelector("#tablero");

tablero.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
})
tablero.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "green";
})
tablero.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "white";
})

/**/
function controlarEventos(e){
    switch (e.type) {
        case "click":
            e.target.style.backgroundColor = "green";
            break;
        case "mouseover":
            e.target.style.backgroundColor = "red";
            break
    }
}
const casilla = document.getElementById("casilla");
["mouseover","mouseout","click"].forEach(tipo => {
    casilla.addEventListener(tipo, controlarEventos)
})
