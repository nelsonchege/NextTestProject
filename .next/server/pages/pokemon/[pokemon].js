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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Pokemon({ Pokemon  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: Pokemon?.name\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"veiwport\",\n                        content: \"initial-scale=1.0 , width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Welcome \",\n                    Pokemon?.name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: Pokemon?.sprites.front_default\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticPaths() {\n    let paths = await fetch(\"https://pokeapi.co/api/v2/pokemon?limit=151\").then((res)=>res.json()).then((Pokemons)=>{\n        return Pokemons.results.map((pokemon)=>`/pokemon/${pokemon.name}`);\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`).then((res)=>res.json());\n    return {\n        props: {\n            Pokemon\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokemon);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUU3QixTQUFTQyxRQUFRLEVBQUVBLFFBQU8sRUFBRSxFQUFFO0lBQzVCLHFCQUNFOzswQkFDRSw4REFBQ0Qsa0RBQUlBOztrQ0FDSCw4REFBQ0U7a0NBQU9ELFNBQVNFOzs7Ozs7a0NBQ2pCLDhEQUFDQzt3QkFDQ0QsTUFBSzt3QkFDTEUsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDQzs7b0JBQUk7b0JBQ01MLFNBQVNFO2tDQUNsQiw4REFBQ0k7d0JBQUlDLEtBQUtQLFNBQVNRLFFBQVFDLGFBQWE7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0FBRU8sZUFBZUMsaUJBQWlCO0lBQ3JDLElBQUlDLFFBQVEsTUFBTUMsTUFBTSwrQ0FDckJDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0csV0FBYTtRQUNsQixPQUFPQSxTQUFTQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxVQUFZLENBQUMsU0FBUyxFQUFFQSxRQUFRakIsSUFBSSxDQUFDLENBQUM7SUFDckU7SUFFRixPQUFPO1FBQ0xTO1FBQ0FTLFVBQVUsS0FBSztJQUNqQjtBQUNGLENBQUM7QUFFTSxlQUFlQyxlQUFlLEVBQUVDLE9BQU0sRUFBRSxFQUFFO0lBQy9DLE1BQU10QixVQUFVLE1BQU1ZLE1BQ3BCLENBQUMsa0NBQWtDLEVBQUVVLE9BQU9ILE9BQU8sQ0FBQyxDQUFDLEVBQ3JETixJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUV4QixPQUFPO1FBQ0xRLE9BQU87WUFDTHZCO1FBQ0Y7SUFDRjtBQUNGLENBQUM7QUFFRCxpRUFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHR0ZXN0c2l0ZS8uL3BhZ2VzL3Bva2Vtb24vW3Bva2Vtb25dLmpzPzcyZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5mdW5jdGlvbiBQb2tlbW9uKHsgUG9rZW1vbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e1Bva2Vtb24/Lm5hbWV9PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmVpd3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICBXZWxjb21lIHtQb2tlbW9uPy5uYW1lfVxuICAgICAgICA8aW1nIHNyYz17UG9rZW1vbj8uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgbGV0IHBhdGhzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MTUxXCIpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoUG9rZW1vbnMpID0+IHtcbiAgICAgIHJldHVybiBQb2tlbW9ucy5yZXN1bHRzLm1hcCgocG9rZW1vbikgPT4gYC9wb2tlbW9uLyR7cG9rZW1vbi5uYW1lfWApO1xuICAgIH0pO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCBQb2tlbW9uID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3BhcmFtcy5wb2tlbW9ufWBcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIFBva2Vtb24sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vbjtcbiJdLCJuYW1lcyI6WyJIZWFkIiwiUG9rZW1vbiIsInRpdGxlIiwibmFtZSIsIm1ldGEiLCJjb250ZW50IiwiZGl2IiwiaW1nIiwic3JjIiwic3ByaXRlcyIsImZyb250X2RlZmF1bHQiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlBva2Vtb25zIiwicmVzdWx0cyIsIm1hcCIsInBva2Vtb24iLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokemon].js\n");

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