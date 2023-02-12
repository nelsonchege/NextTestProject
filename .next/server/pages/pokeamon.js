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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Pokeamon({ Pokeamon  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: Pokeamon?.name\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokeamon.js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"veiwport\",\n                        content: \"initial-scale=1.0 , width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokeamon.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokeamon.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Welcome \",\n                    Pokeamon?.name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: Pokeamon?.sprites.front_default\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokeamon.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokeamon.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticProps() {\n    const res = await fetch(\"https://pokeapi.co/api/v2/pokemon/charmander\");\n    const Pokeamon = await res.json();\n    return {\n        props: {\n            Pokeamon\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokeamon);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlYW1vbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZCO0FBRTdCLFNBQVNDLFNBQVMsRUFBRUEsU0FBUSxFQUFFLEVBQUU7SUFDOUIscUJBQ0U7OzBCQUNFLDhEQUFDRCxrREFBSUE7O2tDQUNILDhEQUFDRTtrQ0FBT0QsVUFBVUU7Ozs7OztrQ0FDbEIsOERBQUNDO3dCQUNDRCxNQUFLO3dCQUNMRSxTQUFROzs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNDOztvQkFBSTtvQkFDTUwsVUFBVUU7a0NBQ25CLDhEQUFDSTt3QkFBSUMsS0FBS1AsVUFBVVEsUUFBUUMsYUFBYTs7Ozs7Ozs7Ozs7Ozs7QUFJakQ7QUFFTyxlQUFlQyxpQkFBaUI7SUFDckMsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO0lBQ3hCLE1BQU1aLFdBQVcsTUFBTVcsSUFBSUUsSUFBSTtJQUUvQixPQUFPO1FBQ0xDLE9BQU87WUFDTGQ7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVELGlFQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHRlc3RzaXRlLy4vcGFnZXMvcG9rZWFtb24uanM/NmQ1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmZ1bmN0aW9uIFBva2VhbW9uKHsgUG9rZWFtb24gfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntQb2tlYW1vbj8ubmFtZX08L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2ZWl3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wICwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIFdlbGNvbWUge1Bva2VhbW9uPy5uYW1lfVxuICAgICAgICA8aW1nIHNyYz17UG9rZWFtb24/LnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uL2NoYXJtYW5kZXJcIik7XG4gIGNvbnN0IFBva2VhbW9uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBQb2tlYW1vbixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2tlYW1vbjtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUG9rZWFtb24iLCJ0aXRsZSIsIm5hbWUiLCJtZXRhIiwiY29udGVudCIsImRpdiIsImltZyIsInNyYyIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokeamon.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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