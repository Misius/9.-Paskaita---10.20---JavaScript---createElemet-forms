'use strict';
console.log('uzd.js');

const divContainerEl = document.createElement('div');
divContainerEl.className = 'container';
document.body.appendChild(divContainerEl);


const h1El = document.createElement('h1');
console.log('h1El ===', h1El);

// main
const mainEl = document.createElement('main');
divContainerEl.append('mainEl');

function makeArticle() {
    // kuriam article
    const artEl = document.createElement('article');
    artEl.className = 'card';
    // its all about us
    const h2El = document.createElement('h2');
    h2El.textContent = 'Its all about us';
    artEl.append(h2El);
    // dedam article i main
    mainEl.append(artEl);
}


makeArticle();