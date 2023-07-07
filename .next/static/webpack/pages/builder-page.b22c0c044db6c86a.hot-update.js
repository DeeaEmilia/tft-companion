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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var _context_TraitContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/TraitContext */ \"./src/context/TraitContext.jsx\");\n/* harmony import */ var _context_ChampionContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/ChampionContext */ \"./src/context/ChampionContext.jsx\");\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Hexagon = (param)=>{\n    let { position } = param;\n    _s();\n    const [champion, setChampion] = useState(null);\n    const { dispatch } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_TraitContext__WEBPACK_IMPORTED_MODULE_2__.TraitContext);\n    const { setChampions } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_ChampionContext__WEBPACK_IMPORTED_MODULE_3__.ChampionContext);\n    const [, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop)(()=>({\n            accept: \"champion\",\n            drop: (item)=>{\n                dispatch({\n                    type: \"ADD_CHAMPION\",\n                    champion: item\n                });\n                setChampion(item);\n                setChampions((prevChamps)=>prevChamps.map((champ)=>champ.name === item.name ? {\n                            ...champ,\n                            position\n                        } : champ));\n            }\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"hexagon-border\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: drop,\n            style: {\n                backgroundImage: \"url(\".concat(backgroundImage, \")\"),\n                backgroundSize: \"contain\",\n                width: \"100%\",\n                height: \"100%\",\n                clipPath: \"polygon(50% 0, 100% 23%, 100% 74%, 50% 100%, 0 75%, 0 24%)\",\n                boxSizing: \"border-box\"\n            },\n            onDoubleClick: ()=>dispatch({\n                    type: \"REMOVE_CHAMPION\",\n                    champion: findChampion(position)\n                }),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"100%\",\n                height: \"100%\",\n                viewBox: \"0 0 100 100\",\n                fill: \"transparent\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                        className: \"hexagon\",\n                        points: \"2.1,73.8 2.1,26.2 43.6,2.3 85,26.2 85,73.8 43.6,97.7\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hexagon, \"6CHfsp1FPDsF7YvmSiUNDRO8IC0=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_4__.useDrop\n    ];\n});\n_c = Hexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hexagon);\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZXhhZ29uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1DQUFtQzs7QUFDQTtBQUNDO0FBQ21CO0FBQ007QUFFN0QsTUFBTUksVUFBVTtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDM0IsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdDLFNBQVM7SUFDekMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR1QsaURBQVVBLENBQUNFLCtEQUFZQTtJQUM1QyxNQUFNLEVBQUVRLFlBQVksRUFBRSxHQUFHVixpREFBVUEsQ0FBQ0cscUVBQWVBO0lBRW5ELE1BQU0sR0FBR1EsS0FBSyxHQUFHVixrREFBT0EsQ0FBQyxJQUFPO1lBQzlCVyxRQUFRO1lBQ1JELE1BQU0sQ0FBQ0U7Z0JBQ0xKLFNBQVM7b0JBQUVLLE1BQU07b0JBQWdCUixVQUFVTztnQkFBSztnQkFDaEROLFlBQVlNO2dCQUNaSCxhQUFhLENBQUNLLGFBQ1pBLFdBQVdDLEdBQUcsQ0FBQyxDQUFDQyxRQUNkQSxNQUFNQyxJQUFJLEtBQUtMLEtBQUtLLElBQUksR0FBRzs0QkFBRSxHQUFHRCxLQUFLOzRCQUFFWjt3QkFBUyxJQUFJWTtZQUcxRDtRQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUNDQyxLQUFLWDtZQUNMWSxPQUFPO2dCQUNMQyxpQkFBaUIsT0FBdUIsT0FBaEJBLGlCQUFnQjtnQkFDeENDLGdCQUFnQjtnQkFDaEJDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFVBQ0U7Z0JBQ0ZDLFdBQVc7WUFDYjtZQUNBQyxlQUFlLElBQ2JyQixTQUFTO29CQUNQSyxNQUFNO29CQUNOUixVQUFVeUIsYUFBYTFCO2dCQUN6QjtzQkFFRiw0RUFBQzJCO2dCQUNDTixPQUFNO2dCQUNOQyxRQUFPO2dCQUNQTSxTQUFRO2dCQUNSQyxNQUFLO2dCQUNMQyxPQUFNOzBCQUNOLDRFQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQ0NqQixXQUFVO3dCQUNWa0IsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckI7R0FyRE1sQzs7UUFLYUgsOENBQU9BOzs7S0FMcEJHO0FBdUROLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hleGFnb24uanN4PzBjYzYiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURyb3AgfSBmcm9tIFwicmVhY3QtZG5kXCI7XHJcbmltcG9ydCB7IFRyYWl0Q29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1RyYWl0Q29udGV4dFwiO1xyXG5pbXBvcnQgeyBDaGFtcGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9DaGFtcGlvbkNvbnRleHRcIjtcclxuXHJcbmNvbnN0IEhleGFnb24gPSAoeyBwb3NpdGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW2NoYW1waW9uLCBzZXRDaGFtcGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCB7IGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFRyYWl0Q29udGV4dCk7XHJcbiAgY29uc3QgeyBzZXRDaGFtcGlvbnMgfSA9IHVzZUNvbnRleHQoQ2hhbXBpb25Db250ZXh0KTtcclxuXHJcbiAgY29uc3QgWywgZHJvcF0gPSB1c2VEcm9wKCgpID0+ICh7XHJcbiAgICBhY2NlcHQ6IFwiY2hhbXBpb25cIixcclxuICAgIGRyb3A6IChpdGVtKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJBRERfQ0hBTVBJT05cIiwgY2hhbXBpb246IGl0ZW0gfSk7XHJcbiAgICAgIHNldENoYW1waW9uKGl0ZW0pO1xyXG4gICAgICBzZXRDaGFtcGlvbnMoKHByZXZDaGFtcHMpID0+XHJcbiAgICAgICAgcHJldkNoYW1wcy5tYXAoKGNoYW1wKSA9PlxyXG4gICAgICAgICAgY2hhbXAubmFtZSA9PT0gaXRlbS5uYW1lID8geyAuLi5jaGFtcCwgcG9zaXRpb24gfSA6IGNoYW1wXHJcbiAgICAgICAgKVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXhhZ29uLWJvcmRlclwiPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgcmVmPXtkcm9wfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KWAsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgY2xpcFBhdGg6XHJcbiAgICAgICAgICAgIFwicG9seWdvbig1MCUgMCwgMTAwJSAyMyUsIDEwMCUgNzQlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMjQlKVwiLFxyXG4gICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiUkVNT1ZFX0NIQU1QSU9OXCIsXHJcbiAgICAgICAgICAgIGNoYW1waW9uOiBmaW5kQ2hhbXBpb24ocG9zaXRpb24pLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9PlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXHJcbiAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGV4YWdvblwiXHJcbiAgICAgICAgICAgICAgcG9pbnRzPVwiMi4xLDczLjggMi4xLDI2LjIgNDMuNiwyLjMgODUsMjYuMiA4NSw3My44IDQzLjYsOTcuN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXhhZ29uO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZURyb3AiLCJUcmFpdENvbnRleHQiLCJDaGFtcGlvbkNvbnRleHQiLCJIZXhhZ29uIiwicG9zaXRpb24iLCJjaGFtcGlvbiIsInNldENoYW1waW9uIiwidXNlU3RhdGUiLCJkaXNwYXRjaCIsInNldENoYW1waW9ucyIsImRyb3AiLCJhY2NlcHQiLCJpdGVtIiwidHlwZSIsInByZXZDaGFtcHMiLCJtYXAiLCJjaGFtcCIsIm5hbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwicmVmIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xpcFBhdGgiLCJib3hTaXppbmciLCJvbkRvdWJsZUNsaWNrIiwiZmluZENoYW1waW9uIiwic3ZnIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImciLCJwb2x5Z29uIiwicG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hexagon.jsx\n"));

/***/ })

});