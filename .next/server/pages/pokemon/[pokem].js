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
exports.id = "pages/pokemon/[pokem]";
exports.ids = ["pages/pokemon/[pokem]"];
exports.modules = {

/***/ "./pages/pokemon/[pokem].js":
/*!**********************************!*\
  !*** ./pages/pokemon/[pokem].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getStaticPaths() {\n    let paths = await fetch(\"https://pokeapi.co/api/v2/pokemon?limit=151\").then((res)=>res.json()).then((Pokemons)=>{\n        return Pokemons.results.map((pokemon)=>`/pokemon/${pokemon.name}`);\n    });\n    console.log(paths);\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokem}`).then((res)=>res.json());\n    return {\n        props: {\n            Pokemon\n        }\n    };\n}\nfunction Pokemon({ Pokemon  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: Pokemon?.name\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokem].js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"veiwport\",\n                        content: \"initial-scale=1.0 , width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokem].js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokem].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Welcome \",\n                    Pokemon?.name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: Pokemon?.sprites.front_default\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokem].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokem].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokemon);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlbV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNkI7QUFFdEIsZUFBZUMsaUJBQWlCO0lBQ3JDLElBQUlDLFFBQVEsTUFBTUMsTUFBTSwrQ0FDckJDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0csV0FBYTtRQUNsQixPQUFPQSxTQUFTQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxVQUFZLENBQUMsU0FBUyxFQUFFQSxRQUFRQyxJQUFJLENBQUMsQ0FBQztJQUNyRTtJQUNGQyxRQUFRQyxHQUFHLENBQUNYO0lBQ1osT0FBTztRQUNMQTtRQUNBWSxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFQyxPQUFNLEVBQUUsRUFBRTtJQUMvQyxNQUFNQyxVQUFVLE1BQU1kLE1BQ3BCLENBQUMsa0NBQWtDLEVBQUVhLE9BQU9FLEtBQUssQ0FBQyxDQUFDLEVBQ25EZCxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUV4QixPQUFPO1FBQ0xhLE9BQU87WUFDTEY7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVELFNBQVNBLFFBQVEsRUFBRUEsUUFBTyxFQUFFLEVBQUU7SUFDNUIscUJBQ0U7OzBCQUNFLDhEQUFDakIsa0RBQUlBOztrQ0FDSCw4REFBQ29CO2tDQUFPSCxTQUFTTjs7Ozs7O2tDQUNqQiw4REFBQ1U7d0JBQ0NWLE1BQUs7d0JBQ0xXLFNBQVE7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ0M7O29CQUFJO29CQUNNTixTQUFTTjtrQ0FDbEIsOERBQUNhO3dCQUFJQyxLQUFLUixTQUFTUyxRQUFRQyxhQUFhOzs7Ozs7Ozs7Ozs7OztBQUloRDtBQUVBLGlFQUFlVixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHRlc3RzaXRlLy4vcGFnZXMvcG9rZW1vbi9bcG9rZW1dLmpzP2Q1ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGxldCBwYXRocyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTE1MVwiKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oKFBva2Vtb25zKSA9PiB7XG4gICAgICByZXR1cm4gUG9rZW1vbnMucmVzdWx0cy5tYXAoKHBva2Vtb24pID0+IGAvcG9rZW1vbi8ke3Bva2Vtb24ubmFtZX1gKTtcbiAgICB9KTtcbiAgY29uc29sZS5sb2cocGF0aHMpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgUG9rZW1vbiA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtwYXJhbXMucG9rZW19YFxuICApLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgUG9rZW1vbixcbiAgICB9LFxuICB9O1xufVxuXG5mdW5jdGlvbiBQb2tlbW9uKHsgUG9rZW1vbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e1Bva2Vtb24/Lm5hbWV9PC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmVpd3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2PlxuICAgICAgICBXZWxjb21lIHtQb2tlbW9uPy5uYW1lfVxuICAgICAgICA8aW1nIHNyYz17UG9rZW1vbj8uc3ByaXRlcy5mcm9udF9kZWZhdWx0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBva2Vtb247XG4iXSwibmFtZXMiOlsiSGVhZCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiUG9rZW1vbnMiLCJyZXN1bHRzIiwibWFwIiwicG9rZW1vbiIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsIlBva2Vtb24iLCJwb2tlbSIsInByb3BzIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImRpdiIsImltZyIsInNyYyIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokem].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/[pokem].js"));
module.exports = __webpack_exports__;

})();