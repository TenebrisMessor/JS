'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra en su indice
(se valorará el uso de funciones)
*/

var numeros = new Array(6);


for(let i=0; i<=5; i++){
    numeros[i] = parseInt(prompt("INTRODUCE "+(6-i)+" NUMEROS"))
}


console.log(numeros);
console.log(numeros.sort());
console.log(numeros.reverse());
