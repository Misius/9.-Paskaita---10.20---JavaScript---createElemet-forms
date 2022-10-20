'use strict';
console.log('destruct.js');


// destrukturizacija


const user = ['James', 45, 'London', true];


// const username = user[0];
// const age = user[1];
// const town = user[2];
// const hasCar = user[3];
// console.log(username, age, town, hasCar);

// destrukturizacija

// const [username, age, town, hasCar] = user;

console.log('username ===', username);
console.log('age ===', age);
console.log('town ===', town);
console.log('has a car ===', hasCar);

// const [, , town, ] = user; //jei reikia tik miesto
// const [, , town, ] = getUser();


function getUserObj() {
    return {
        title: 'Mr',
        town: 'vilnius',
        isMarried: true,
    };
}
const user2 = {
    title: 'Mr',
    town: 'vilnius',
    isMarried: true,
};
console.log('user2 ===', user2);

const {town, title } = user2;


console.log('getUserObj ===', getUserObj);

