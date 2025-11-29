/*En la pagina(document) se añade un evento que se actica al presionar la tecla(keydown,keyup,keypress).
"e" es el objeto del evento (toda la información del evento) y es un objeto de la clase KeyboardEvent
".key" o ".code" son propiedades o claves dentro de ese objeto*/
document.addEventListener("keydown", (e) => {
    console.log("---Evento de teclado---")
    console.log("Tecla presionada: " + e.key);
    console.log(e);       // Muestra el objeto KeyboardEvent
    console.log(e.key);   // Muestra solo la tecla presionada
    console.log(e.code);  // Muestra el código físico de la tecla
});

//Añadimos un listener al documento que se activa cuando el usuario hace clic en la pagina(en cualquier lugar)
document.addEventListener("click", (e) => {
    console.log("---Evento de raton---")
    // e.button → indica qué botón del mouse se presionó
    // 0 = izquierdo, 1 = medio (rueda), 2 = derecho
    console.log("Botón:", e.button);

    // e.clientX / e.clientY → coordenadas del clic **relativas a la ventana**
    console.log("Coordenadas ventana:", e.clientX, e.clientY);

    // e.pageX / e.pageY → coordenadas del clic **relativas a toda la página**
    // (incluye el desplazamiento por scroll)
    console.log("Coordenadas página:", e.pageX, e.pageY);

    // e.shiftKey → true si se estaba presionando la tecla Shift mientras se hacía clic
    console.log("Tecla Shift presionada?", e.shiftKey);

    // e.target → el elemento específico donde ocurrió el clic
    console.log("Elemento clicado(.target):", e.target);
});

document.getElementById("miFormulario").addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtenemos el valor del input
    const nombre = e.target.nombre.value;/*Estas accediendo al formulario(.target) despues al input con name = nombre(.nombre)
                                                 y obtienes lo escrito por el usuario(.value)*/

    console.log("---Evento Formulario---");
    console.log("Formulario enviado. Nombre:", nombre);
    console.log("Formulario enviado por:", e.submitter); // muestra el botón que disparó el submit
    console.log("Formulario (target):", e.target); // <form id="miFormulario">...</form>
    console.log("Tipo de evento:", e.type);
});

document.getElementById("caja").addEventListener("mouseover", (e) => {
    console.log("---Evento de raton tipo Mouseover---");
    console.log("El mouse está sobre la caja");
    console.log("Elemento:", e.target);      // Elemento que disparó el evento
    console.log("Coordenadas:", e.clientX, e.clientY); // Posición del mouse en la ventana
});
/*MouseEvent tiene eventos tipos: click, dblclick, mouseover...
*/