"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/team-comps-page",{

/***/ "./src/components/Champions.jsx":
/*!**************************************!*\
  !*** ./src/components/Champions.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_champions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/champions */ \"./src/data/champions.js\");\n/* harmony import */ var _ChampionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChampionCard */ \"./src/components/ChampionCard.jsx\");\n/* eslint-disable react/prop-types */ \n\n\n\nconst Champions = (param)=>{\n    let { comp, setHoveredChampion, setHoveredItem, hoveredChampion, hoveredItem } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-wrap\",\n                children: comp.champions.map((championComp)=>{\n                    const champion = _data_champions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((ch)=>ch.name === championComp.name);\n                    if (!champion) {\n                        console.error(\"No champion found for name: \".concat(championComp.name));\n                        return null;\n                    }\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChampionCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        champion: champion,\n                        setHoveredChampion: setHoveredChampion,\n                        setHoveredItem: setHoveredItem,\n                        hoveredChampion: hoveredChampion,\n                        hoveredItem: hoveredItem,\n                        comp: comp,\n                        championComp: championComp\n                    }, \"\".concat(comp.name, \"-\").concat(champion.name), false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Champions.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Champions.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/team-page/\".concat(comp.name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn\",\n                            id: \"builderButton\",\n                            children: \"→\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Champions.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Champions.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"btn-label\",\n                        htmlFor: \"builderButton\",\n                        children: \"See in builder\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Champions.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Champions.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Champions.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Champions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Champions);\nvar _c;\n$RefreshReg$(_c, \"Champions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFtcGlvbnMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxtQ0FBbUM7QUFDTjtBQUNhO0FBQ0E7QUFFMUMsTUFBTUcsWUFBWTtRQUFDLEVBQ2pCQyxJQUFJLEVBQ0pDLGtCQUFrQixFQUNsQkMsY0FBYyxFQUNkQyxlQUFlLEVBQ2ZDLFdBQVcsRUFDWjtJQUNDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNaUCxLQUFLSCxTQUFTLENBQUNXLEdBQUcsQ0FBQyxDQUFDQztvQkFDbkIsTUFBTUMsV0FBV2IsNERBQWMsQ0FDN0IsQ0FBQ2UsS0FBT0EsR0FBR0MsSUFBSSxLQUFLSixhQUFhSSxJQUFJO29CQUd2QyxJQUFJLENBQUNILFVBQVU7d0JBQ2JJLFFBQVFDLEtBQUssQ0FBQywrQkFBaUQsT0FBbEJOLGFBQWFJLElBQUk7d0JBQzlELE9BQU87b0JBQ1Q7b0JBRUEscUJBQ0UsOERBQUNmLHFEQUFZQTt3QkFFWFksVUFBVUE7d0JBQ1ZULG9CQUFvQkE7d0JBQ3BCQyxnQkFBZ0JBO3dCQUNoQkMsaUJBQWlCQTt3QkFDakJDLGFBQWFBO3dCQUNiSixNQUFNQTt3QkFDTlMsY0FBY0E7dUJBUFQsR0FBZ0JDLE9BQWJWLEtBQUthLElBQUksRUFBQyxLQUFpQixPQUFkSCxTQUFTRyxJQUFJOzs7OztnQkFVeEM7Ozs7OzswQkFFRiw4REFBQ1A7O2tDQUNDLDhEQUFDVixrREFBSUE7d0JBQUNvQixNQUFNLGNBQXdCLE9BQVZoQixLQUFLYSxJQUFJO2tDQUNqQyw0RUFBQ0k7NEJBQU9WLFdBQVU7NEJBQU1XLElBQUc7c0NBQWdCOzs7Ozs7Ozs7OztrQ0FJN0MsOERBQUNDO3dCQUFNWixXQUFVO3dCQUFZYSxTQUFRO2tDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdEO0tBOUNNckI7QUFnRE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbXBpb25zLmpzeD83NzYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgY2hhbXBpb25zIGZyb20gXCIuLi9kYXRhL2NoYW1waW9uc1wiO1xyXG5pbXBvcnQgQ2hhbXBpb25DYXJkIGZyb20gXCIuL0NoYW1waW9uQ2FyZFwiO1xyXG5cclxuY29uc3QgQ2hhbXBpb25zID0gKHtcclxuICBjb21wLFxyXG4gIHNldEhvdmVyZWRDaGFtcGlvbixcclxuICBzZXRIb3ZlcmVkSXRlbSxcclxuICBob3ZlcmVkQ2hhbXBpb24sXHJcbiAgaG92ZXJlZEl0ZW0sXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC13cmFwXCI+XHJcbiAgICAgICAge2NvbXAuY2hhbXBpb25zLm1hcCgoY2hhbXBpb25Db21wKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBjaGFtcGlvbiA9IGNoYW1waW9ucy5maW5kKFxyXG4gICAgICAgICAgICAoY2gpID0+IGNoLm5hbWUgPT09IGNoYW1waW9uQ29tcC5uYW1lXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGlmICghY2hhbXBpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgTm8gY2hhbXBpb24gZm91bmQgZm9yIG5hbWU6ICR7Y2hhbXBpb25Db21wLm5hbWV9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDaGFtcGlvbkNhcmRcclxuICAgICAgICAgICAgICBrZXk9e2Ake2NvbXAubmFtZX0tJHtjaGFtcGlvbi5uYW1lfWB9XHJcbiAgICAgICAgICAgICAgY2hhbXBpb249e2NoYW1waW9ufVxyXG4gICAgICAgICAgICAgIHNldEhvdmVyZWRDaGFtcGlvbj17c2V0SG92ZXJlZENoYW1waW9ufVxyXG4gICAgICAgICAgICAgIHNldEhvdmVyZWRJdGVtPXtzZXRIb3ZlcmVkSXRlbX1cclxuICAgICAgICAgICAgICBob3ZlcmVkQ2hhbXBpb249e2hvdmVyZWRDaGFtcGlvbn1cclxuICAgICAgICAgICAgICBob3ZlcmVkSXRlbT17aG92ZXJlZEl0ZW19XHJcbiAgICAgICAgICAgICAgY29tcD17Y29tcH1cclxuICAgICAgICAgICAgICBjaGFtcGlvbkNvbXA9e2NoYW1waW9uQ29tcH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvdGVhbS1wYWdlLyR7Y29tcC5uYW1lfWB9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5cIiBpZD1cImJ1aWxkZXJCdXR0b25cIj5cclxuICAgICAgICAgICAgJnJhcnI7XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJ0bi1sYWJlbFwiIGh0bWxGb3I9XCJidWlsZGVyQnV0dG9uXCI+XHJcbiAgICAgICAgICBTZWUgaW4gYnVpbGRlclxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFtcGlvbnM7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiY2hhbXBpb25zIiwiQ2hhbXBpb25DYXJkIiwiQ2hhbXBpb25zIiwiY29tcCIsInNldEhvdmVyZWRDaGFtcGlvbiIsInNldEhvdmVyZWRJdGVtIiwiaG92ZXJlZENoYW1waW9uIiwiaG92ZXJlZEl0ZW0iLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiY2hhbXBpb25Db21wIiwiY2hhbXBpb24iLCJmaW5kIiwiY2giLCJuYW1lIiwiY29uc29sZSIsImVycm9yIiwiaHJlZiIsImJ1dHRvbiIsImlkIiwibGFiZWwiLCJodG1sRm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Champions.jsx\n"));

/***/ })

});