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

/***/ "./src/components/ChampionIcons.jsx":
/*!******************************************!*\
  !*** ./src/components/ChampionIcons.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_champions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/champions */ \"./src/data/champions.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\n\n\nconst ChampionIcon = (param)=>{\n    let { champion } = param;\n    _s();\n    const [{ isDragging }, drag] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrag)(()=>({\n            type: \"champion\",\n            item: {\n                id: champion.name,\n                icon: champion.icon\n            },\n            collect: (monitor)=>({\n                    isDragging: !!monitor.isDragging()\n                })\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: drag,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: champion.icon,\n            alt: \"\".concat(champion.name, \" icon\"),\n            width: 70,\n            height: 70,\n            style: {\n                border: isDragging ? \"5px solid pink\" : \"0px\"\n            }\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionIcons.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionIcons.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChampionIcon, \"wuumsFp4qAni9XRJfRhQAZjuD/k=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_3__.useDrag\n    ];\n});\n_c = ChampionIcon;\nconst ChampionsIcons = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"builder-icons\",\n        children: _data_champions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map((champion)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChampionIcon, {\n                champion: champion\n            }, champion.name, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionIcons.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionIcons.jsx\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, undefined);\n_c1 = ChampionsIcons;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChampionsIcons);\nvar _c, _c1;\n$RefreshReg$(_c, \"ChampionIcon\");\n$RefreshReg$(_c1, \"ChampionsIcons\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFtcGlvbkljb25zLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsbUNBQW1DOztBQUNKO0FBQ1c7QUFDTjtBQUVwQyxNQUFNRyxlQUFlO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUNoQyxNQUFNLENBQUMsRUFBRUMsVUFBVSxFQUFFLEVBQUVDLEtBQUssR0FBR0osa0RBQU9BLENBQUMsSUFBTztZQUM1Q0ssTUFBTTtZQUNOQyxNQUFNO2dCQUFFQyxJQUFJTCxTQUFTTSxJQUFJO2dCQUFFQyxNQUFNUCxTQUFTTyxJQUFJO1lBQUM7WUFDL0NDLFNBQVMsQ0FBQ0MsVUFBYTtvQkFDckJSLFlBQVksQ0FBQyxDQUFDUSxRQUFRUixVQUFVO2dCQUNsQztRQUNGO0lBRUEscUJBQ0UsOERBQUNTO1FBQUlDLEtBQUtUO2tCQUNSLDRFQUFDTixtREFBS0E7WUFDSmdCLEtBQUtaLFNBQVNPLElBQUk7WUFDbEJNLEtBQUssR0FBaUIsT0FBZGIsU0FBU00sSUFBSSxFQUFDO1lBQ3RCUSxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsT0FBTztnQkFBRUMsUUFBUWhCLGFBQWEsbUJBQW1CO1lBQU07Ozs7Ozs7Ozs7O0FBSS9EO0dBcEJNRjs7UUFDMkJELDhDQUFPQTs7O0tBRGxDQztBQXNCTixNQUFNbUIsaUJBQWlCLGtCQUNyQiw4REFBQ1I7UUFBSVMsV0FBVTtrQkFDWnRCLDJEQUFhLENBQUMsQ0FBQ0cseUJBQ2QsOERBQUNEO2dCQUFpQ0MsVUFBVUE7ZUFBekJBLFNBQVNNLElBQUk7Ozs7Ozs7Ozs7TUFIaENZO0FBUU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhbXBpb25JY29ucy5qc3g/ZWQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgY2hhbXBpb25zIGZyb20gXCIuLi9kYXRhL2NoYW1waW9uc1wiO1xyXG5pbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSBcInJlYWN0LWRuZFwiO1xyXG5cclxuY29uc3QgQ2hhbXBpb25JY29uID0gKHsgY2hhbXBpb24gfSkgPT4ge1xyXG4gIGNvbnN0IFt7IGlzRHJhZ2dpbmcgfSwgZHJhZ10gPSB1c2VEcmFnKCgpID0+ICh7XHJcbiAgICB0eXBlOiBcImNoYW1waW9uXCIsXHJcbiAgICBpdGVtOiB7IGlkOiBjaGFtcGlvbi5uYW1lLCBpY29uOiBjaGFtcGlvbi5pY29uIH0sXHJcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgaXNEcmFnZ2luZzogISFtb25pdG9yLmlzRHJhZ2dpbmcoKSxcclxuICAgIH0pLFxyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtkcmFnfT5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXtjaGFtcGlvbi5pY29ufVxyXG4gICAgICAgIGFsdD17YCR7Y2hhbXBpb24ubmFtZX0gaWNvbmB9XHJcbiAgICAgICAgd2lkdGg9ezcwfVxyXG4gICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiBpc0RyYWdnaW5nID8gXCI1cHggc29saWQgcGlua1wiIDogXCIwcHhcIiB9fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IENoYW1waW9uc0ljb25zID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1pY29uc1wiPlxyXG4gICAge2NoYW1waW9ucy5tYXAoKGNoYW1waW9uKSA9PiAoXHJcbiAgICAgIDxDaGFtcGlvbkljb24ga2V5PXtjaGFtcGlvbi5uYW1lfSBjaGFtcGlvbj17Y2hhbXBpb259IC8+XHJcbiAgICApKX1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uc0ljb25zO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJjaGFtcGlvbnMiLCJ1c2VEcmFnIiwiQ2hhbXBpb25JY29uIiwiY2hhbXBpb24iLCJpc0RyYWdnaW5nIiwiZHJhZyIsInR5cGUiLCJpdGVtIiwiaWQiLCJuYW1lIiwiaWNvbiIsImNvbGxlY3QiLCJtb25pdG9yIiwiZGl2IiwicmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImJvcmRlciIsIkNoYW1waW9uc0ljb25zIiwiY2xhc3NOYW1lIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ChampionIcons.jsx\n"));

/***/ })

});