'use strict';
console.log('insertAdjacent.js');

const listEl = document.getElementById('colorsList');

const h2ElString = '<h2>Colors</h2>';

const h2El = document.createElement('h2');
h2El.textContent = 'colors';

// listEl.insertAdjacentHTML('beforebegin', h2ElString);

listEl.insertAdjacentHTMLt('afterbegin', '<li>Black</li>');
listEl.insertAdjacentElement('beforebegin', h2ElString);