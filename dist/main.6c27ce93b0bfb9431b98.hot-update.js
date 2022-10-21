"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatewebpack2_0"]("main",{

/***/ "./src/components/scores/scoresLi.js":
/*!*******************************************!*\
  !*** ./src/components/scores/scoresLi.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayScores\": () => (/* binding */ displayScores),\n/* harmony export */   \"results\": () => (/* binding */ results)\n/* harmony export */ });\n/* harmony import */ var _scoresLi_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scoresLi.scss */ \"./src/components/scores/scoresLi.scss\");\n\nvar results = [// {\n  //   user: 'John',\n  //   score: 100,\n  // },\n  // {\n  //   user: 'Mike',\n  //   score: 100,\n  // },\n  // {\n  //   user: 'Luigi',\n  //   score: 100,\n  // },\n  // {\n  //   user: 'Robert',\n  //   score: 100,\n  // },\n  // {\n  //   user: 'Marlon',\n  //   score: 100,\n  // },\n  // {\n  //   user: 'Ann Q',\n  //   score: 100,\n  // },\n  // {\n  //   user: 'John',\n  //   score: 100,\n  // },\n];\n\nvar displayScores = function displayScores(results) {\n  if (results != null) {\n    results.forEach(function (result) {\n      var ul = document.querySelector('.leaderboard__list');\n      var li = document.createElement('li');\n      li.classList.add('leaderboard__li');\n      li.innerHTML = \"\".concat(result.user, \": \").concat(result.score);\n      ul.appendChild(li);\n    });\n  }\n};\n\n\n\n//# sourceURL=webpack://webpack2.0/./src/components/scores/scoresLi.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4a618a66e7070daf50cb")
/******/ })();
/******/ 
/******/ }
);