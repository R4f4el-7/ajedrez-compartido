/*Evento_02_querySelector puede tener como parametro un ID(#titulo), clase(.titulo), etiqueta(p, div, ul)
* , seleccionar un elemento dentro de otro(#menu li), seleccionar por atributo(input[type="email"]),
*  cambiar algo directamente (.textContent = 'Hola!')*/
const titulo = document.querySelector('#titulo');

console.log(titulo);
console.log(titulo.textContent);
console.log(titulo.className);
console.log(titulo.id);
console.log(titulo.tagName);

titulo.textContent = "Nuevo texto";
titulo.style.color = "red";

//Evento_02_querySelector() solo selecciona el primer elemento que coincida con el selector CSS que le des.

const p = document.querySelector('.item');
console.log(p);//<p class="item">A</p>

//querySelectorAll() Devuelve una lista (NodeList) con todos los elementos que coinciden.
const items = document.querySelectorAll('.item');
console.log(items);

//items se comporta como un array
console.log(items[0]);        // <p>A</p>
console.log(items.length);    // 2

items.forEach(i => console.log(i.textContent)); // A,

//TABLERO
const celdas = document.querySelectorAll("td");

celdas.forEach(celda => {
    celda.addEventListener("click", (e) => {
        console.log("Has hecho clic en:", e.target);
        e.target.classList.toggle("seleccionada");
    });
});
/*e.target → se refiere al elemento que disparó el evento, en este caso la celda <td> en la que hiciste clic.

.classList → es una propiedad de los elementos HTML que contiene todas las clases CSS que tiene ese elemento. Permite manipularlas fácilmente.

.toggle("seleccionada") → verifica si la clase "seleccionada" ya está en el elemento:

Si sí está, la elimina.

Si no está, la añade.*/
