var max = 100;
var cadenaTrozos = "4 14 15 18 29 32 36 82 95 95";
var trozos = toArray(cadenaTrozos);

var cont = 0;
var aux = [];

for(var i=trozos.length - 1; i>=0; i--){
    if(+cont + +trozos[i] < max){
        cont += +trozos[i];
        aux.push(i);
    }
}
console.log(aux.length + " types of pizza.");
console.log(aux.reverse().join(" "));

function toArray(cadena){
    return cadena.split(" ");
}