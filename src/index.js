// import _ from 'lodash';

// function component() {
//     const element = document.createElement('div');

//     // Lodash, now imported by this script
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     return element;
// }

// document.body.appendChild(component());

//import your function

// import myName from './myName';

// function component() {
//     const element = document.createElement('div');

//     // use your function!
//     element.textContent = myName('Romek');
//     return element;
// }

// document.body.appendChild(component());
///////////////////////////////////////////////////////


import { initialPage } from "./initaila-page";
import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";

initialPage()
// menuPage()
// contactPage()

const content = document.getElementById('content')

function clearAll() {
    content.innerHTML = ``
}

const btnHome = document.getElementById('btn-home')
const btnMenu = document.getElementById('btn-menu')
const btnContact = document.getElementById('btn-contact')

btnHome.addEventListener('click', () => {
    clearAll()
    initialPage()
})

btnMenu.addEventListener('click', () => {
    clearAll()
    menuPage()
})

btnContact.addEventListener('click', () => {
    clearAll()
    contactPage()
})