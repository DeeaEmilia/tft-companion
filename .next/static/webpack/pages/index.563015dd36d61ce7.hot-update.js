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

/***/ "./src/components/Carousel.jsx":
/*!*************************************!*\
  !*** ./src/components/Carousel.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\nconst Carousel = (param)=>{\n    let { children } = param;\n    _s();\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const length = children.length;\n    const nextSlide = ()=>{\n        setCurrent(current === length - 1 ? 0 : current + 1);\n    };\n    const prevSlide = ()=>{\n        setCurrent(current === 0 ? length - 1 : current - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"carousel\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"slide-btn\",\n                onClick: prevSlide,\n                children: \"←\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Carousel.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            children.map((child, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: index === current ? \"slide slide-active\" : \"slide\",\n                    children: index === current && child\n                }, index, false, {\n                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Carousel.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, undefined);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"slide-btn\",\n                onClick: nextSlide,\n                children: \"➤\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Carousel.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Carousel.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Carousel, \"8+O75ArtRNvpQgzeZSk5wKohTHI=\");\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJvdXNlbC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBbUM7O0FBQ0Y7QUFFakMsTUFBTUMsV0FBVztRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDNUIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1LLFNBQVNILFNBQVNHLE1BQU07SUFFOUIsTUFBTUMsWUFBWTtRQUNoQkYsV0FBV0QsWUFBWUUsU0FBUyxJQUFJLElBQUlGLFVBQVU7SUFDcEQ7SUFFQSxNQUFNSSxZQUFZO1FBQ2hCSCxXQUFXRCxZQUFZLElBQUlFLFNBQVMsSUFBSUYsVUFBVTtJQUNwRDtJQUVBLHFCQUNFLDhEQUFDSztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNDO2dCQUFPRCxXQUFVO2dCQUFZRSxTQUFTSjswQkFBVzs7Ozs7O1lBR2pETCxTQUFTVSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0M7Z0JBQ3BCLHFCQUNFLDhEQUFDQztvQkFDQ04sV0FBV0ssVUFBVVgsVUFBVSx1QkFBdUI7OEJBRXJEVyxVQUFVWCxXQUFXVTttQkFEakJDOzs7OztZQUlYOzBCQUNBLDhEQUFDSjtnQkFBT0QsV0FBVTtnQkFBWUUsU0FBU0w7MEJBQVc7Ozs7Ozs7Ozs7OztBQUt4RDtHQS9CTUw7S0FBQUE7QUFpQ04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4Pzg5ZDMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2Fyb3VzZWwgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50KGN1cnJlbnQgPT09IGxlbmd0aCAtIDEgPyAwIDogY3VycmVudCArIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnQoY3VycmVudCA9PT0gMCA/IGxlbmd0aCAtIDEgOiBjdXJyZW50IC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhcm91c2VsXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2xpZGUtYnRuXCIgb25DbGljaz17cHJldlNsaWRlfT5cclxuICAgICAgICAmbGFycjtcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtjaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17aW5kZXggPT09IGN1cnJlbnQgPyBcInNsaWRlIHNsaWRlLWFjdGl2ZVwiIDogXCJzbGlkZVwifVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAge2luZGV4ID09PSBjdXJyZW50ICYmIGNoaWxkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic2xpZGUtYnRuXCIgb25DbGljaz17bmV4dFNsaWRlfT5cclxuICAgICAgICDinqRcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDYXJvdXNlbCIsImNoaWxkcmVuIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJsZW5ndGgiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Carousel.jsx\n"));

/***/ })

});