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

/***/ "./pages/pokemon/pokemon.module.css":
/*!******************************************!*\
  !*** ./pages/pokemon/pokemon.module.css ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"pokemon_container__UwWxP\",\n\t\"img\": \"pokemon_img__AA8zR\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL3Bva2Vtb24ubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHRlc3RzaXRlLy4vcGFnZXMvcG9rZW1vbi9wb2tlbW9uLm1vZHVsZS5jc3M/MDAzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwb2tlbW9uX2NvbnRhaW5lcl9fVXdXeFBcIixcblx0XCJpbWdcIjogXCJwb2tlbW9uX2ltZ19fQUE4elJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pokemon/pokemon.module.css\n");

/***/ }),

/***/ "./pages/pokemon/[pokemon].js":
/*!************************************!*\
  !*** ./pages/pokemon/[pokemon].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokemon.module.css */ \"./pages/pokemon/pokemon.module.css\");\n/* harmony import */ var _pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pokemon_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getStaticPaths() {\n    let paths = await fetch(\"https://pokeapi.co/api/v2/pokemon?limit=151\").then((res)=>res.json()).then((Pokemons)=>{\n        return Pokemons.results.map((pokemon)=>`/pokemon/${pokemon.name}`);\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    // the params,pokemon is the name of the variable beween [] in the file name\n    const Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`).then((res)=>res.json());\n    return {\n        props: {\n            Pokemon\n        }\n    };\n}\nfunction Pokemon({ Pokemon  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: Pokemon?.name\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"veiwport\",\n                        content: \"initial-scale=1.0 , width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"Welcome \",\n                            Pokemon?.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: Pokemon?.sprites.front_default,\n                                className: (_pokemon_module_css__WEBPACK_IMPORTED_MODULE_2___default().img)\n                            }, void 0, false, {\n                                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokemon);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ2E7QUFFbkMsZUFBZUUsaUJBQWlCO0lBQ3JDLElBQUlDLFFBQVEsTUFBTUMsTUFBTSwrQ0FDckJDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0csV0FBYTtRQUNsQixPQUFPQSxTQUFTQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxVQUFZLENBQUMsU0FBUyxFQUFFQSxRQUFRQyxJQUFJLENBQUMsQ0FBQztJQUNyRTtJQUNGLE9BQU87UUFDTFQ7UUFDQVUsVUFBVSxLQUFLO0lBQ2pCO0FBQ0YsQ0FBQztBQUVNLGVBQWVDLGVBQWUsRUFBRUMsT0FBTSxFQUFFLEVBQUU7SUFDL0MsNEVBQTRFO0lBQzVFLE1BQU1DLFVBQVUsTUFBTVosTUFDcEIsQ0FBQyxrQ0FBa0MsRUFBRVcsT0FBT0osT0FBTyxDQUFDLENBQUMsRUFDckROLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBRXhCLE9BQU87UUFDTFUsT0FBTztZQUNMRDtRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRUQsU0FBU0EsUUFBUSxFQUFFQSxRQUFPLEVBQUUsRUFBRTtJQUM1QixxQkFDRTs7MEJBQ0UsOERBQUNoQixrREFBSUE7O2tDQUNILDhEQUFDa0I7a0NBQU9GLFNBQVNKOzs7Ozs7a0NBQ2pCLDhEQUFDTzt3QkFDQ1AsTUFBSzt3QkFDTFEsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdaLDhEQUFDQztnQkFBSUMsV0FBV3JCLHNFQUFnQjs7a0NBQzlCLDhEQUFDb0I7OzRCQUFJOzRCQUFTTCxTQUFTSjs7Ozs7OztrQ0FDdkIsOERBQUNTOzs0QkFDRTswQ0FDRCw4REFBQ0c7Z0NBQUlDLEtBQUtULFNBQVNVLFFBQVFDLGFBQWE7Z0NBQUVMLFdBQVdyQixnRUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekU7QUFFQSxpRUFBZWUsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHR0ZXN0c2l0ZS8uL3BhZ2VzL3Bva2Vtb24vW3Bva2Vtb25dLmpzPzcyZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9wb2tlbW9uLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBsZXQgcGF0aHMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTFcIilcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChQb2tlbW9ucykgPT4ge1xuICAgICAgcmV0dXJuIFBva2Vtb25zLnJlc3VsdHMubWFwKChwb2tlbW9uKSA9PiBgL3Bva2Vtb24vJHtwb2tlbW9uLm5hbWV9YCk7XG4gICAgfSk7XG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAvLyB0aGUgcGFyYW1zLHBva2Vtb24gaXMgdGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIGJld2VlbiBbXSBpbiB0aGUgZmlsZSBuYW1lXG4gIGNvbnN0IFBva2Vtb24gPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cGFyYW1zLnBva2Vtb259YFxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgUG9rZW1vbixcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBQb2tlbW9uKHsgUG9rZW1vbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e1Bva2Vtb24/Lm5hbWV9PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmVpd3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXY+V2VsY29tZSB7UG9rZW1vbj8ubmFtZX08L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPGltZyBzcmM9e1Bva2Vtb24/LnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlBva2Vtb25zIiwicmVzdWx0cyIsIm1hcCIsInBva2Vtb24iLCJuYW1lIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsIlBva2Vtb24iLCJwcm9wcyIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbWciLCJzcmMiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokemon].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
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