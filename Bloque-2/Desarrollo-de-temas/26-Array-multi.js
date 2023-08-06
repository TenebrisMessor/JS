'use strict'

var categorias = ['accion', 'terror', 'comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];
console.log(cine[0][1]); //El pirmer indice indica a que array se esta accediendo dentro del array multidimencional que en este caso esc categorias y el segundo muestra el indice dentro de ese otro array en este caso terror
console.log(cine[1][0]); // Entra en el array peliculas en el indice La verdad duele.