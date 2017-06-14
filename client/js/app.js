//var $ = require('jquery');

// console.log("Entry point");

// $(function(){
//     $(document.body).append('<h3>').text('Hello, webpack!')
// });


class Person {
    constructor(name, age){
        Object.assign(this, {name, age})
    }
}

const man = new Person('walter white', 52);

const {name, age} = man;

console.log(`${name} is ${age} years old!`);

const view = require('raw!jade-html?pretty=true!../views/index.jade')

console.log(view)

document.body.innerHTML = view;