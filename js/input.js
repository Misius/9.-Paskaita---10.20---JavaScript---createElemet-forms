'use strict';
console.log('input.js');



const addBtnEl = document.getElementById('add')
const inputEl = document.getElementById('newInput')
const outnEl = document.getElementById('out')


function inputToOutput() {
    // paimam ivesties reiksme
    const inputText = inputEl.value;
    // iraso i out container
    outnEl.textContent = inputText;
}

addBtnEl.addEventListener('click', inputToOutput);