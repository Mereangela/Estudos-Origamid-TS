/*
Tipos

Types

*/

// const frase = 'Front End';
// const total = 100.05;
// const empresas = ['Apple', 'Microsoft']; //Array
// const body = document.body;
// const button = document.querySelector('button'); //Eu seleciono o botão.

// frase.toLowerCase();
// // frase.toFixed();

// total.toFixed(); //Ele retorna uma string
// // total.toLowerCase();

// empresas.map((empresa) => empresa.toUpperCase());
// // empresas.toLowerCase();

// body.style.background = '#d19fe8';
// // body.map((item) => item);

// console.log(button);
// // button.click();

// const operacao = true + 'teste' - (4 * {}) / [];
// const strings = 'Front ' + 'End';
// const numbers = 100 + 200;
// console.log(operacao, strings, numbers);


/*

@ts-check

O VS Code já vem com o TypeScript (TS) instalado. 
Enquanto escrevemos JavaScript, serviços do TS rodam na sua máquina e já te oferecem funcionalidades como a sugestão de métodos/propriedades do tipo.

Ao adicionar um comentário //@ts-check no início de um arquivo JS, o editor passará a indicar erros que seriam pegos pelo TS.

*/

// @ts - check // isso serve somente no doc para JS.
const frase = 'Front End';
const total = 100.05;
const empresas = ['Apple', 'Microsoft'];
const body = document.body;
const button = document.querySelector('button');

frase.toLowerCase();
// frase.toFixed();

total.toFixed();
// total.toLowerCase();

empresas.map((empresa) => empresa.toUpperCase());
// empresas.toLowerCase();

body.style.background = '#d19fe8';
// body.map((item) => item);

console.log(button);
// button.click();

// const operacao = true + 'teste' - (4 * {}) / [];
const strings = 'Front ' + 'End';
const numbers = 100 + 200;
console.log(strings, numbers);