const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();//Evita la recarga de la pagina. Muy útil cuando queremos validar o procesar datos antes de enviar el formulario
    const nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("El nombre no puede estar vacio");
        return;
    }

    document.getElementById("mensaje").textContent = `¡Bienvenido ${nombre}!`;
})

const nombre = document.getElementById("nombre1");

// Cada vez que escribe
nombre.addEventListener("input", () => {
    console.log("input:", nombre.value);
});
/*Mientras escribes “Juan”:

input → J

input → Ju

input → Jua

input → Juan*/

// Cuando termina y sale del input
nombre.addEventListener("change", () => {
    console.log("change:", nombre.value);
});
/*Cuando haces clic fuera del input:

change → Juan*/
