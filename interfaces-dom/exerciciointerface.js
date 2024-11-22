"use strict";
const links = document.querySelectorAll('.link');
links.forEach((link) => {
    if (link instanceof HTMLElement) {
        ativarElemento(link);
    }
});
function ativarElemento(elemento) {
    elemento.style.color = 'blue';
    elemento.style.border = '2px solid blue';
}
console.log(links);
