const numeros = [10,20,30,40,50,3];
const valores = [10,'Taxas',20,30,'Produto',40,50,3];

function maiorQue10(data: Array<number>){
    return data.filter(numeros => numeros > 10);
}

function filtrarValores(data:Array<number | string>){
    return data.filter(item => typeof item === 'number');
}

console.log(filtrarValores(valores));
console.log(maiorQue10(numeros));

//Array de Array

const dados = [
    ["senhor dos aneis", 80],
    ["a guerra dos trono",120],
];