"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/pokeamon";
exports.ids = ["pages/pokeamon"];
exports.modules = {

/***/ "./pages/pokeamon.js":
/*!***************************!*\
  !*** ./pages/pokeamon.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Pokeamon({ Pokeamon  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Welcome \",\n            Pokeamon?.name,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: Pokeamon?.sprites.front_default\n            }, void 0, false, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokeamon.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokeamon.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps() {\n    const res = await fetch(\"https://pokeapi.co/api/v2/pokemon/charmander\");\n    const Pokeamon = await res.json();\n    return {\n        props: {\n            Pokeamon\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokeamon);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlYW1vbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLFNBQVMsRUFBRUEsU0FBUSxFQUFFLEVBQUU7SUFDOUIscUJBQ0UsOERBQUNDOztZQUFJO1lBQ01ELFVBQVVFOzBCQUNuQiw4REFBQ0M7Z0JBQUlDLEtBQUtKLFVBQVVLLFFBQVFDLGFBQWE7Ozs7Ozs7Ozs7OztBQUcvQztBQUVPLGVBQWVDLGlCQUFpQjtJQUNyQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU07SUFDeEIsTUFBTVQsV0FBVyxNQUFNUSxJQUFJRSxJQUFJO0lBRS9CLE9BQU87UUFDTEMsT0FBTztZQUNMWDtRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRUQsaUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dGVzdHNpdGUvLi9wYWdlcy9wb2tlYW1vbi5qcz82ZDU5Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFBva2VhbW9uKHsgUG9rZWFtb24gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBXZWxjb21lIHtQb2tlYW1vbj8ubmFtZX1cbiAgICAgIDxpbWcgc3JjPXtQb2tlYW1vbj8uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uL2NoYXJtYW5kZXJcIik7XG4gIGNvbnN0IFBva2VhbW9uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBQb2tlYW1vbixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2tlYW1vbjtcbiJdLCJuYW1lcyI6WyJQb2tlYW1vbiIsImRpdiIsIm5hbWUiLCJpbWciLCJzcmMiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokeamon.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokeamon.js"));
module.exports = __webpack_exports__;

})();