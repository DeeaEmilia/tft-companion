"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dnd-html5-backend */ \"./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var _context_TraitContext_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/TraitContext */ \"./src/context/TraitContext.jsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar.jsx\");\n/* harmony import */ var _components_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer.jsx */ \"./src/components/Footer.jsx\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_champions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/champions */ \"./src/data/champions.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// New component to handle the loading of champion data\nfunction LoadChampionsData() {\n    _s();\n    const { dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_TraitContext_jsx__WEBPACK_IMPORTED_MODULE_1__.TraitContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        _data_champions__WEBPACK_IMPORTED_MODULE_6__[\"default\"].forEach((champion)=>{\n            dispatch({\n                type: \"ADD_CHAMPION\",\n                champion: champion\n            });\n        });\n    }, [\n        dispatch\n    ]);\n    return null; // This component does not render anything\n}\n_s(LoadChampionsData, \"o3sFqHzzIboOoOF6b2FSmERiAhY=\");\n_c = LoadChampionsData;\n// eslint-disable-next-line react/prop-types\nfunction App(param) {\n    let { Component, pageProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_7__.DndProvider, {\n            backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__.HTML5Backend,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_TraitContext_jsx__WEBPACK_IMPORTED_MODULE_1__.TraitProvider, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\pages\\\\_app.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LoadChampionsData, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\pages\\\\_app.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\pages\\\\_app.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\pages\\\\_app.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\pages\\\\_app.jsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\pages\\\\_app.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c1 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c, _c1;\n$RefreshReg$(_c, \"LoadChampionsData\");\n$RefreshReg$(_c1, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2U7QUFDSztBQUNsQjtBQUNJO0FBRWhCO0FBRWdCO0FBQ1M7QUFDYjtBQUUxQyx1REFBdUQ7QUFDdkQsU0FBU1M7O0lBQ1AsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0wsaURBQVVBLENBQUNFLG1FQUFZQTtJQUU1Q0QsZ0RBQVNBLENBQUM7UUFDUkUsK0RBQWlCLENBQUMsQ0FBQ0k7WUFDakJGLFNBQVM7Z0JBQ1BHLE1BQU07Z0JBQ05ELFVBQVVBO1lBQ1o7UUFDRjtJQUNGLEdBQUc7UUFBQ0Y7S0FBUztJQUViLE9BQU8sTUFBTSwwQ0FBMEM7QUFDekQ7R0FiU0Q7S0FBQUE7QUFlVCw0Q0FBNEM7QUFDNUMsU0FBU0ssSUFBSSxLQUF3QjtRQUF4QixFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRSxHQUF4QjtJQUNYLHFCQUNFO2tCQUNFLDRFQUFDaEIsa0RBQVdBO1lBQUNpQixTQUFTaEIsaUVBQVlBO3NCQUNoQyw0RUFBQ0Msb0VBQWFBOztrQ0FDWiw4REFBQ0MsMERBQU1BOzs7OztrQ0FDUCw4REFBQ007Ozs7O2tDQUNELDhEQUFDTTt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7a0NBQ3hCLDhEQUFDWiw4REFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCO01BYlNVO0FBZVQsK0RBQWVBLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanN4PzRjNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtZG5kXCI7XG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tIFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIjtcbmltcG9ydCB7IFRyYWl0UHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dC9UcmFpdENvbnRleHQuanN4XCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXIuanN4XCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5cbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJhaXRDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvVHJhaXRDb250ZXh0XCI7XG5pbXBvcnQgY2hhbXBpb25zIGZyb20gXCIuLi9kYXRhL2NoYW1waW9uc1wiO1xuXG4vLyBOZXcgY29tcG9uZW50IHRvIGhhbmRsZSB0aGUgbG9hZGluZyBvZiBjaGFtcGlvbiBkYXRhXG5mdW5jdGlvbiBMb2FkQ2hhbXBpb25zRGF0YSgpIHtcbiAgY29uc3QgeyBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChUcmFpdENvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY2hhbXBpb25zLmZvckVhY2goKGNoYW1waW9uKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwiQUREX0NIQU1QSU9OXCIsXG4gICAgICAgIGNoYW1waW9uOiBjaGFtcGlvbixcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICByZXR1cm4gbnVsbDsgLy8gVGhpcyBjb21wb25lbnQgZG9lcyBub3QgcmVuZGVyIGFueXRoaW5nXG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxuICAgICAgICA8VHJhaXRQcm92aWRlcj5cbiAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgPExvYWRDaGFtcGlvbnNEYXRhIC8+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9UcmFpdFByb3ZpZGVyPlxuICAgICAgPC9EbmRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbIkRuZFByb3ZpZGVyIiwiSFRNTDVCYWNrZW5kIiwiVHJhaXRQcm92aWRlciIsIk5hdmJhciIsIkZvb3RlciIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJUcmFpdENvbnRleHQiLCJjaGFtcGlvbnMiLCJMb2FkQ2hhbXBpb25zRGF0YSIsImRpc3BhdGNoIiwiZm9yRWFjaCIsImNoYW1waW9uIiwidHlwZSIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImJhY2tlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n"));

/***/ })

});