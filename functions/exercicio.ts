//Exercício

/*

Crie uma função que arredonda um valor passado para cima.
A função pode receber string ou number.
A função deve retornar o mesmo tipo que ela receber.

*/

//Resposta:

function arredondar(valor:number) : number;
function arredondar(valor:string) : string;
function arredondar(valor: number | string): number | string {
    if(typeof valor === 'number'){
        return Math.ceil(valor)
    } else{
        return Math.ceil(Number(valor)).toString(); //Arredonda para cima e transforma para string.
    }
   
}

console.log(arredondar(200.32)); //Agora consigo usar os métodos de number.
console.log(arredondar('203.32'));//Agora consigo usar os métodos de string.