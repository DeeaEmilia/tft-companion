"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/builder-page",{

/***/ "./src/components/Hexagon.jsx":
/*!************************************!*\
  !*** ./src/components/Hexagon.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_TraitContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TraitContext */ \"./src/context/TraitContext.jsx\");\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\n\n // replace '../context/TraitContext' with the actual path\nconst Hexagon = (param)=>{\n    let { id } = param;\n    var _findChampion;\n    _s();\n    const { dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TraitContext__WEBPACK_IMPORTED_MODULE_2__.TraitContext);\n    const findChampion = (pos)=>champions.find((champion)=>champion.position === pos);\n    const backgroundImage = ((_findChampion = findChampion(position)) === null || _findChampion === void 0 ? void 0 : _findChampion.icon) || null;\n    const [, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrop)(()=>({\n            accept: \"champion\",\n            drop: (item, monitor)=>{\n                if (monitor.didDrop()) {\n                    dispatch({\n                        type: \"SET_POSITION\",\n                        championId: item.id,\n                        position: id\n                    });\n                }\n            }\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"hexagon-border\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: drop,\n            style: {\n                backgroundSize: \"contain\",\n                width: \"100%\",\n                height: \"100%\",\n                clipPath: \"polygon(50% 0, 100% 23%, 100% 74%, 50% 100%, 0 75%, 0 24%)\",\n                boxSizing: \"border-box\"\n            },\n            onDoubleClick: ()=>dispatch({\n                    type: \"REMOVE_CHAMPION\",\n                    position: id\n                }),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"100%\",\n                height: \"100%\",\n                viewBox: \"0 0 100 100\",\n                fill: \"transparent\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                        className: \"hexagon\",\n                        points: \"2.1,73.8 2.1,26.2 43.6,2.3 85,26.2 85,73.8 43.6,97.7\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hexagon, \"BZpg90so38dLGQx8VLYwz5Z1wIs=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrop\n    ];\n});\n_c = Hexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hexagon);\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZXhhZ29uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsbUNBQW1DOztBQUNDO0FBQ0Q7QUFDb0IsQ0FBQyx5REFBeUQ7QUFFakgsTUFBTUcsVUFBVTtRQUFDLEVBQUVDLEVBQUUsRUFBRTtRQU1HQzs7SUFMeEIsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0wsaURBQVVBLENBQUNDLCtEQUFZQTtJQUU1QyxNQUFNRyxlQUFlLENBQUNFLE1BQ3BCQyxVQUFVQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsUUFBUSxLQUFLSjtJQUVyRCxNQUFNSyxrQkFBa0JQLEVBQUFBLGdCQUFBQSxhQUFhTSx1QkFBYk4sb0NBQUFBLGNBQXdCUSxJQUFJLEtBQUk7SUFFeEQsTUFBTSxHQUFHQyxLQUFLLEdBQUdkLGtEQUFPQSxDQUFDLElBQU87WUFDOUJlLFFBQVE7WUFDUkQsTUFBTSxDQUFDRSxNQUFNQztnQkFDWCxJQUFJQSxRQUFRQyxPQUFPLElBQUk7b0JBQ3JCWixTQUFTO3dCQUFFYSxNQUFNO3dCQUFnQkMsWUFBWUosS0FBS1osRUFBRTt3QkFBRU8sVUFBVVA7b0JBQUc7Z0JBQ3JFO1lBQ0Y7UUFDRjtJQUVBLHFCQUNFLDhEQUFDaUI7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNDO1lBQ0NDLEtBQUtWO1lBQ0xXLE9BQU87Z0JBQ0xDLGdCQUFnQjtnQkFDaEJDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFVBQ0U7Z0JBQ0ZDLFdBQVc7WUFDYjtZQUNBQyxlQUFlLElBQ2J6QixTQUFTO29CQUFFYSxNQUFNO29CQUFtQlIsVUFBVVA7Z0JBQUc7c0JBRW5ELDRFQUFDNEI7Z0JBQ0NMLE9BQU07Z0JBQ05DLFFBQU87Z0JBQ1BLLFNBQVE7Z0JBQ1JDLE1BQUs7Z0JBQ0xDLE9BQU07MEJBQ04sNEVBQUNDOzhCQUNDLDRFQUFDQzt3QkFDQ2YsV0FBVTt3QkFDVmdCLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0dBaERNbkM7O1FBUWFILDhDQUFPQTs7O0tBUnBCRztBQWtETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZXhhZ29uLmpzeD8wY2M2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gXCJyZWFjdC1kbmRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUcmFpdENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9UcmFpdENvbnRleHRcIjsgLy8gcmVwbGFjZSAnLi4vY29udGV4dC9UcmFpdENvbnRleHQnIHdpdGggdGhlIGFjdHVhbCBwYXRoXHJcblxyXG5jb25zdCBIZXhhZ29uID0gKHsgaWQgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoVHJhaXRDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgZmluZENoYW1waW9uID0gKHBvcykgPT5cclxuICAgIGNoYW1waW9ucy5maW5kKChjaGFtcGlvbikgPT4gY2hhbXBpb24ucG9zaXRpb24gPT09IHBvcyk7XHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IGZpbmRDaGFtcGlvbihwb3NpdGlvbik/Lmljb24gfHwgbnVsbDtcclxuXHJcbiAgY29uc3QgWywgZHJvcF0gPSB1c2VEcm9wKCgpID0+ICh7XHJcbiAgICBhY2NlcHQ6IFwiY2hhbXBpb25cIixcclxuICAgIGRyb3A6IChpdGVtLCBtb25pdG9yKSA9PiB7XHJcbiAgICAgIGlmIChtb25pdG9yLmRpZERyb3AoKSkge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfUE9TSVRJT05cIiwgY2hhbXBpb25JZDogaXRlbS5pZCwgcG9zaXRpb246IGlkIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhleGFnb24tYm9yZGVyXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2Ryb3B9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBjbGlwUGF0aDpcclxuICAgICAgICAgICAgXCJwb2x5Z29uKDUwJSAwLCAxMDAlIDIzJSwgMTAwJSA3NCUsIDUwJSAxMDAlLCAwIDc1JSwgMCAyNCUpXCIsXHJcbiAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT5cclxuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJSRU1PVkVfQ0hBTVBJT05cIiwgcG9zaXRpb246IGlkIH0pXHJcbiAgICAgICAgfT5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxyXG4gICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhleGFnb25cIlxyXG4gICAgICAgICAgICAgIHBvaW50cz1cIjIuMSw3My44IDIuMSwyNi4yIDQzLjYsMi4zIDg1LDI2LjIgODUsNzMuOCA0My42LDk3LjdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGV4YWdvbjtcclxuIl0sIm5hbWVzIjpbInVzZURyb3AiLCJ1c2VDb250ZXh0IiwiVHJhaXRDb250ZXh0IiwiSGV4YWdvbiIsImlkIiwiZmluZENoYW1waW9uIiwiZGlzcGF0Y2giLCJwb3MiLCJjaGFtcGlvbnMiLCJmaW5kIiwiY2hhbXBpb24iLCJwb3NpdGlvbiIsImJhY2tncm91bmRJbWFnZSIsImljb24iLCJkcm9wIiwiYWNjZXB0IiwiaXRlbSIsIm1vbml0b3IiLCJkaWREcm9wIiwidHlwZSIsImNoYW1waW9uSWQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwicmVmIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpcFBhdGgiLCJib3hTaXppbmciLCJvbkRvdWJsZUNsaWNrIiwic3ZnIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImciLCJwb2x5Z29uIiwicG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hexagon.jsx\n"));

/***/ })

});