//EXERCÍCIO:

const link = document.getElementById('origamid');

//Quero modificar o href:

if(link instanceof HTMLAnchorElement){
    link.href = link.href.replace('http://', 'https://'); //Alterei http para https.
    console.dir(link.href); //console.dir sempre retorno no console no formato OBJETO.
}