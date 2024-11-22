const frase:string = "Front End";
const preco:number = 500;
const condi: boolean = preco > 100;

//No modo abaixo não estou inferindo, porque eu já que tipo de dado é. Assim que funciono, sou bem mais inteligente que o JS.

const frase1 ="Back End"; // E se mudo para true, o retorno será else: Esta frase não é uma string.
const preco1 = 600;
const condi1 = preco > 200;

//Aqui eu mostro para você no CONSOLE do browser. que tipo de dados eu sou, caso você tenha dúvidas e tudo que mostra no retorno do console é uma string.
console.log(typeof frase1);
console.log(typeof preco1);
console.log(typeof condi1);
console.log(typeof document) //Aqui eu verifico para você que document é um object.
console.log(typeof {}) //Aqui eu verifico para você que sou um objeto puro.
console.log(typeof []) //Aqui eu verificar para você que array é um object.

if(typeof frase1 === 'string'){
    console.log('Esta frase é uma string');
}else{
    console.log('Esta frase não é uma string');
}

const frase2 = new String("Banco de Dados"); // Gera um objeto do tipo String.
const frase3 = String("Banco de Dados");
const frase4 = "Banco de Dados";

console.log(typeof frase2);
console.log(typeof frase2.toLowerCase);
console.log(typeof frase3);
console.log(typeof frase4);
console.log(typeof String); //Eu retorno a função construtora.

