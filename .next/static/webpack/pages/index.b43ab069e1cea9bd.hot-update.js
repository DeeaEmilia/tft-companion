"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hexagon.jsx":
/*!************************************!*\
  !*** ./src/components/Hexagon.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Hexagon = ()=>{\n    _s();\n    const [backgroundImage, setBackgroundImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrop)(()=>({\n            accept: \"champion\",\n            drop: (item)=>setBackgroundImage(item.icon)\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: drop,\n        style: {\n            backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n            backgroundSize: \"cover\",\n            width: \"100px\",\n            height: \"100px\",\n            clipPath: \"polygon(50% 0, 100% 23%, 100% 74%, 50% 100%, 0 75%, 0 24%)\",\n            border: \"4px solid grey\",\n            boxSizing: \"border-box\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            width: \"100\",\n            height: \"100\",\n            viewBox: \"0 0 100 100\",\n            fill: \"transparent\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                    className: \"hexagon\",\n                    points: \"2.1,73.8 2.1,26.2 43.6,2.3 85,26.2 85,73.8 43.6,97.7\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hexagon, \"ixYE/mJE0aAkU/EL6yEIW7R9fCc=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrop\n    ];\n});\n_c = Hexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hexagon);\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZXhhZ29uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUNIO0FBRWpDLE1BQU1FLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHSCwrQ0FBUUEsQ0FBQztJQUV2RCxNQUFNLEdBQUdJLEtBQUssR0FBR0wsa0RBQU9BLENBQUMsSUFBTztZQUM5Qk0sUUFBUTtZQUNSRCxNQUFNLENBQUNFLE9BQVNILG1CQUFtQkcsS0FBS0MsSUFBSTtRQUM5QztJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxLQUFLTDtRQUNMTSxPQUFPO1lBQ0xSLGlCQUFpQixPQUF1QixPQUFoQkEsaUJBQWdCO1lBQ3hDUyxnQkFBZ0I7WUFDaEJDLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsV0FBVztRQUNiO2tCQUNBLDRFQUFDQztZQUNDTCxPQUFNO1lBQ05DLFFBQU87WUFDUEssU0FBUTtZQUNSQyxNQUFLO1lBQ0xDLE9BQU07c0JBQ04sNEVBQUNDOzBCQUNDLDRFQUFDQztvQkFDQ0MsV0FBVTtvQkFDVkMsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTW5CO0dBbkNNdkI7O1FBR2FGLDhDQUFPQTs7O0tBSHBCRTtBQXFDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZXhhZ29uLmpzeD8wY2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURyb3AgfSBmcm9tIFwicmVhY3QtZG5kXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIZXhhZ29uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtiYWNrZ3JvdW5kSW1hZ2UsIHNldEJhY2tncm91bmRJbWFnZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgWywgZHJvcF0gPSB1c2VEcm9wKCgpID0+ICh7XHJcbiAgICBhY2NlcHQ6IFwiY2hhbXBpb25cIixcclxuICAgIGRyb3A6IChpdGVtKSA9PiBzZXRCYWNrZ3JvdW5kSW1hZ2UoaXRlbS5pY29uKSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17ZHJvcH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oNTAlIDAsIDEwMCUgMjMlLCAxMDAlIDc0JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDI0JSlcIixcclxuICAgICAgICBib3JkZXI6IFwiNHB4IHNvbGlkIGdyZXlcIixcclxuICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICB9fT5cclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDBcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXHJcbiAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgPGc+XHJcbiAgICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoZXhhZ29uXCJcclxuICAgICAgICAgICAgcG9pbnRzPVwiMi4xLDczLjggMi4xLDI2LjIgNDMuNiwyLjMgODUsMjYuMiA4NSw3My44IDQzLjYsOTcuN1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9zdmc+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGV4YWdvbjtcclxuIl0sIm5hbWVzIjpbInVzZURyb3AiLCJ1c2VTdGF0ZSIsIkhleGFnb24iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzZXRCYWNrZ3JvdW5kSW1hZ2UiLCJkcm9wIiwiYWNjZXB0IiwiaXRlbSIsImljb24iLCJkaXYiLCJyZWYiLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjbGlwUGF0aCIsImJvcmRlciIsImJveFNpemluZyIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJnIiwicG9seWdvbiIsImNsYXNzTmFtZSIsInBvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Hexagon.jsx\n"));

/***/ })

});