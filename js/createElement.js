'use strict';
console.log('createElement.js');


//  sukuriam elementa div

const divContainerEl = document.createElement('div');
// pridedam klase
divContainerEl.className = 'container';
// patalpinti body
document.body.appendChild(divContainerEl);

// sukurti h1