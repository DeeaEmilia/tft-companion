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

/***/ "./src/components/Builder.jsx":
/*!************************************!*\
  !*** ./src/components/Builder.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _HexGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HexGrid */ \"./src/components/HexGrid.jsx\");\n/* harmony import */ var _ChampionIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChampionIcons */ \"./src/components/ChampionIcons.jsx\");\n/* harmony import */ var _components_ActiveTraits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ActiveTraits */ \"./src/components/ActiveTraits.jsx\");\n/* harmony import */ var _ChampionSearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChampionSearchBar */ \"./src/components/ChampionSearchBar.jsx\");\n// Import useState hook from \"react\"\n\nvar _s = $RefreshSig$();\n\n// Import the custom components\n\n\n\n\n// Import champions data from ChampionIcons component\n\n// Define Builder component\nconst Builder = ()=>{\n    _s();\n    // Initialize searchInput state with useState hook\n    const [searchInput, setSearchInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        trait: \"\",\n        cost: \"\"\n    });\n    // Define the function to update searchInput state\n    const handleSearch = (newSearchInput)=>{\n        setSearchInput(newSearchInput);\n    };\n    // Create filteredChampions array by filtering championsData based on search input\n    const filteredChampions = _ChampionIcons__WEBPACK_IMPORTED_MODULE_3__.championsData.filter((champion)=>{\n        // If there's a search term in \"name\", check if the champion name includes it\n        const nameMatch = searchInput.name ? champion.name.toLowerCase().includes(searchInput.name.toLowerCase()) : true;\n        // If there's a search term in \"trait\", check if the champion traits include it\n        const traitMatch = searchInput.trait ? champion.traits.includes(searchInput.trait) : true;\n        // If there's a search term in \"cost\", check if the champion cost matches it\n        const costMatch = searchInput.cost ? champion.cost === Number(searchInput.cost) : true;\n        // A champion passes the filter if it matches all searched terms\n        return nameMatch && traitMatch && costMatch;\n    });\n    // Render the Builder component\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"builder-wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"builder\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ActiveTraits__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Builder.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HexGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Builder.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Builder.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChampionSearchBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onSearch: handleSearch\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Builder.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChampionIcons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                champions: filteredChampions\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Builder.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Builder.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Builder, \"zWNo9nAmDhvSKfFybsIGKz5/mFk=\");\n_c = Builder;\n// Export the Builder component as default\n/* harmony default export */ __webpack_exports__[\"default\"] = (Builder);\nvar _c;\n$RefreshReg$(_c, \"Builder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdWlsZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxvQ0FBb0M7OztBQUNIO0FBRWpDLCtCQUErQjtBQUNDO0FBQ1k7QUFDVTtBQUNGO0FBRXBELHFEQUFxRDtBQUNMO0FBRWhELDJCQUEyQjtBQUMzQixNQUFNTSxVQUFVOztJQUNkLGtEQUFrRDtJQUNsRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7UUFDN0NTLE1BQU07UUFDTkMsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFFQSxrREFBa0Q7SUFDbEQsTUFBTUMsZUFBZSxDQUFDQztRQUNwQkwsZUFBZUs7SUFDakI7SUFFQSxrRkFBa0Y7SUFDbEYsTUFBTUMsb0JBQW9CVCx5REFBYUEsQ0FBQ1UsTUFBTSxDQUFDLENBQUNDO1FBQzlDLDZFQUE2RTtRQUM3RSxNQUFNQyxZQUFZVixZQUFZRSxJQUFJLEdBQzlCTyxTQUFTUCxJQUFJLENBQUNTLFdBQVcsR0FBR0MsUUFBUSxDQUFDWixZQUFZRSxJQUFJLENBQUNTLFdBQVcsTUFDakU7UUFDSiwrRUFBK0U7UUFDL0UsTUFBTUUsYUFBYWIsWUFBWUcsS0FBSyxHQUNoQ00sU0FBU0ssTUFBTSxDQUFDRixRQUFRLENBQUNaLFlBQVlHLEtBQUssSUFDMUM7UUFDSiw0RUFBNEU7UUFDNUUsTUFBTVksWUFBWWYsWUFBWUksSUFBSSxHQUM5QkssU0FBU0wsSUFBSSxLQUFLWSxPQUFPaEIsWUFBWUksSUFBSSxJQUN6QztRQUVKLGdFQUFnRTtRQUNoRSxPQUFPTSxhQUFhRyxjQUFjRTtJQUNwQztJQUVBLCtCQUErQjtJQUMvQixxQkFDRSw4REFBQ0U7UUFBUUMsV0FBVTs7MEJBQ2pCLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBRWIsOERBQUN0QixnRUFBWUE7Ozs7O2tDQUNiLDhEQUFDRixnREFBT0E7Ozs7Ozs7Ozs7OzBCQUdWLDhEQUFDRywwREFBaUJBO2dCQUFDdUIsVUFBVWY7Ozs7OzswQkFFN0IsOERBQUNWLHNEQUFhQTtnQkFBQzBCLFdBQVdkOzs7Ozs7Ozs7Ozs7QUFHaEM7R0E5Q01SO0tBQUFBO0FBZ0ROLDBDQUEwQztBQUMxQywrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CdWlsZGVyLmpzeD9kODhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB1c2VTdGF0ZSBob29rIGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBJbXBvcnQgdGhlIGN1c3RvbSBjb21wb25lbnRzXHJcbmltcG9ydCBIZXhHcmlkIGZyb20gXCIuL0hleEdyaWRcIjtcclxuaW1wb3J0IENoYW1waW9uSWNvbnMgZnJvbSBcIi4vQ2hhbXBpb25JY29uc1wiO1xyXG5pbXBvcnQgQWN0aXZlVHJhaXRzIGZyb20gXCIuLi9jb21wb25lbnRzL0FjdGl2ZVRyYWl0c1wiO1xyXG5pbXBvcnQgQ2hhbXBpb25TZWFyY2hCYXIgZnJvbSBcIi4vQ2hhbXBpb25TZWFyY2hCYXJcIjtcclxuXHJcbi8vIEltcG9ydCBjaGFtcGlvbnMgZGF0YSBmcm9tIENoYW1waW9uSWNvbnMgY29tcG9uZW50XHJcbmltcG9ydCB7IGNoYW1waW9uc0RhdGEgfSBmcm9tIFwiLi9DaGFtcGlvbkljb25zXCI7XHJcblxyXG4vLyBEZWZpbmUgQnVpbGRlciBjb21wb25lbnRcclxuY29uc3QgQnVpbGRlciA9ICgpID0+IHtcclxuICAvLyBJbml0aWFsaXplIHNlYXJjaElucHV0IHN0YXRlIHdpdGggdXNlU3RhdGUgaG9va1xyXG4gIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHRyYWl0OiBcIlwiLFxyXG4gICAgY29zdDogXCJcIixcclxuICB9KTtcclxuXHJcbiAgLy8gRGVmaW5lIHRoZSBmdW5jdGlvbiB0byB1cGRhdGUgc2VhcmNoSW5wdXQgc3RhdGVcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSAobmV3U2VhcmNoSW5wdXQpID0+IHtcclxuICAgIHNldFNlYXJjaElucHV0KG5ld1NlYXJjaElucHV0KTtcclxuICB9O1xyXG5cclxuICAvLyBDcmVhdGUgZmlsdGVyZWRDaGFtcGlvbnMgYXJyYXkgYnkgZmlsdGVyaW5nIGNoYW1waW9uc0RhdGEgYmFzZWQgb24gc2VhcmNoIGlucHV0XHJcbiAgY29uc3QgZmlsdGVyZWRDaGFtcGlvbnMgPSBjaGFtcGlvbnNEYXRhLmZpbHRlcigoY2hhbXBpb24pID0+IHtcclxuICAgIC8vIElmIHRoZXJlJ3MgYSBzZWFyY2ggdGVybSBpbiBcIm5hbWVcIiwgY2hlY2sgaWYgdGhlIGNoYW1waW9uIG5hbWUgaW5jbHVkZXMgaXRcclxuICAgIGNvbnN0IG5hbWVNYXRjaCA9IHNlYXJjaElucHV0Lm5hbWVcclxuICAgICAgPyBjaGFtcGlvbi5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoSW5wdXQubmFtZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICA6IHRydWU7XHJcbiAgICAvLyBJZiB0aGVyZSdzIGEgc2VhcmNoIHRlcm0gaW4gXCJ0cmFpdFwiLCBjaGVjayBpZiB0aGUgY2hhbXBpb24gdHJhaXRzIGluY2x1ZGUgaXRcclxuICAgIGNvbnN0IHRyYWl0TWF0Y2ggPSBzZWFyY2hJbnB1dC50cmFpdFxyXG4gICAgICA/IGNoYW1waW9uLnRyYWl0cy5pbmNsdWRlcyhzZWFyY2hJbnB1dC50cmFpdClcclxuICAgICAgOiB0cnVlO1xyXG4gICAgLy8gSWYgdGhlcmUncyBhIHNlYXJjaCB0ZXJtIGluIFwiY29zdFwiLCBjaGVjayBpZiB0aGUgY2hhbXBpb24gY29zdCBtYXRjaGVzIGl0XHJcbiAgICBjb25zdCBjb3N0TWF0Y2ggPSBzZWFyY2hJbnB1dC5jb3N0XHJcbiAgICAgID8gY2hhbXBpb24uY29zdCA9PT0gTnVtYmVyKHNlYXJjaElucHV0LmNvc3QpXHJcbiAgICAgIDogdHJ1ZTtcclxuXHJcbiAgICAvLyBBIGNoYW1waW9uIHBhc3NlcyB0aGUgZmlsdGVyIGlmIGl0IG1hdGNoZXMgYWxsIHNlYXJjaGVkIHRlcm1zXHJcbiAgICByZXR1cm4gbmFtZU1hdGNoICYmIHRyYWl0TWF0Y2ggJiYgY29zdE1hdGNoO1xyXG4gIH0pO1xyXG5cclxuICAvLyBSZW5kZXIgdGhlIEJ1aWxkZXIgY29tcG9uZW50XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJ1aWxkZXItd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXJcIj5cclxuICAgICAgICB7LyogUmVuZGVyIEFjdGl2ZVRyYWl0cyBhbmQgSGV4R3JpZCBjb21wb25lbnRzICovfVxyXG4gICAgICAgIDxBY3RpdmVUcmFpdHMgLz5cclxuICAgICAgICA8SGV4R3JpZCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIFJlbmRlciBDaGFtcGlvblNlYXJjaEJhciBhbmQgcGFzcyBoYW5kbGVTZWFyY2ggYXMgYSBwcm9wIGZvciBvblNlYXJjaCBldmVudCAqL31cclxuICAgICAgPENoYW1waW9uU2VhcmNoQmFyIG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9IC8+XHJcbiAgICAgIHsvKiBSZW5kZXIgQ2hhbXBpb25JY29ucyBhbmQgcGFzcyB0aGUgZmlsdGVyZWRDaGFtcGlvbnMgYXMgYSBwcm9wICovfVxyXG4gICAgICA8Q2hhbXBpb25JY29ucyBjaGFtcGlvbnM9e2ZpbHRlcmVkQ2hhbXBpb25zfSAvPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBFeHBvcnQgdGhlIEJ1aWxkZXIgY29tcG9uZW50IGFzIGRlZmF1bHRcclxuZXhwb3J0IGRlZmF1bHQgQnVpbGRlcjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGV4R3JpZCIsIkNoYW1waW9uSWNvbnMiLCJBY3RpdmVUcmFpdHMiLCJDaGFtcGlvblNlYXJjaEJhciIsImNoYW1waW9uc0RhdGEiLCJCdWlsZGVyIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsIm5hbWUiLCJ0cmFpdCIsImNvc3QiLCJoYW5kbGVTZWFyY2giLCJuZXdTZWFyY2hJbnB1dCIsImZpbHRlcmVkQ2hhbXBpb25zIiwiZmlsdGVyIiwiY2hhbXBpb24iLCJuYW1lTWF0Y2giLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwidHJhaXRNYXRjaCIsInRyYWl0cyIsImNvc3RNYXRjaCIsIk51bWJlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJvblNlYXJjaCIsImNoYW1waW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Builder.jsx\n"));

/***/ })

});