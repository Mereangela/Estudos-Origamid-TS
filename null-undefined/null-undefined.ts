// const button = document.querySelector('button');
// const config = localStorage.getItem('config');

// if(button !==null){
//     button.click();
// }

// if(button){
//     button.click();
// }

// console.log(Boolean())

// button?.click();

// console.log(typeof null) //Isso é um bug em JS e não acertaram. Para manter o funcionamento dos códigos antigos // Correto é tipo primitivo.

//UNDEFINED
// let total;

//  console.log(total)

// function teste(){

// }

// console.log(teste)

// if(total){
//     console.log("Total foi definido");
// }else {
//     console.log("Total não foi definido");
// }

interface Product {
    nome?: string;
}

const jogo: Product = {
    nome: 'Ragnarok',
};

const livro: Product = {};
    
if(jogo.nome){
    jogo.nome.toLowerCase();
}

console.log(livro.nome?.toLowerCase());