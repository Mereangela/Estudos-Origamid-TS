// Objetos e Interfaces
// Generics


//Aqui não é a forma correto:

// function retorno(argumento: string | number | boolean){
//     return argumento;
// }

// console.log(retorno('A Game'));
// console.log(retorno(200));
// console.log(retorno(true));

//Com o Generics:

// function retorno<variavel>(argumento: variavel): variavel{
//     return argumento;
// }

//A função acima faz com que no console abaixo na palavra retorno, apareça correto, o que é cada um dos retorno, segue abaixo:
// console.log(retorno('A game')); //Agora sim, eu retorno uma string.
// console.log(retorno(200)); //Eu retorno um number.
// console.log(retorno(true)); //Eu retorno um boolean.

//Ou da forma abaixo:

// console.log(retorno<string>('A Game'));
// console.log(retorno<number>(200));
// console.log(retorno<boolean>(true));

//Agora tenho duas listas:

// const numeros = [1,2,3,4,5,6,7,8,9];
// const frutas = ['Banana', 'Pêra', 'Uva', 'Laranja','Limão', 'Maça'];

// function firstFive<TipoLista>(lista:TipoLista[]): TipoLista[] {
//     return lista.slice(0,5);
// }

// console.log(firstFive(numeros));
// console.log(firstFive(frutas).map(item => item));

// function notNull<Tipo>(arg:Tipo){
//     if(arg!== null) return arg;
//     else return null;
// }

// console.log(notNull('Mary')?.toLowerCase());
// console.log((200)?.toFixed());

// function tipoDado<T>(arg:T):{dado:T; tipo:string} {
//     const resultado = {
//         dado: arg,
//         tipo:typeof arg,
//     };
//     console.log(resultado);
//     return resultado;
// }

// tipoDado('Teste').tipo;
// tipoDado(200).tipo;

// function extractText<Tipo extends HTMLElement>(elemento:Tipo){
//     return {
//         texto: elemento.innerText,
//         elemento,
//     }
// }

// const link = document.querySelector('a');

// if(link){
//     console.log(extractText(link).elemento.href);
// }

// document.querySelector

// $ é da biblioteca JQUERY

// function $<Tipo extends Element>(selector: string): Tipo | null {
//     return document.querySelector(selector);
// }

// const link = $<HTMLAnchorElement>('a')?.href;

const link  = document.querySelector<HTMLVideoElement>('.link');

if(link instanceof HTMLVideoElement) {
    link?.volume;
}

async function getData<Tipo>(url: string): Promise<Tipo>{
    const response = await fetch(url);
    return await response.json();
}

interface Notebook{
    nome:string;
    preco:number;
}

async function handleData() {
    const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.preco);
}

handleData();
