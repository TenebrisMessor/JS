'use strict'

//Dom - Document object mo0del


var cambiaColor = (color) =>{
    caja.style.background = color; 
} 
//conseguir elemenots con un ID concreto
//Conseguir elementos por su etiqueta 
var todoslosDivs = document.getElementsByTagName('div');
console.log(todoslosDivs);
var contenidoentexto = todoslosDivs[2].textContent;


// Conseguir elementos por su clase


//var caja = document.getElementById("micaja");  // usando getelementbyid podemos solo buscar usando el id
var caja = document.querySelector("#micaja"); // usando el id estamos agregando lo que hay dentro del div con el id micaja a una variable
caja.innerHTML = "TEXTO EN LA CAJA DESDE JS!!" //cambiando el texto desde js
caja.style.background = "red"; // agregando background color desde js
caja.style.padding = "20px"; //agregando padding desde js
caja.style.color = "white";// agregando color al texto desde js
caja.className = "hola hola2"; //agregando clases desde js



console.log(caja);
