/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactPage: () => (/* binding */ contactPage)\n/* harmony export */ });\nconst headerOfPage = () => {\n    const content = document.getElementById('content')\n\n    // creating header\n\n    const header = document.createElement('nav')\n\n    //adding buttons\n    //Home\n    const buttonHome = document.createElement('button')\n    buttonHome.setAttribute('id', 'btn-home')\n    const aHome = document.createElement('a')\n    aHome.textContent = 'Home'\n    aHome.href = '#'\n    buttonHome.appendChild(aHome)\n    header.appendChild(buttonHome)\n\n    //Menu\n    const buttonMenu = document.createElement('button')\n    buttonMenu.setAttribute('id', 'btn-menu')\n    const aMenu = document.createElement('a')\n    aMenu.textContent = 'Menu'\n    aMenu.href = '#'\n    buttonMenu.appendChild(aMenu)\n    header.appendChild(buttonMenu)\n\n    //Contact\n    const buttonContact = document.createElement('button')\n    buttonContact.setAttribute('id', 'btn-contact')\n    const aContact = document.createElement('a')\n    aContact.textContent = 'Contact'\n    aContact.href = '#'\n    buttonContact.appendChild(aContact)\n    header.appendChild(buttonContact)\n\n    content.appendChild(header)\n}\n\nfunction contactPage() {\n\n    headerOfPage()\n\n    const mainHtml = `\n    <main>\n        <div class=\"logo\">Contact us by phone</div>\n        <div class=\"location\">\n            <div class=\"title\">Phone: +00 123-456-789</div>\n        </div>\n    </main>\n    `\n    content.insertAdjacentHTML('beforeend', mainHtml)\n}\n\n//# sourceURL=webpack://webpack-demo/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initaila_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initaila-page */ \"./src/initaila-page.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ \"./src/contactPage.js\");\n// import _ from 'lodash';\n\n// function component() {\n//     const element = document.createElement('div');\n\n//     // Lodash, now imported by this script\n//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');\n\n//     return element;\n// }\n\n// document.body.appendChild(component());\n\n//import your function\n\n// import myName from './myName';\n\n// function component() {\n//     const element = document.createElement('div');\n\n//     // use your function!\n//     element.textContent = myName('Romek');\n//     return element;\n// }\n\n// document.body.appendChild(component());\n///////////////////////////////////////////////////////\n\n\n\n\n\n\n(0,_initaila_page__WEBPACK_IMPORTED_MODULE_0__.initialPage)()\n// menuPage()\n// contactPage()\n\nconst content = document.getElementById('content')\n\nfunction clearAll() {\n    content.innerHTML = ``\n}\n\nconst btnHome = document.getElementById('btn-home')\nconst btnMenu = document.getElementById('btn-menu')\nconst btnContact = document.getElementById('btn-contact')\n\nbtnHome.addEventListener('click', () => {\n    clearAll()\n    ;(0,_initaila_page__WEBPACK_IMPORTED_MODULE_0__.initialPage)()\n})\n\nbtnMenu.addEventListener('click', () => {\n    clearAll()\n    ;(0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.menuPage)()\n})\n\nbtnContact.addEventListener('click', () => {\n    clearAll()\n    ;(0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.contactPage)()\n})\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/initaila-page.js":
/*!******************************!*\
  !*** ./src/initaila-page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialPage: () => (/* binding */ initialPage)\n/* harmony export */ });\nconst headerOfPage = () => {\n    const content = document.getElementById('content')\n\n    // creating header\n\n    const header = document.createElement('nav')\n\n    //adding buttons\n    //Home\n    const buttonHome = document.createElement('button')\n    buttonHome.setAttribute('id', 'btn-home')\n    const aHome = document.createElement('a')\n    aHome.textContent = 'Home'\n    aHome.href = '#'\n    buttonHome.appendChild(aHome)\n    header.appendChild(buttonHome)\n\n    //Menu\n    const buttonMenu = document.createElement('button')\n    buttonMenu.setAttribute('id', 'btn-menu')\n    const aMenu = document.createElement('a')\n    aMenu.textContent = 'Menu'\n    aMenu.href = '#'\n    buttonMenu.appendChild(aMenu)\n    header.appendChild(buttonMenu)\n\n    //Contact\n    const buttonContact = document.createElement('button')\n    buttonContact.setAttribute('id', 'btn-contact')\n    const aContact = document.createElement('a')\n    aContact.textContent = 'Contact'\n    aContact.href = '#'\n    buttonContact.appendChild(aContact)\n    header.appendChild(buttonContact)\n\n    content.appendChild(header)\n}\n\nfunction initialPage() {\n\n    headerOfPage()\n\n    // creating main\n    const mainHtml = `\n    <main>\n    <div class=\"logo\">The best pizza in the town!</div>\n    <div class=\"description\">\n        <p>\n            Indulge in pizza perfection at our town's finest pizzeria. Savor artisanal flavors crafted from the\n            freshest ingredients, expertly baked to a golden, crispy perfection. Join us for a slice of culinary\n            heaven that redefines your pizza experience.\n        </p>\n    </div>\n    <div class=\"hours\">\n        <div class=\"title\">Hours</div>\n        <ul>\n            <li>Sunday: 8am - 8pm</li>\n            <li>Monday: 6am - 6pm</li>\n            <li>Tuesday: 6am - 6pm</li>\n            <li>Wednesday: 6am - 6pm</li>\n            <li>Thursday: 6am - 10pm</li>\n            <li>Friday: 6am - 10pm</li>\n            <li>Saturday: 8am - 10pm</li>\n        </ul>\n    </div>\n    <div class=\"location\">\n        <div class=\"title\">Location</div>\n        <div class=\"address\">123 Forest Str., Forest - York, York</div>\n    </div>\n    </main>\n    `\n    content.insertAdjacentHTML('beforeend', mainHtml)\n}\n\n\n// export function menuPage() {\n\n//     headerOfPage()\n\n//     const mainHtml = `\n//     <main>\n//             <div class=\"logo\">Our menu</div>\n//             <div class=\"location\">\n//                 <div class=\"title\">Margherita Pizza</div>\n//                 <div class=\"address\">\n//                     A classic choice featuring a thin crust topped with fresh tomato sauce, slices of mozzarella\n//                     cheese,and fragrant basil leaves. The Margherita pizza embodies simplicity and balance, showcasing\n//                     the harmonious combination of flavors.\n//                 </div>\n//             </div>\n\n//             <div class=\"location\">\n//                 <div class=\"title\">Pepperoni Pizza</div>\n//                 <div class=\"address\">\n//                     This crowd-pleaser boasts a flavorful foundation of tomato sauce and melted mozzarella cheese,\n//                     generously adorned with savory, slightly spicy pepperoni slices. The crisp pepperoni edges create a\n//                     delightful contrast to the gooey cheese and tangy sauce.\n//                 </div>\n//             </div>\n\n//             <div class=\"location\">\n//                 <div class=\"title\">Hawaiian Pizza</div>\n//                 <div class=\"address\">\n//                     A controversial yet beloved option, the Hawaiian pizza presents a blend of sweet and savory. It's\n//                     topped with tomato sauce, mozzarella cheese, ham, and juicy pineapple chunks. The contrasting\n//                     flavors of the ham and pineapple create a unique and enjoyable experience.\n//                 </div>\n//             </div>\n\n//             <div class=\"location\">\n//                 <div class=\"title\">BBQ Chicken Pizza</div>\n//                 <div class=\"address\">\n//                     For those who crave a smoky, tangy twist, the BBQ chicken pizza delivers. Featuring a barbecue sauce\n//                     base, tender pieces of grilled chicken, red onions, and a mix of mozzarella and cheddar cheeses,\n//                     this pizza offers a delightful balance of flavors.\n//                 </div>\n//             </div>\n\n//             <div class=\"location\">\n//                 <div class=\"title\">Supreme Pizza</div>\n//                 <div class=\"address\">\n//                     The supreme pizza is a hearty and diverse combination of toppings. It typically features tomato\n//                     sauce, mozzarella cheese, pepperoni, Italian sausage, green peppers, onions, and black olives. This\n//                     medley of ingredients creates a satisfying and satisfyingly flavorful slice.\n//                 </div>\n//             </div>\n//         </main>\n//     `\n//     content.insertAdjacentHTML('beforeend', mainHtml)\n// }\n\n// export function contactPage() {\n\n//     headerOfPage()\n\n//     const mainHtml = `\n//     <main>\n//         <div class=\"logo\">Contact us by phone</div>\n//         <div class=\"location\">\n//             <div class=\"title\">Phone: +00 123-456-789</div>\n//         </div>\n//     </main>\n//     `\n//     content.insertAdjacentHTML('beforeend', mainHtml)\n// }\n\n//# sourceURL=webpack://webpack-demo/./src/initaila-page.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nconst headerOfPage = () => {\n    const content = document.getElementById('content')\n\n    // creating header\n\n    const header = document.createElement('nav')\n\n    //adding buttons\n    //Home\n    const buttonHome = document.createElement('button')\n    buttonHome.setAttribute('id', 'btn-home')\n    const aHome = document.createElement('a')\n    aHome.textContent = 'Home'\n    aHome.href = '#'\n    buttonHome.appendChild(aHome)\n    header.appendChild(buttonHome)\n\n    //Menu\n    const buttonMenu = document.createElement('button')\n    buttonMenu.setAttribute('id', 'btn-menu')\n    const aMenu = document.createElement('a')\n    aMenu.textContent = 'Menu'\n    aMenu.href = '#'\n    buttonMenu.appendChild(aMenu)\n    header.appendChild(buttonMenu)\n\n    //Contact\n    const buttonContact = document.createElement('button')\n    buttonContact.setAttribute('id', 'btn-contact')\n    const aContact = document.createElement('a')\n    aContact.textContent = 'Contact'\n    aContact.href = '#'\n    buttonContact.appendChild(aContact)\n    header.appendChild(buttonContact)\n\n    content.appendChild(header)\n}\n\n\nfunction menuPage() {\n\n    headerOfPage()\n\n    const mainHtml = `\n    <main>\n            <div class=\"logo\">Our menu</div>\n            <div class=\"location\">\n                <div class=\"title\">Margherita Pizza</div>\n                <div class=\"address\">\n                    A classic choice featuring a thin crust topped with fresh tomato sauce, slices of mozzarella\n                    cheese,and fragrant basil leaves. The Margherita pizza embodies simplicity and balance, showcasing\n                    the harmonious combination of flavors.\n                </div>\n            </div>\n\n            <div class=\"location\">\n                <div class=\"title\">Pepperoni Pizza</div>\n                <div class=\"address\">\n                    This crowd-pleaser boasts a flavorful foundation of tomato sauce and melted mozzarella cheese,\n                    generously adorned with savory, slightly spicy pepperoni slices. The crisp pepperoni edges create a\n                    delightful contrast to the gooey cheese and tangy sauce.\n                </div>\n            </div>\n\n            <div class=\"location\">\n                <div class=\"title\">Hawaiian Pizza</div>\n                <div class=\"address\">\n                    A controversial yet beloved option, the Hawaiian pizza presents a blend of sweet and savory. It's\n                    topped with tomato sauce, mozzarella cheese, ham, and juicy pineapple chunks. The contrasting\n                    flavors of the ham and pineapple create a unique and enjoyable experience.\n                </div>\n            </div>\n\n            <div class=\"location\">\n                <div class=\"title\">BBQ Chicken Pizza</div>\n                <div class=\"address\">\n                    For those who crave a smoky, tangy twist, the BBQ chicken pizza delivers. Featuring a barbecue sauce\n                    base, tender pieces of grilled chicken, red onions, and a mix of mozzarella and cheddar cheeses,\n                    this pizza offers a delightful balance of flavors.\n                </div>\n            </div>\n\n            <div class=\"location\">\n                <div class=\"title\">Supreme Pizza</div>\n                <div class=\"address\">\n                    The supreme pizza is a hearty and diverse combination of toppings. It typically features tomato\n                    sauce, mozzarella cheese, pepperoni, Italian sausage, green peppers, onions, and black olives. This\n                    medley of ingredients creates a satisfying and satisfyingly flavorful slice.\n                </div>\n            </div>\n        </main>\n    `\n    content.insertAdjacentHTML('beforeend', mainHtml)\n}\n\n//# sourceURL=webpack://webpack-demo/./src/menuPage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;