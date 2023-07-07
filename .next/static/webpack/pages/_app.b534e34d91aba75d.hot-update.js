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

/***/ "./src/context/TraitContext.jsx":
/*!**************************************!*\
  !*** ./src/context/TraitContext.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TraitContext: function() { return /* binding */ TraitContext; },\n/* harmony export */   TraitProvider: function() { return /* binding */ TraitProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TraitContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Add a reducer for managing the active traits and champions\nconst traitReducer = (state, action)=>{\n    console.log(action);\n    switch(action.type){\n        case \"ADD_CHAMPION\":\n            {\n                const newTraits = [\n                    ...state.activeTraits\n                ];\n                const newChampions = [\n                    ...state.champions\n                ];\n                if (action.champion.traits) {\n                    action.champion.traits.forEach((trait)=>{\n                        const existingTrait = newTraits.find((t)=>t.name === trait);\n                        if (existingTrait) {\n                            existingTrait.count += 1;\n                        } else {\n                            newTraits.push({\n                                name: trait,\n                                count: 1\n                            });\n                        }\n                    });\n                }\n                // Add the new champion to the champions array\n                newChampions.push(action.champion);\n                return {\n                    activeTraits: newTraits,\n                    champions: newChampions\n                };\n            }\n        case \"REMOVE_CHAMPION\":\n            {\n                const newTraits = [\n                    ...state.activeTraits\n                ];\n                action.champion.traits.forEach((trait)=>{\n                    const existingTrait = newTraits.find((t)=>t.name === trait);\n                    if (existingTrait) {\n                        existingTrait.count -= 1;\n                        if (existingTrait.count === 0) {\n                            const index = newTraits.indexOf(existingTrait);\n                            newTraits.splice(index, 1);\n                        }\n                    }\n                });\n                return {\n                    ...state,\n                    activeTraits: newTraits,\n                    champions: state.champions.filter((champion)=>champion.name !== action.champion.name)\n                };\n            }\n        case \"SET_POSITION\":\n            {\n                return {\n                    ...state,\n                    champions: state.champions.map((champion)=>champion.name === action.champion.name ? {\n                            ...champion,\n                            position: action.position\n                        } : champion)\n                };\n            }\n        default:\n            return state;\n    }\n};\n// eslint-disable-next-line react/prop-types\nconst TraitProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [allTraits, setAllTraits] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(traitReducer, {\n        activeTraits: [],\n        champions: []\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TraitContext.Provider, {\n        value: {\n            allTraits,\n            setAllTraits,\n            activeTraits: state.activeTraits,\n            champions: state.champions,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\context\\\\TraitContext.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TraitProvider, \"aOq81nvC2wve95FGpr7/ZQ/In98=\");\n_c = TraitProvider;\nvar _c;\n$RefreshReg$(_c, \"TraitProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWl0Q29udGV4dC5qc3g/YTJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRyYWl0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIEFkZCBhIHJlZHVjZXIgZm9yIG1hbmFnaW5nIHRoZSBhY3RpdmUgdHJhaXRzIGFuZCBjaGFtcGlvbnNcclxuY29uc3QgdHJhaXRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJBRERfQ0hBTVBJT05cIjoge1xyXG4gICAgICBjb25zdCBuZXdUcmFpdHMgPSBbLi4uc3RhdGUuYWN0aXZlVHJhaXRzXTtcclxuICAgICAgY29uc3QgbmV3Q2hhbXBpb25zID0gWy4uLnN0YXRlLmNoYW1waW9uc107XHJcbiAgICAgIGlmIChhY3Rpb24uY2hhbXBpb24udHJhaXRzKSB7XHJcbiAgICAgICAgYWN0aW9uLmNoYW1waW9uLnRyYWl0cy5mb3JFYWNoKCh0cmFpdCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdUcmFpdCA9IG5ld1RyYWl0cy5maW5kKCh0KSA9PiB0Lm5hbWUgPT09IHRyYWl0KTtcclxuICAgICAgICAgIGlmIChleGlzdGluZ1RyYWl0KSB7XHJcbiAgICAgICAgICAgIGV4aXN0aW5nVHJhaXQuY291bnQgKz0gMTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1RyYWl0cy5wdXNoKHtcclxuICAgICAgICAgICAgICBuYW1lOiB0cmFpdCxcclxuICAgICAgICAgICAgICBjb3VudDogMSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEFkZCB0aGUgbmV3IGNoYW1waW9uIHRvIHRoZSBjaGFtcGlvbnMgYXJyYXlcclxuICAgICAgbmV3Q2hhbXBpb25zLnB1c2goYWN0aW9uLmNoYW1waW9uKTtcclxuXHJcbiAgICAgIHJldHVybiB7IGFjdGl2ZVRyYWl0czogbmV3VHJhaXRzLCBjaGFtcGlvbnM6IG5ld0NoYW1waW9ucyB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIlJFTU9WRV9DSEFNUElPTlwiOiB7XHJcbiAgICAgIGNvbnN0IG5ld1RyYWl0cyA9IFsuLi5zdGF0ZS5hY3RpdmVUcmFpdHNdO1xyXG4gICAgICBhY3Rpb24uY2hhbXBpb24udHJhaXRzLmZvckVhY2goKHRyYWl0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdUcmFpdCA9IG5ld1RyYWl0cy5maW5kKCh0KSA9PiB0Lm5hbWUgPT09IHRyYWl0KTtcclxuICAgICAgICBpZiAoZXhpc3RpbmdUcmFpdCkge1xyXG4gICAgICAgICAgZXhpc3RpbmdUcmFpdC5jb3VudCAtPSAxO1xyXG4gICAgICAgICAgaWYgKGV4aXN0aW5nVHJhaXQuY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBuZXdUcmFpdHMuaW5kZXhPZihleGlzdGluZ1RyYWl0KTtcclxuICAgICAgICAgICAgbmV3VHJhaXRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhY3RpdmVUcmFpdHM6IG5ld1RyYWl0cyxcclxuICAgICAgICBjaGFtcGlvbnM6IHN0YXRlLmNoYW1waW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAoY2hhbXBpb24pID0+IGNoYW1waW9uLm5hbWUgIT09IGFjdGlvbi5jaGFtcGlvbi5uYW1lXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNhc2UgXCJTRVRfUE9TSVRJT05cIjoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNoYW1waW9uczogc3RhdGUuY2hhbXBpb25zLm1hcCgoY2hhbXBpb24pID0+XHJcbiAgICAgICAgICBjaGFtcGlvbi5uYW1lID09PSBhY3Rpb24uY2hhbXBpb24ubmFtZVxyXG4gICAgICAgICAgICA/IHsgLi4uY2hhbXBpb24sIHBvc2l0aW9uOiBhY3Rpb24ucG9zaXRpb24gfVxyXG4gICAgICAgICAgICA6IGNoYW1waW9uXHJcbiAgICAgICAgKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xyXG5leHBvcnQgY29uc3QgVHJhaXRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbYWxsVHJhaXRzLCBzZXRBbGxUcmFpdHNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih0cmFpdFJlZHVjZXIsIHtcclxuICAgIGFjdGl2ZVRyYWl0czogW10sXHJcbiAgICBjaGFtcGlvbnM6IFtdLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRyYWl0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGFsbFRyYWl0cyxcclxuICAgICAgICBzZXRBbGxUcmFpdHMsXHJcbiAgICAgICAgYWN0aXZlVHJhaXRzOiBzdGF0ZS5hY3RpdmVUcmFpdHMsXHJcbiAgICAgICAgY2hhbXBpb25zOiBzdGF0ZS5jaGFtcGlvbnMsXHJcbiAgICAgICAgZGlzcGF0Y2gsXHJcbiAgICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RyYWl0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsIlRyYWl0Q29udGV4dCIsInRyYWl0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJuZXdUcmFpdHMiLCJhY3RpdmVUcmFpdHMiLCJuZXdDaGFtcGlvbnMiLCJjaGFtcGlvbnMiLCJjaGFtcGlvbiIsInRyYWl0cyIsImZvckVhY2giLCJ0cmFpdCIsImV4aXN0aW5nVHJhaXQiLCJmaW5kIiwidCIsIm5hbWUiLCJjb3VudCIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJmaWx0ZXIiLCJtYXAiLCJwb3NpdGlvbiIsIlRyYWl0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFsbFRyYWl0cyIsInNldEFsbFRyYWl0cyIsImRpc3BhdGNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/TraitContext.jsx\n"));

/***/ })

});