/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/rental.js":
/*!***********************!*\
  !*** ./src/rental.js ***!
  \***********************/
/***/ (() => {

eval("const listingContainer = selectElement('.list-container')\r\nconst cityName = selectElement('#city')\r\nconst stateName = selectElement('#state')\r\nconst limitAmount = selectElement('#limit')\r\nconst searchButton = selectElement('#search-button')\r\n\r\nconsole.log(\"realty-in-us.p.rapidapi.com\")\r\n\r\n// On Search Submit\r\nsearchButton.addEventListener('click', (e) => {\r\n  e.preventDefault()\r\n  listingContainer.innerHTML = ''\r\n  let [city, state, limit] = [\r\n    cityName.value,\r\n    stateName.value,\r\n    limitAmount.value,\r\n  ]\r\n  let inputArray = [city, state, limit]\r\n  console.log(inputArray)\r\n  // render(inputArray)\r\n})\r\n\r\n// render items\r\nfunction render(cityName, stateName, limitAmount) {\r\n  fetch(\r\n    `https://realty-in-us.p.rapidapi.com/properties/v2/list-for-sale?city=${cityName}&state_code=${stateName}&offset=0&limit=${limitAmount}&sort=relevance`,\r\n    {\r\n      method: 'GET',\r\n      headers: {\r\n        'x-rapidapi-host': \"realty-in-us.p.rapidapi.com\",\r\n        'x-rapidapi-key': \"58bfe67fd0msh66ab57128ff9b03p19516bjsn552c9cb81f7b\",\r\n      },\r\n    }\r\n  )\r\n    .then((response) => {\r\n      console.log(response)\r\n    })\r\n    .catch((err) => {\r\n      console.error(err)\r\n    })\r\n}\r\n\r\n// Create Element\r\nfunction makeElement(element, className) {\r\n  const newElement = document.createElement(element)\r\n  newElement.classList.add(className)\r\n  return newElement\r\n}\r\n\r\n// Select Element\r\nfunction selectElement(element) {\r\n  return document.querySelector(element)\r\n}\r\n\n\n//# sourceURL=webpack://rental-app/./src/rental.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/rental.js"]();
/******/ 	
/******/ })()
;