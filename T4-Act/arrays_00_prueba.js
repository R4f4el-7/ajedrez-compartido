//Dos notaciones para arrays
let movimientos = ["e4","e5","d2"];//recomendada forma literal
let piezas = new Array("caballo","torre");

movimientos.forEach(movimiento => {console.log(movimiento);});
piezas.forEach(pieza => {console.log(pieza);});
//push(añadir ultimo elemento) y pop(eliminar ulñtimo elemento)
piezas.push("rey");
console.log(`Se añade la ultima pieza rey: ${piezas}`);
piezas.pop();
console.log(`Se elimina la ultima pieza: ${piezas}`);
//unshift(añadir primero) y unshift(eliminar ultimo)
movimientos.unshift("e7");
console.log(`Se añade el primer movimiento e7: ${movimientos}`);
movimientos.shift();
console.log(`Se elimina el primer movimiento e7: ${movimientos}`);

//clases y objeto literal equivalencia
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log(`Buenos dias ${this.nombre} ${this.apellido}`);
    }
}
const persona = new Persona("Federico", "Carmonzo");
persona.saludar();

const perdona2 = {
    nombre:"Alfonso",
    apellido:"Torres",
    saludar() {
        console.log(`Buenos dias ${this.nombre} ${this.apellido}`);
    }
};
perdona2.saludar();

//array de objetos (persona)

const arr_persona_clase = [
    new Persona("nombre1", "Apellido1"),
    new Persona("nombre2", "Apellido2"),
    new Persona("nombre3", "Apellido3"),
    new Persona("nombre4", "Apellido4"),
];
console.log(arr_persona_clase);

const arr_persona_objLiteral = [
    {nombre:"nombre1", apellido:"apellido1"},
    {nombre:"nombre2", apellido:"apellido3"},
    {nombre:"nombre3", apellido:"apellido3"},
    {nombre:"nombre4", apellido:"apellido4"},
];

console.log(arr_persona_objLiteral);