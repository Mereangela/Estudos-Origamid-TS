"use strict";
let total = 200;
total: "4000";
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    return false;
}
if (isNumber("200")) {
    console.log("É um número");
}
const button = document.querySelector('button');
button?.click();
