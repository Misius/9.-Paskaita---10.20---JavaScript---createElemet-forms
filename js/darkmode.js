'use strict';
console.log('darkmode.js');



// const modeSpanEl = document.getElementById('mode');
let modeSpanEl = document.getElementById('mode').textContent;
const btnEl = document.getElementById('btn');


btnEl.addEventListener('click', () => {
    // jei dabar mode = dark
    if (modeSpanEl.textContent === 'dark') {
        // modeText = 'light';
        modeSpanEl.textContent = 'light';
        console.log('modeText === dark ===', modeText);
    } else {
        // modeText = 'dark';
        modeSpanEl.textContent = 'dark';
        console.log('modeText === light ===', modeText);
    }
    // pakeisti ji i light
    // kitu atveju 
    // pakeisti i dark
    console.log('paspaudei');
    // modeSpanEl.textContent = 'light';
});