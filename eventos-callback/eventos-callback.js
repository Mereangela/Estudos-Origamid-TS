"use strict";
//Eventos e Callback   
// const button = document.querySelector('button');
// function handleClick(event:PointerEvent){
//     console.log(event.pageX)
// }
// button?.addEventListener('pointerdown',handleClick);
// function handleScroll(event:Event){
//     console.log(event)
// }
// window.addEventListener('scroll', handleScroll)
//Uso do Event com o instanceof
// function ativarMenu(event:TouchEvent | MouseEvent | KeyboardEvent){
//     console.log(event)
// }
//Ou usar de forma que implementa todos juntos, com o uso do Event.
// function ativarMenu(event:Event){
//     if(event instanceof MouseEvent){
//         console.log(event.pageX);
//     }
//     if(event instanceof TouchEvent){
//         console.log(event.touches[0]. pageX);
//     }
// }
// document.documentElement.addEventListener('mousedown',ativarMenu);
// document.documentElement.addEventListener('touchstart',ativarMenu);
// window.addEventListener('keydown',ativarMenu);
//Uso do this e não recomendado o uso em caso de CALLBACK
// const button = document.querySelector('button');
// function handleClick(this:HTMLButtonElement, event: MouseEvent){
//     console.log(this.innerText);
// }
// button?.addEventListener('click', handleClick);
//Melhor usar o target e currentTarget
const button = document.querySelector('button');
function handleClick(event) {
    if (event.currentTarget instanceof HTMLElement) {
        console.log(event.currentTarget.innerText);
    }
}
button?.addEventListener('click', handleClick);
