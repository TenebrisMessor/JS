'use strict'

//Funciones anonimas
//Es una función que no tiene nombre.

var pelicula = function(nombre){
  return "La pelicula es: "+nombre;
}
//Callback: Función que se ejecuta dentro de otra.

function sumame(numero1, numero2){
    var sumar = numero1 + numero2;
    return sumar;
}
sumame(4,5);