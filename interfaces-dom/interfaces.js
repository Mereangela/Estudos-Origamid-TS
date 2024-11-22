"use strict";
//Interfaces do Dom
//querySelector
// const video = document.querySelector('#videoprincipal');
// if( video instanceof HTMLVideoElement){
//     console.log(video.volume);
// }
//querySelectorAll
/*
O querySelectorAll retorna uma Nodelist de elementos.
Não confundir o nome da interface NodeListof com o nome da classe NodeList.

*/
// const links = document.querySelectorAll('.link');
// console.log(links instanceof NodeList) //true
// links.forEach((link) =>{
//     if(link instanceof HTMLAnchorElement){
//         console.log(link.href);
//     }else {
//         console.log(typeof link); //object
//     }
// });
// const dados = [1,2,3];
// const arrayLinks = Array.from(links);
// const anchorLinks = arrayLinks.filter(
//     (link) => link instanceof HTMLAnchorElement
// );
// console.log(anchorLinks);
