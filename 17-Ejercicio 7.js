"use strict"

//Tabla de multiplicar de un numero itroducido por pantalla.


var numero = parseInt(prompt("¿De que numero quieres la tabla?", 0));

while(isNaN(numero)){
    numero = parseInt(prompt("Introduce un numero", 0));
}

for(var j=1; j<=10; j++){
    document.write("<h3>Tabla del "+j+"</h3>")
for( var i=1; i<=10; i++){
    document.write(j + "x" + i + "=" + (j*i)+"<br>")
}
}
