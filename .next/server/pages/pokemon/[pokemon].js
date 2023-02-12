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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getStaticPaths() {\n    let paths = await fetch(\"https://pokeapi.co/api/v2/pokemon?limit=151\").then((res)=>res.json()).then((Pokemons)=>{\n        return Pokemons.results.map((pokemon)=>`/pokemon/${pokemon.name}`);\n    });\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    // the params,pokemon is the name of the variable beween [] in the file name\n    const Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`).then((res)=>res.json());\n    return {\n        props: {\n            Pokemon\n        }\n    };\n}\nfunction Pokemon({ Pokemon  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: Pokemon?.name\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"veiwport\",\n                        content: \"initial-scale=1.0 , width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Welcome \",\n                    Pokemon?.name,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: Pokemon?.sprites.front_default\n                    }, void 0, false, {\n                        fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nelson/testProjects/NextTestSite/pages/pokemon/[pokemon].js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pokemon);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2QjtBQUV0QixlQUFlQyxpQkFBaUI7SUFDckMsSUFBSUMsUUFBUSxNQUFNQyxNQUFNLCtDQUNyQkMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRyxXQUFhO1FBQ2xCLE9BQU9BLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFVBQVksQ0FBQyxTQUFTLEVBQUVBLFFBQVFDLElBQUksQ0FBQyxDQUFDO0lBQ3JFO0lBQ0YsT0FBTztRQUNMVDtRQUNBVSxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFQyxPQUFNLEVBQUUsRUFBRTtJQUMvQyw0RUFBNEU7SUFDNUUsTUFBTUMsVUFBVSxNQUFNWixNQUNwQixDQUFDLGtDQUFrQyxFQUFFVyxPQUFPSixPQUFPLENBQUMsQ0FBQyxFQUNyRE4sSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUk7SUFFeEIsT0FBTztRQUNMVSxPQUFPO1lBQ0xEO1FBQ0Y7SUFDRjtBQUNGLENBQUM7QUFFRCxTQUFTQSxRQUFRLEVBQUVBLFFBQU8sRUFBRSxFQUFFO0lBQzVCLHFCQUNFOzswQkFDRSw4REFBQ2Ysa0RBQUlBOztrQ0FDSCw4REFBQ2lCO2tDQUFPRixTQUFTSjs7Ozs7O2tDQUNqQiw4REFBQ087d0JBQ0NQLE1BQUs7d0JBQ0xRLFNBQVE7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ0M7O29CQUFJO29CQUNNTCxTQUFTSjtrQ0FDbEIsOERBQUNVO3dCQUFJQyxLQUFLUCxTQUFTUSxRQUFRQyxhQUFhOzs7Ozs7Ozs7Ozs7OztBQUloRDtBQUVBLGlFQUFlVCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHRlc3RzaXRlLy4vcGFnZXMvcG9rZW1vbi9bcG9rZW1vbl0uanM/NzJmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgbGV0IHBhdGhzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MTUxXCIpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbigoUG9rZW1vbnMpID0+IHtcbiAgICAgIHJldHVybiBQb2tlbW9ucy5yZXN1bHRzLm1hcCgocG9rZW1vbikgPT4gYC9wb2tlbW9uLyR7cG9rZW1vbi5uYW1lfWApO1xuICAgIH0pO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgLy8gdGhlIHBhcmFtcyxwb2tlbW9uIGlzIHRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSBiZXdlZW4gW10gaW4gdGhlIGZpbGUgbmFtZVxuICBjb25zdCBQb2tlbW9uID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3BhcmFtcy5wb2tlbW9ufWBcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIFBva2Vtb24sXG4gICAgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gUG9rZW1vbih7IFBva2Vtb24gfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntQb2tlbW9uPy5uYW1lfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZlaXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAgLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgV2VsY29tZSB7UG9rZW1vbj8ubmFtZX1cbiAgICAgICAgPGltZyBzcmM9e1Bva2Vtb24/LnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2tlbW9uO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIlBva2Vtb25zIiwicmVzdWx0cyIsIm1hcCIsInBva2Vtb24iLCJuYW1lIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsIlBva2Vtb24iLCJwcm9wcyIsInRpdGxlIiwibWV0YSIsImNvbnRlbnQiLCJkaXYiLCJpbWciLCJzcmMiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokemon].js\n");

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