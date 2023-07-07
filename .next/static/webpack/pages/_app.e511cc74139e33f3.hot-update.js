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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TraitContext: function() { return /* binding */ TraitContext; },\n/* harmony export */   TraitProvider: function() { return /* binding */ TraitProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst TraitContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Add a reducer for managing the active traits and champions\nconst traitReducer = (state, action)=>{\n    switch(action.type){\n        case \"ADD_CHAMPION\":\n            {\n                const newTraits = [\n                    ...state.activeTraits\n                ];\n                action.champion.traits.forEach((trait)=>{\n                    const existingTrait = newTraits.find((t)=>t.name === trait);\n                    if (existingTrait) {\n                        existingTrait.count += 1;\n                    } else {\n                        newTraits.push({\n                            name: trait,\n                            count: 1\n                        });\n                    }\n                });\n                return {\n                    ...state,\n                    activeTraits: newTraits,\n                    champions: [\n                        ...state.champions,\n                        action.champion\n                    ]\n                };\n            }\n        case \"REMOVE_CHAMPION\":\n            {\n                const newTraits = [\n                    ...state.activeTraits\n                ];\n                action.champion.traits.forEach((trait)=>{\n                    const existingTrait = newTraits.find((t)=>t.name === trait);\n                    if (existingTrait) {\n                        existingTrait.count -= 1;\n                        if (existingTrait.count === 0) {\n                            const index = newTraits.indexOf(existingTrait);\n                            newTraits.splice(index, 1);\n                        }\n                    }\n                });\n                return {\n                    ...state,\n                    activeTraits: newTraits,\n                    champions: state.champions.filter((champion)=>champion.name !== action.champion.name)\n                };\n            }\n        case \"SET_POSITION\":\n            {\n                return {\n                    ...state,\n                    champions: state.champions.map((champion)=>champion.name === action.champion.name ? {\n                            ...champion,\n                            position: action.position\n                        } : champion)\n                };\n            }\n        default:\n            return state;\n    }\n};\n// eslint-disable-next-line react/prop-types\nconst TraitProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const [allTraits, setAllTraits] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(traitReducer, {\n        activeTraits: [],\n        champions: []\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TraitContext.Provider, {\n        value: {\n            allTraits,\n            setAllTraits,\n            activeTraits: state.activeTraits,\n            champions: state.champions,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\context\\\\TraitContext.jsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TraitProvider, \"aOq81nvC2wve95FGpr7/ZQ/In98=\");\n_c = TraitProvider;\nvar _c;\n$RefreshReg$(_c, \"TraitProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9UcmFpdENvbnRleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTREO0FBRXJELE1BQU1HLDZCQUFlSCxvREFBYUEsR0FBRztBQUU1Qyw2REFBNkQ7QUFDN0QsTUFBTUksZUFBZSxDQUFDQyxPQUFPQztJQUMzQixPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFBZ0I7Z0JBQ25CLE1BQU1DLFlBQVk7dUJBQUlILE1BQU1JLFlBQVk7aUJBQUM7Z0JBQ3pDSCxPQUFPSSxRQUFRLENBQUNDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO29CQUM5QixNQUFNQyxnQkFBZ0JOLFVBQVVPLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxJQUFJLEtBQUtKO29CQUN2RCxJQUFJQyxlQUFlO3dCQUNqQkEsY0FBY0ksS0FBSyxJQUFJO29CQUN6QixPQUFPO3dCQUNMVixVQUFVVyxJQUFJLENBQUM7NEJBQUVGLE1BQU1KOzRCQUFPSyxPQUFPO3dCQUFFO29CQUN6QztnQkFDRjtnQkFDQSxPQUFPO29CQUNMLEdBQUdiLEtBQUs7b0JBQ1JJLGNBQWNEO29CQUNkWSxXQUFXOzJCQUFJZixNQUFNZSxTQUFTO3dCQUFFZCxPQUFPSSxRQUFRO3FCQUFDO2dCQUNsRDtZQUNGO1FBQ0EsS0FBSztZQUFtQjtnQkFDdEIsTUFBTUYsWUFBWTt1QkFBSUgsTUFBTUksWUFBWTtpQkFBQztnQkFDekNILE9BQU9JLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQ0M7b0JBQzlCLE1BQU1DLGdCQUFnQk4sVUFBVU8sSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLElBQUksS0FBS0o7b0JBQ3ZELElBQUlDLGVBQWU7d0JBQ2pCQSxjQUFjSSxLQUFLLElBQUk7d0JBQ3ZCLElBQUlKLGNBQWNJLEtBQUssS0FBSyxHQUFHOzRCQUM3QixNQUFNRyxRQUFRYixVQUFVYyxPQUFPLENBQUNSOzRCQUNoQ04sVUFBVWUsTUFBTSxDQUFDRixPQUFPO3dCQUMxQjtvQkFDRjtnQkFDRjtnQkFDQSxPQUFPO29CQUNMLEdBQUdoQixLQUFLO29CQUNSSSxjQUFjRDtvQkFDZFksV0FBV2YsTUFBTWUsU0FBUyxDQUFDSSxNQUFNLENBQy9CLENBQUNkLFdBQWFBLFNBQVNPLElBQUksS0FBS1gsT0FBT0ksUUFBUSxDQUFDTyxJQUFJO2dCQUV4RDtZQUNGO1FBQ0EsS0FBSztZQUFnQjtnQkFDbkIsT0FBTztvQkFDTCxHQUFHWixLQUFLO29CQUNSZSxXQUFXZixNQUFNZSxTQUFTLENBQUNLLEdBQUcsQ0FBQyxDQUFDZixXQUM5QkEsU0FBU08sSUFBSSxLQUFLWCxPQUFPSSxRQUFRLENBQUNPLElBQUksR0FDbEM7NEJBQUUsR0FBR1AsUUFBUTs0QkFBRWdCLFVBQVVwQixPQUFPb0IsUUFBUTt3QkFBQyxJQUN6Q2hCO2dCQUVSO1lBQ0Y7UUFDQTtZQUNFLE9BQU9MO0lBQ1g7QUFDRjtBQUVBLDRDQUE0QztBQUNyQyxNQUFNc0IsZ0JBQWdCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN4QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBRzVCLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDRyxPQUFPMEIsU0FBUyxHQUFHOUIsaURBQVVBLENBQUNHLGNBQWM7UUFDakRLLGNBQWMsRUFBRTtRQUNoQlcsV0FBVyxFQUFFO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ2pCLGFBQWE2QixRQUFRO1FBQ3BCQyxPQUFPO1lBQ0xKO1lBQ0FDO1lBQ0FyQixjQUFjSixNQUFNSSxZQUFZO1lBQ2hDVyxXQUFXZixNQUFNZSxTQUFTO1lBQzFCVztRQUNGO2tCQUNDSDs7Ozs7O0FBR1AsRUFBRTtHQW5CV0Q7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvVHJhaXRDb250ZXh0LmpzeD9hMmIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVHJhaXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuLy8gQWRkIGEgcmVkdWNlciBmb3IgbWFuYWdpbmcgdGhlIGFjdGl2ZSB0cmFpdHMgYW5kIGNoYW1waW9uc1xyXG5jb25zdCB0cmFpdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJBRERfQ0hBTVBJT05cIjoge1xyXG4gICAgICBjb25zdCBuZXdUcmFpdHMgPSBbLi4uc3RhdGUuYWN0aXZlVHJhaXRzXTtcclxuICAgICAgYWN0aW9uLmNoYW1waW9uLnRyYWl0cy5mb3JFYWNoKCh0cmFpdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVHJhaXQgPSBuZXdUcmFpdHMuZmluZCgodCkgPT4gdC5uYW1lID09PSB0cmFpdCk7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nVHJhaXQpIHtcclxuICAgICAgICAgIGV4aXN0aW5nVHJhaXQuY291bnQgKz0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3VHJhaXRzLnB1c2goeyBuYW1lOiB0cmFpdCwgY291bnQ6IDEgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBhY3RpdmVUcmFpdHM6IG5ld1RyYWl0cyxcclxuICAgICAgICBjaGFtcGlvbnM6IFsuLi5zdGF0ZS5jaGFtcGlvbnMsIGFjdGlvbi5jaGFtcGlvbl0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIFwiUkVNT1ZFX0NIQU1QSU9OXCI6IHtcclxuICAgICAgY29uc3QgbmV3VHJhaXRzID0gWy4uLnN0YXRlLmFjdGl2ZVRyYWl0c107XHJcbiAgICAgIGFjdGlvbi5jaGFtcGlvbi50cmFpdHMuZm9yRWFjaCgodHJhaXQpID0+IHtcclxuICAgICAgICBjb25zdCBleGlzdGluZ1RyYWl0ID0gbmV3VHJhaXRzLmZpbmQoKHQpID0+IHQubmFtZSA9PT0gdHJhaXQpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ1RyYWl0KSB7XHJcbiAgICAgICAgICBleGlzdGluZ1RyYWl0LmNvdW50IC09IDE7XHJcbiAgICAgICAgICBpZiAoZXhpc3RpbmdUcmFpdC5jb3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG5ld1RyYWl0cy5pbmRleE9mKGV4aXN0aW5nVHJhaXQpO1xyXG4gICAgICAgICAgICBuZXdUcmFpdHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFjdGl2ZVRyYWl0czogbmV3VHJhaXRzLFxyXG4gICAgICAgIGNoYW1waW9uczogc3RhdGUuY2hhbXBpb25zLmZpbHRlcihcclxuICAgICAgICAgIChjaGFtcGlvbikgPT4gY2hhbXBpb24ubmFtZSAhPT0gYWN0aW9uLmNoYW1waW9uLm5hbWVcclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSBcIlNFVF9QT1NJVElPTlwiOiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2hhbXBpb25zOiBzdGF0ZS5jaGFtcGlvbnMubWFwKChjaGFtcGlvbikgPT5cclxuICAgICAgICAgIGNoYW1waW9uLm5hbWUgPT09IGFjdGlvbi5jaGFtcGlvbi5uYW1lXHJcbiAgICAgICAgICAgID8geyAuLi5jaGFtcGlvbiwgcG9zaXRpb246IGFjdGlvbi5wb3NpdGlvbiB9XHJcbiAgICAgICAgICAgIDogY2hhbXBpb25cclxuICAgICAgICApLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmV4cG9ydCBjb25zdCBUcmFpdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFthbGxUcmFpdHMsIHNldEFsbFRyYWl0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHRyYWl0UmVkdWNlciwge1xyXG4gICAgYWN0aXZlVHJhaXRzOiBbXSxcclxuICAgIGNoYW1waW9uczogW10sXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VHJhaXRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgYWxsVHJhaXRzLFxyXG4gICAgICAgIHNldEFsbFRyYWl0cyxcclxuICAgICAgICBhY3RpdmVUcmFpdHM6IHN0YXRlLmFjdGl2ZVRyYWl0cyxcclxuICAgICAgICBjaGFtcGlvbnM6IHN0YXRlLmNoYW1waW9ucyxcclxuICAgICAgICBkaXNwYXRjaCxcclxuICAgICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvVHJhaXRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiVHJhaXRDb250ZXh0IiwidHJhaXRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibmV3VHJhaXRzIiwiYWN0aXZlVHJhaXRzIiwiY2hhbXBpb24iLCJ0cmFpdHMiLCJmb3JFYWNoIiwidHJhaXQiLCJleGlzdGluZ1RyYWl0IiwiZmluZCIsInQiLCJuYW1lIiwiY291bnQiLCJwdXNoIiwiY2hhbXBpb25zIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZmlsdGVyIiwibWFwIiwicG9zaXRpb24iLCJUcmFpdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhbGxUcmFpdHMiLCJzZXRBbGxUcmFpdHMiLCJkaXNwYXRjaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/TraitContext.jsx\n"));

/***/ })

});