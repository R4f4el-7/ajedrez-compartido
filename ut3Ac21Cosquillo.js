inicioPartida = new Date(2025, 10, 22, 18, 0)
console.log(inicioPartida);

finPartida = new Date(2025, 10, 22, 18, 45)
console.log(finPartida);

duracion = finPartida - inicioPartida;
minutos = duracion / 60000;

console.log(minutos+" minutos");