// async function fetchCursos(){
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const json = await response.json();
//     handleCursos(json);
// }

// fetchCursos();

// function handleCursos(data:unknown){
//     if(data instanceof Array){
//         console.log('É uma instância de Array');
//     }
//     if(Array.isArray(data)){
//         console.log('É array');
//     }
// }

//Type Predicate

/*
TypeScript não executa JavaScript

Sabemos já que o TS não executa o JS durante a checagem dos tipos.Se isso ocorre, então como a função isArray consegue ser usada como TypeGuard?

Com o Type Predicate :arg is type, podemos indicar qual o tipo de argumento uma função booleana(que retorna boolean) recebeu para ser verdadeira.

*/

// function isString(value: unknown) : value is string {
//     return typeof value === 'string';
// }

// function handleData(data:unknown){
//     if(isString(data)) {
//     console.log(data.toLowerCase());
//     }
// }

// handleData('Origamid');

//is a função é BOOLEANA.

// async function fetchProduto() {
//     const response = await fetch('https://api.origamid.dev/json/notebook.json');
//     const json = await response.json();
//     handleProduto(json);
// }

// fetchProduto();

// interface Produto {
//     nome:string;
//     preco:number;
// }

// function isProduto(value:unknown) : value is Produto {
//     if(
//         value && 
//         typeof value === 'object' &&
//         'nome' in value &&
//          'preco' in value) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function handleProduto(data:unknown){
//     if(isProduto(data)) {
//         console.log(data.nome);
//     }
// }