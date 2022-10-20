'use strict';
console.log('insert.js');


// sukurti h1
const h1El = document.createElement('h1');

h1El.textContent = 'I am before';

const listEl =document.getElementById('colorsList');

listEl.before(h1El);

// sukurti footer elementą
const footerEl = document.createElement('footer');
// ideti i ji teksta
footerEl.textContent = 'Visos teisės saugomos @copy;'
// patalpinti footeri po sarasu ater
listEl.after(footerEl);

document.body.append(footerEl);