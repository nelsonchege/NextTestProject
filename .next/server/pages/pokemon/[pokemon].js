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
exports.id = "pages/pokemon/[pokemon]";
exports.ids = ["pages/pokemon/[pokemon]"];
exports.modules = {

/***/ "./pages/pokemon/[pokemon].js":
/*!************************************!*\
  !*** ./pages/pokemon/[pokemon].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getStaticPaths() {\n    let paths = await fetch(\"https://pokeapi.co/api/v2/pokemon?limit=151\").then((res)=>res.json()).then((Pokemons)=>{\n        console.log(Pokemons);\n        return Pokemons.results.map((pokemon)=>`/pokemon/${pokemon.name}`);\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`).then((res)=>res.json());\n    return {\n        props: {\n            Pokemon\n        }\n    };\n}\nfunction Pokemon({ Pokemon  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: Pokemon?.name\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"veiwport\",\n                        content: \"initial-scale=1.0 , width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Welcome \",\n                    Pokemon?.name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: Pokemon?.sprites.front_default\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokemon);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUV0QixlQUFlQyxpQkFBaUI7SUFDckMsSUFBSUMsUUFBUSxNQUFNQyxNQUFNLCtDQUNyQkMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRyxXQUFhO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osT0FBT0EsU0FBU0csT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsVUFBWSxDQUFDLFNBQVMsRUFBRUEsUUFBUUMsSUFBSSxDQUFDLENBQUM7SUFDckU7SUFFRixPQUFPO1FBQ0xYO1FBQ0FZLFVBQVUsS0FBSztJQUNqQjtBQUNGLENBQUM7QUFFTSxlQUFlQyxlQUFlLEVBQUVDLE9BQU0sRUFBRSxFQUFFO0lBQy9DLE1BQU1DLFVBQVUsTUFBTWQsTUFDcEIsQ0FBQyxrQ0FBa0MsRUFBRWEsT0FBT0osT0FBTyxDQUFDLENBQUMsRUFDckRSLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBRXhCLE9BQU87UUFDTFksT0FBTztZQUNMRDtRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRUQsU0FBU0EsUUFBUSxFQUFFQSxRQUFPLEVBQUUsRUFBRTtJQUM1QixxQkFDRTs7MEJBQ0UsOERBQUNqQixrREFBSUE7O2tDQUNILDhEQUFDbUI7a0NBQU9GLFNBQVNKOzs7Ozs7a0NBQ2pCLDhEQUFDTzt3QkFDQ1AsTUFBSzt3QkFDTFEsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDQzs7b0JBQUk7b0JBQ01MLFNBQVNKO2tDQUNsQiw4REFBQ1U7d0JBQUlDLEtBQUtQLFNBQVNRLFFBQVFDLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0FBRUEsaUVBQWVULE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dGVzdHNpdGUvLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcz83MmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBsZXQgcGF0aHMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTFcIilcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChQb2tlbW9ucykgPT4ge1xuICAgICAgY29uc29sZS5sb2coUG9rZW1vbnMpO1xuICAgICAgcmV0dXJuIFBva2Vtb25zLnJlc3VsdHMubWFwKChwb2tlbW9uKSA9PiBgL3Bva2Vtb24vJHtwb2tlbW9uLm5hbWV9YCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IFBva2Vtb24gPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cGFyYW1zLnBva2Vtb259YFxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgUG9rZW1vbixcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBQb2tlbW9uKHsgUG9rZW1vbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e1Bva2Vtb24/Lm5hbWV9PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmVpd3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICBXZWxjb21lIHtQb2tlbW9uPy5uYW1lfVxuICAgICAgICA8aW1nIHNyYz17UG9rZW1vbj8uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb247XG4iXSwibmFtZXMiOlsiSGVhZCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiUG9rZW1vbnMiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0cyIsIm1hcCIsInBva2Vtb24iLCJuYW1lIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsIlBva2Vtb24iLCJwcm9wcyIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJkaXYiLCJpbWciLCJzcmMiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokemon].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[pokemon].js"));
module.exports = __webpack_exports__;

})();