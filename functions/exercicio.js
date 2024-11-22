"use strict";
//Exercício
function arredondar(valor) {
    if (typeof valor === 'number') {
        return Math.ceil(valor);
    }
    else {
        return Math.ceil(Number(valor)).toString(); //Arredonda para cima e transforma para string.
    }
}
console.log(arredondar(200.32)); //Agora consigo usar os métodos de number.
console.log(arredondar('203.32')); //Agora consigo usar os métodos de string.
