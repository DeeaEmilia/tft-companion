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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\n\nconst Hexagon = (param)=>{\n    let { id, moveChampion } = param;\n    _s();\n    const [champion, setChampion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [{ isOver, canDrop }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrop)(()=>({\n            accept: \"champion\",\n            drop: (item)=>{\n                if (!champion) {\n                    setChampion(item);\n                    return {\n                        id\n                    };\n                }\n            },\n            collect: (monitor)=>({\n                    isOver: !!monitor.isOver(),\n                    canDrop: !!monitor.canDrop()\n                })\n        }));\n    const [{ isDragging }, drag] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrag)(()=>({\n            type: \"champion\",\n            item: champion,\n            canDrag: !!champion,\n            end: (item, monitor)=>{\n                if (!monitor.didDrop()) {\n                    setChampion(null);\n                    moveChampion(item.id);\n                }\n            },\n            collect: (monitor)=>({\n                    isDragging: !!monitor.isDragging()\n                })\n        }));\n    const ref = (node)=>{\n        drag(node);\n        drop(node);\n    };\n    let borderColor;\n    if (isOver) {\n        borderColor = \"green\";\n    } else if (isDragging) {\n        borderColor = \"pink\";\n    } else {\n        borderColor = \"grey\";\n    }\n    let cursor;\n    if (canDrop) {\n        cursor = \"pointer\";\n    } else {\n        cursor = \"default\"; // default cursor\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"hexagon-border\",\n        style: {\n            borderColor: borderColor,\n            cursor: cursor\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                backgroundImage: champion ? \"url(\".concat(champion.icon, \")\") : \"none\",\n                backgroundSize: \"contain\",\n                width: \"100%\",\n                height: \"100%\",\n                clipPath: \"polygon(50% 0, 100% 23%, 100% 74%, 50% 100%, 0 75%, 0 24%)\",\n                boxSizing: \"border-box\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"100%\",\n                height: \"100%\",\n                viewBox: \"0 0 100 100\",\n                fill: \"transparent\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                        className: \"hexagon\",\n                        points: \"2.1,73.8 2.1,26.2 43.6,2.3 85,26.2 85,73.8 43.6,97.7\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hexagon, \"tWvA3U30MRLL0rs06YrhmGIJLTg=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrop,\n        react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrag\n    ];\n});\n_c = Hexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hexagon);\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZXhhZ29uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUM7O0FBQ1U7QUFDWjtBQUVqQyxNQUFNRyxVQUFVO1FBQUMsRUFBRUMsRUFBRSxFQUFFQyxZQUFZLEVBQUU7O0lBQ25DLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNLENBQUMsRUFBRU0sTUFBTSxFQUFFQyxPQUFPLEVBQUUsRUFBRUMsS0FBSyxHQUFHVixrREFBT0EsQ0FBQyxJQUFPO1lBQ2pEVyxRQUFRO1lBQ1JELE1BQU0sQ0FBQ0U7Z0JBQ0wsSUFBSSxDQUFDTixVQUFVO29CQUNiQyxZQUFZSztvQkFDWixPQUFPO3dCQUFFUjtvQkFBRztnQkFDZDtZQUNGO1lBQ0FTLFNBQVMsQ0FBQ0MsVUFBYTtvQkFDckJOLFFBQVEsQ0FBQyxDQUFDTSxRQUFRTixNQUFNO29CQUN4QkMsU0FBUyxDQUFDLENBQUNLLFFBQVFMLE9BQU87Z0JBQzVCO1FBQ0Y7SUFFQSxNQUFNLENBQUMsRUFBRU0sVUFBVSxFQUFFLEVBQUVDLEtBQUssR0FBR2Ysa0RBQU9BLENBQUMsSUFBTztZQUM1Q2dCLE1BQU07WUFDTkwsTUFBTU47WUFDTlksU0FBUyxDQUFDLENBQUNaO1lBQ1hhLEtBQUssQ0FBQ1AsTUFBTUU7Z0JBQ1YsSUFBSSxDQUFDQSxRQUFRTSxPQUFPLElBQUk7b0JBQ3RCYixZQUFZO29CQUNaRixhQUFhTyxLQUFLUixFQUFFO2dCQUN0QjtZQUNGO1lBQ0FTLFNBQVMsQ0FBQ0MsVUFBYTtvQkFDckJDLFlBQVksQ0FBQyxDQUFDRCxRQUFRQyxVQUFVO2dCQUNsQztRQUNGO0lBRUEsTUFBTU0sTUFBTSxDQUFDQztRQUNYTixLQUFLTTtRQUNMWixLQUFLWTtJQUNQO0lBQ0EsSUFBSUM7SUFDSixJQUFJZixRQUFRO1FBQ1ZlLGNBQWM7SUFDaEIsT0FBTyxJQUFJUixZQUFZO1FBQ3JCUSxjQUFjO0lBQ2hCLE9BQU87UUFDTEEsY0FBYztJQUNoQjtJQUVBLElBQUlDO0lBQ0osSUFBSWYsU0FBUztRQUNYZSxTQUFTO0lBQ1gsT0FBTztRQUNMQSxTQUFTLFdBQVcsaUJBQWlCO0lBQ3ZDO0lBQ0EscUJBQ0UsOERBQUNDO1FBQ0NKLEtBQUtBO1FBQ0xLLFdBQVU7UUFDVkMsT0FBTztZQUFFSixhQUFhQTtZQUFhQyxRQUFRQTtRQUFPO2tCQUNsRCw0RUFBQ0M7WUFDQ0UsT0FBTztnQkFDTEMsaUJBQWlCdEIsV0FBVyxPQUFxQixPQUFkQSxTQUFTdUIsSUFBSSxFQUFDLE9BQUs7Z0JBQ3REQyxnQkFBZ0I7Z0JBQ2hCQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxVQUNFO2dCQUNGQyxXQUFXO1lBQ2I7c0JBQ0EsNEVBQUNDO2dCQUNDSixPQUFNO2dCQUNOQyxRQUFPO2dCQUNQSSxTQUFRO2dCQUNSQyxNQUFLO2dCQUNMQyxPQUFNOzBCQUNOLDRFQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQ0NkLFdBQVU7d0JBQ1ZlLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCO0dBbEZNdEM7O1FBR2dDSCw4Q0FBT0E7UUFjWkMsOENBQU9BOzs7S0FqQmxDRTtBQW9GTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZXhhZ29uLmpzeD8wY2M2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IHsgdXNlRHJvcCwgdXNlRHJhZyB9IGZyb20gXCJyZWFjdC1kbmRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhleGFnb24gPSAoeyBpZCwgbW92ZUNoYW1waW9uIH0pID0+IHtcclxuICBjb25zdCBbY2hhbXBpb24sIHNldENoYW1waW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBbeyBpc092ZXIsIGNhbkRyb3AgfSwgZHJvcF0gPSB1c2VEcm9wKCgpID0+ICh7XHJcbiAgICBhY2NlcHQ6IFwiY2hhbXBpb25cIixcclxuICAgIGRyb3A6IChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghY2hhbXBpb24pIHtcclxuICAgICAgICBzZXRDaGFtcGlvbihpdGVtKTtcclxuICAgICAgICByZXR1cm4geyBpZCB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgIGlzT3ZlcjogISFtb25pdG9yLmlzT3ZlcigpLFxyXG4gICAgICBjYW5Ecm9wOiAhIW1vbml0b3IuY2FuRHJvcCgpLFxyXG4gICAgfSksXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZygoKSA9PiAoe1xyXG4gICAgdHlwZTogXCJjaGFtcGlvblwiLFxyXG4gICAgaXRlbTogY2hhbXBpb24sXHJcbiAgICBjYW5EcmFnOiAhIWNoYW1waW9uLFxyXG4gICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICBpZiAoIW1vbml0b3IuZGlkRHJvcCgpKSB7XHJcbiAgICAgICAgc2V0Q2hhbXBpb24obnVsbCk7XHJcbiAgICAgICAgbW92ZUNoYW1waW9uKGl0ZW0uaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgIGlzRHJhZ2dpbmc6ICEhbW9uaXRvci5pc0RyYWdnaW5nKCksXHJcbiAgICB9KSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IHJlZiA9IChub2RlKSA9PiB7XHJcbiAgICBkcmFnKG5vZGUpO1xyXG4gICAgZHJvcChub2RlKTtcclxuICB9O1xyXG4gIGxldCBib3JkZXJDb2xvcjtcclxuICBpZiAoaXNPdmVyKSB7XHJcbiAgICBib3JkZXJDb2xvciA9IFwiZ3JlZW5cIjtcclxuICB9IGVsc2UgaWYgKGlzRHJhZ2dpbmcpIHtcclxuICAgIGJvcmRlckNvbG9yID0gXCJwaW5rXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvcmRlckNvbG9yID0gXCJncmV5XCI7XHJcbiAgfVxyXG5cclxuICBsZXQgY3Vyc29yO1xyXG4gIGlmIChjYW5Ecm9wKSB7XHJcbiAgICBjdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgY3Vyc29yID0gXCJkZWZhdWx0XCI7IC8vIGRlZmF1bHQgY3Vyc29yXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBjbGFzc05hbWU9XCJoZXhhZ29uLWJvcmRlclwiXHJcbiAgICAgIHN0eWxlPXt7IGJvcmRlckNvbG9yOiBib3JkZXJDb2xvciwgY3Vyc29yOiBjdXJzb3IgfX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBjaGFtcGlvbiA/IGB1cmwoJHtjaGFtcGlvbi5pY29ufSlgIDogXCJub25lXCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCIsXHJcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgY2xpcFBhdGg6XHJcbiAgICAgICAgICAgIFwicG9seWdvbig1MCUgMCwgMTAwJSAyMyUsIDEwMCUgNzQlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMjQlKVwiLFxyXG4gICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIlxyXG4gICAgICAgICAgZmlsbD1cInRyYW5zcGFyZW50XCJcclxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhleGFnb25cIlxyXG4gICAgICAgICAgICAgIHBvaW50cz1cIjIuMSw3My44IDIuMSwyNi4yIDQzLjYsMi4zIDg1LDI2LjIgODUsNzMuOCA0My42LDk3LjdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXhhZ29uO1xyXG4iXSwibmFtZXMiOlsidXNlRHJvcCIsInVzZURyYWciLCJ1c2VTdGF0ZSIsIkhleGFnb24iLCJpZCIsIm1vdmVDaGFtcGlvbiIsImNoYW1waW9uIiwic2V0Q2hhbXBpb24iLCJpc092ZXIiLCJjYW5Ecm9wIiwiZHJvcCIsImFjY2VwdCIsIml0ZW0iLCJjb2xsZWN0IiwibW9uaXRvciIsImlzRHJhZ2dpbmciLCJkcmFnIiwidHlwZSIsImNhbkRyYWciLCJlbmQiLCJkaWREcm9wIiwicmVmIiwibm9kZSIsImJvcmRlckNvbG9yIiwiY3Vyc29yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpY29uIiwiYmFja2dyb3VuZFNpemUiLCJ3aWR0aCIsImhlaWdodCIsImNsaXBQYXRoIiwiYm94U2l6aW5nIiwic3ZnIiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsImciLCJwb2x5Z29uIiwicG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hexagon.jsx\n"));

/***/ })

});