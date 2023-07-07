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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var _context_TraitContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TraitContext */ \"./src/context/TraitContext.jsx\");\n/* harmony import */ var _context_ChampionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ChampionContext */ \"./src/context/ChampionContext.jsx\");\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Hexagon = (param)=>{\n    let { position } = param;\n    var _findChampion;\n    _s();\n    const { champions, dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TraitContext__WEBPACK_IMPORTED_MODULE_2__.TraitContext);\n    const findChampion = (pos)=>champions.find((champion)=>champion.position === pos);\n    const backgroundImage = ((_findChampion = findChampion(position)) === null || _findChampion === void 0 ? void 0 : _findChampion.icon) || null;\n    const [, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop)(()=>({\n            accept: \"champion\",\n            drop: (item)=>{\n                dispatch({\n                    type: \"ADD_CHAMPION\",\n                    champion: {\n                        ...item,\n                        position\n                    }\n                });\n            }\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"hexagon-border\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: drop,\n            style: {\n                backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n                backgroundSize: \"contain\",\n                width: \"100%\",\n                height: \"100%\",\n                clipPath: \"polygon(50% 0, 100% 23%, 100% 74%, 50% 100%, 0 75%, 0 24%)\",\n                boxSizing: \"border-box\"\n            },\n            onDoubleClick: ()=>dispatch({\n                    type: \"REMOVE_CHAMPION\",\n                    champion: findChampion(position)\n                }),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"100%\",\n                height: \"100%\",\n                viewBox: \"0 0 100 100\",\n                fill: \"transparent\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                        className: \"hexagon\",\n                        points: \"2.1,73.8 2.1,26.2 43.6,2.3 85,26.2 85,73.8 43.6,97.7\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hexagon, \"l7re2zgK/mQgwOORAe8zwddq0EY=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop\n    ];\n});\n_c = Hexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hexagon);\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZXhhZ29uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1DQUFtQzs7QUFDQTtBQUNDO0FBQ21CO0FBQ007QUFFN0QsTUFBTUksVUFBVTtRQUFDLEVBQUVDLFFBQVEsRUFBRTtRQU1IQzs7SUFMeEIsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRSxHQUFHUixpREFBVUEsQ0FBQ0UsK0RBQVlBO0lBRXZELE1BQU1JLGVBQWUsQ0FBQ0csTUFDcEJGLFVBQVVHLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTTixRQUFRLEtBQUtJO0lBRXJELE1BQU1HLGtCQUFrQk4sRUFBQUEsZ0JBQUFBLGFBQWFELHVCQUFiQyxvQ0FBQUEsY0FBd0JPLElBQUksS0FBSTtJQUV4RCxNQUFNLEdBQUdDLEtBQUssR0FBR2Isa0RBQU9BLENBQUMsSUFBTztZQUM5QmMsUUFBUTtZQUNSRCxNQUFNLENBQUNFO2dCQUNMUixTQUFTO29CQUFFUyxNQUFNO29CQUFnQk4sVUFBVTt3QkFBRSxHQUFHSyxJQUFJO3dCQUFFWDtvQkFBUztnQkFBRTtZQUNuRTtRQUNGO0lBRUEscUJBQ0UsOERBQUNhO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUNDQyxLQUFLUDtZQUNMUSxPQUFPO2dCQUNMVixpQkFBaUIsT0FBdUIsT0FBaEJBLGlCQUFnQjtnQkFDeENXLGdCQUFnQjtnQkFDaEJDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFVBQ0U7Z0JBQ0ZDLFdBQVc7WUFDYjtZQUNBQyxlQUFlLElBQ2JwQixTQUFTO29CQUNQUyxNQUFNO29CQUNOTixVQUFVTCxhQUFhRDtnQkFDekI7c0JBRUYsNEVBQUN3QjtnQkFDQ0wsT0FBTTtnQkFDTkMsUUFBTztnQkFDUEssU0FBUTtnQkFDUkMsTUFBSztnQkFDTEMsT0FBTTswQkFDTiw0RUFBQ0M7OEJBQ0MsNEVBQUNDO3dCQUNDZixXQUFVO3dCQUNWZ0IsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckI7R0FsRE0vQjs7UUFRYUgsOENBQU9BOzs7S0FScEJHO0FBb0ROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hleGFnb24uanN4PzBjYzYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURyb3AgfSBmcm9tIFwicmVhY3QtZG5kXCI7XHJcbmltcG9ydCB7IFRyYWl0Q29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1RyYWl0Q29udGV4dFwiO1xyXG5pbXBvcnQgeyBDaGFtcGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9DaGFtcGlvbkNvbnRleHRcIjtcclxuXHJcbmNvbnN0IEhleGFnb24gPSAoeyBwb3NpdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgeyBjaGFtcGlvbnMsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFRyYWl0Q29udGV4dCk7XHJcblxyXG4gIGNvbnN0IGZpbmRDaGFtcGlvbiA9IChwb3MpID0+XHJcbiAgICBjaGFtcGlvbnMuZmluZCgoY2hhbXBpb24pID0+IGNoYW1waW9uLnBvc2l0aW9uID09PSBwb3MpO1xyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSBmaW5kQ2hhbXBpb24ocG9zaXRpb24pPy5pY29uIHx8IG51bGw7XHJcblxyXG4gIGNvbnN0IFssIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xyXG4gICAgYWNjZXB0OiBcImNoYW1waW9uXCIsXHJcbiAgICBkcm9wOiAoaXRlbSkgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiQUREX0NIQU1QSU9OXCIsIGNoYW1waW9uOiB7IC4uLml0ZW0sIHBvc2l0aW9uIH0gfSk7XHJcbiAgICB9LFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhleGFnb24tYm9yZGVyXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2Ryb3B9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCxcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBjbGlwUGF0aDpcclxuICAgICAgICAgICAgXCJwb2x5Z29uKDUwJSAwLCAxMDAlIDIzJSwgMTAwJSA3NCUsIDUwJSAxMDAlLCAwIDc1JSwgMCAyNCUpXCIsXHJcbiAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25Eb3VibGVDbGljaz17KCkgPT5cclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogXCJSRU1PVkVfQ0hBTVBJT05cIixcclxuICAgICAgICAgICAgY2hhbXBpb246IGZpbmRDaGFtcGlvbihwb3NpdGlvbiksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0+XHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAxMDAgMTAwXCJcclxuICAgICAgICAgIGZpbGw9XCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZXhhZ29uXCJcclxuICAgICAgICAgICAgICBwb2ludHM9XCIyLjEsNzMuOCAyLjEsMjYuMiA0My42LDIuMyA4NSwyNi4yIDg1LDczLjggNDMuNiw5Ny43XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhleGFnb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRHJvcCIsIlRyYWl0Q29udGV4dCIsIkNoYW1waW9uQ29udGV4dCIsIkhleGFnb24iLCJwb3NpdGlvbiIsImZpbmRDaGFtcGlvbiIsImNoYW1waW9ucyIsImRpc3BhdGNoIiwicG9zIiwiZmluZCIsImNoYW1waW9uIiwiYmFja2dyb3VuZEltYWdlIiwiaWNvbiIsImRyb3AiLCJhY2NlcHQiLCJpdGVtIiwidHlwZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJyZWYiLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjbGlwUGF0aCIsImJveFNpemluZyIsIm9uRG91YmxlQ2xpY2siLCJzdmciLCJ2aWV3Qm94IiwiZmlsbCIsInhtbG5zIiwiZyIsInBvbHlnb24iLCJwb2ludHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Hexagon.jsx\n"));

/***/ })

});