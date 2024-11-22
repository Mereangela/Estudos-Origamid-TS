/*
Functions

A interface de uma função é definida durante a sua declaração.

*/

function somar(a:number, b:number, c?:number): number {
    return a + b + (c? c:0);
}

console.log(somar(9,4,2));

const subtrair = (a:number, b: number) => a -b;

console.log(subtrair(10,3));

type Callback = (event:MouseEvent) => void;

function pintarTela(cor:string): void {
    document.body.style.background = cor;
}

pintarTela('pink');

const btn = document.querySelector('button');

btn?.click();

function isString(value:any){
    if( typeof value ==='string'){
        return true;
    }
}

console.log(isString('Teste'));
console.log(isString(200));

//Não faz sentido a função abaixo, porque ela é nula.
// if(pintarTela('pink')){
//     console.log('Pintou a tela');
// }else{
//     console.log('Não pintou')
// }


//Retorna Void
// function criarNumero (){
//     return;
// }

// const numero = criarNumero();

// function abortar(mensagem:string): never{
//     throw new Error(mensagem)
// }

// abortar('Um erro ocorreu');
// console.log('Tente novamente');

/*
Métodos

Na definição de interfaces podemos definir os métodos indicando o tipo de dado recebido e o seu possivel retorno

*/

interface Quadrado {
    lado:number;
    perimetro(lado:number): number
}

function cacular(forma:Quadrado){
    forma.perimetro(3);
}

/*
Overload

Existem funções que retornam diferentes dados dependendo do argumento.
Podemos declarar a interface dessas funções utilizando function overload.

Basta declarar a interface antes da definição da mesma, utiizando o mesmo nome.

O Overload deve ser compatível com a função original.

*/
//Function overload:
function normalizar(valor:string[]) : string[];
function normalizar(valor:string) : string;
function normalizar(valor:string | string []): string | string[] {
    if(typeof valor === 'string'){
        return valor.trim().toLowerCase();
    } else{
        return valor.map((item) => item.trim().toLowerCase())
    }
 }

console.log(normalizar('Produto').toLowerCase);
console.log(normalizar(['Banana', 'UVA   ']).filter);

function $(seletor: 'a') : HTMLAnchorElement | null;
function $(seletor: 'video') : HTMLVideoElement | null;
function $(seletor: string) : Element | null;
function $(seletor:string): Element | null {
    return document.querySelector(seletor);
}

$('a')?.click();
$('video')?.volume;
$('.item');