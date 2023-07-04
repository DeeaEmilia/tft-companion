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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ \"./node_modules/react-dnd/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable react/prop-types */ \nvar _s = $RefreshSig$();\n\n\nconst Hexagon = (param)=>{\n    let { id, moveChampion } = param;\n    _s();\n    const [champion, setChampion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [{ isOver, canDrop }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrop)(()=>({\n            accept: \"champion\",\n            drop: (item)=>{\n                if (!champion) {\n                    setChampion(item);\n                    moveChampion(item.id, id);\n                    return {\n                        id\n                    };\n                }\n            },\n            collect: (monitor)=>({\n                    isOver: !!monitor.isOver(),\n                    canDrop: !!monitor.canDrop()\n                })\n        }));\n    const [{ isDragging }, drag] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrag)(()=>({\n            type: \"champion\",\n            item: champion,\n            canDrag: !!champion,\n            end: (item, monitor)=>{\n                if (!monitor.didDrop()) {\n                    setChampion(null);\n                    moveChampion(item.id);\n                }\n            },\n            collect: (monitor)=>({\n                    isDragging: !!monitor.isDragging()\n                })\n        }));\n    const ref = (node)=>{\n        drag(node);\n        drop(node);\n    };\n    let boxShadow;\n    if (isOver) {\n        boxShadow = \"0 0 10px var(--accent)\";\n    } else if (isDragging) {\n        boxShadow = \"0 0 20px var(--accent)\";\n    } else {\n        boxShadow = \"none\"; // default box shadow\n    }\n    let cursor;\n    if (canDrop) {\n        cursor = \"pointer\";\n    } else {\n        cursor = \"default\"; // default cursor\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"hexagon-border\",\n        style: {\n            boxShadow: boxShadow,\n            cursor: cursor\n        },\n        onDoubleClick: ()=>setChampion(null),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                backgroundImage: champion ? \"url(\".concat(champion.icon, \")\") : \"none\",\n                backgroundSize: \"contain\",\n                width: \"100%\",\n                height: \"100%\",\n                clipPath: \"polygon(50% 0, 100% 23%, 100% 74%, 50% 100%, 0 75%, 0 24%)\",\n                boxSizing: \"border-box\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"100%\",\n                height: \"100%\",\n                viewBox: \"0 0 100 100\",\n                fill: \"transparent\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"g\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"polygon\", {\n                        className: \"hexagon\",\n                        points: \"2.1,73.8 2.1,26.2 43.6,2.3 85,26.2 85,73.8 43.6,97.7\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n                lineNumber: 74,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\Hexagon.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hexagon, \"tWvA3U30MRLL0rs06YrhmGIJLTg=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrop,\n        react_dnd__WEBPACK_IMPORTED_MODULE_2__.useDrag\n    ];\n});\n_c = Hexagon;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hexagon);\nvar _c;\n$RefreshReg$(_c, \"Hexagon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZXhhZ29uLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxtQ0FBbUM7O0FBQ1U7QUFDWjtBQUVqQyxNQUFNRyxVQUFVO1FBQUMsRUFBRUMsRUFBRSxFQUFFQyxZQUFZLEVBQUU7O0lBQ25DLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNLENBQUMsRUFBRU0sTUFBTSxFQUFFQyxPQUFPLEVBQUUsRUFBRUMsS0FBSyxHQUFHVixrREFBT0EsQ0FBQyxJQUFPO1lBQ2pEVyxRQUFRO1lBQ1JELE1BQU0sQ0FBQ0U7Z0JBQ0wsSUFBSSxDQUFDTixVQUFVO29CQUNiQyxZQUFZSztvQkFDWlAsYUFBYU8sS0FBS1IsRUFBRSxFQUFFQTtvQkFDdEIsT0FBTzt3QkFBRUE7b0JBQUc7Z0JBQ2Q7WUFDRjtZQUNBUyxTQUFTLENBQUNDLFVBQWE7b0JBQ3JCTixRQUFRLENBQUMsQ0FBQ00sUUFBUU4sTUFBTTtvQkFDeEJDLFNBQVMsQ0FBQyxDQUFDSyxRQUFRTCxPQUFPO2dCQUM1QjtRQUNGO0lBRUEsTUFBTSxDQUFDLEVBQUVNLFVBQVUsRUFBRSxFQUFFQyxLQUFLLEdBQUdmLGtEQUFPQSxDQUFDLElBQU87WUFDNUNnQixNQUFNO1lBQ05MLE1BQU1OO1lBQ05ZLFNBQVMsQ0FBQyxDQUFDWjtZQUNYYSxLQUFLLENBQUNQLE1BQU1FO2dCQUNWLElBQUksQ0FBQ0EsUUFBUU0sT0FBTyxJQUFJO29CQUN0QmIsWUFBWTtvQkFDWkYsYUFBYU8sS0FBS1IsRUFBRTtnQkFDdEI7WUFDRjtZQUNBUyxTQUFTLENBQUNDLFVBQWE7b0JBQ3JCQyxZQUFZLENBQUMsQ0FBQ0QsUUFBUUMsVUFBVTtnQkFDbEM7UUFDRjtJQUVBLE1BQU1NLE1BQU0sQ0FBQ0M7UUFDWE4sS0FBS007UUFDTFosS0FBS1k7SUFDUDtJQUVBLElBQUlDO0lBQ0osSUFBSWYsUUFBUTtRQUNWZSxZQUFZO0lBQ2QsT0FBTyxJQUFJUixZQUFZO1FBQ3JCUSxZQUFZO0lBQ2QsT0FBTztRQUNMQSxZQUFZLFFBQVEscUJBQXFCO0lBQzNDO0lBRUEsSUFBSUM7SUFDSixJQUFJZixTQUFTO1FBQ1hlLFNBQVM7SUFDWCxPQUFPO1FBQ0xBLFNBQVMsV0FBVyxpQkFBaUI7SUFDdkM7SUFDQSxxQkFDRSw4REFBQ0M7UUFDQ0osS0FBS0E7UUFDTEssV0FBVTtRQUNWQyxPQUFPO1lBQUVKLFdBQVdBO1lBQVdDLFFBQVFBO1FBQU87UUFDOUNJLGVBQWUsSUFBTXJCLFlBQVk7a0JBQ2pDLDRFQUFDa0I7WUFDQ0UsT0FBTztnQkFDTEUsaUJBQWlCdkIsV0FBVyxPQUFxQixPQUFkQSxTQUFTd0IsSUFBSSxFQUFDLE9BQUs7Z0JBQ3REQyxnQkFBZ0I7Z0JBQ2hCQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxVQUNFO2dCQUNGQyxXQUFXO1lBQ2I7c0JBQ0EsNEVBQUNDO2dCQUNDSixPQUFNO2dCQUNOQyxRQUFPO2dCQUNQSSxTQUFRO2dCQUNSQyxNQUFLO2dCQUNMQyxPQUFNOzBCQUNOLDRFQUFDQzs4QkFDQyw0RUFBQ0M7d0JBQ0NmLFdBQVU7d0JBQ1ZnQixRQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtHQXJGTXZDOztRQUdnQ0gsOENBQU9BO1FBZVpDLDhDQUFPQTs7O0tBbEJsQ0U7QUF1Rk4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGV4YWdvbi5qc3g/MGNjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXHJcbmltcG9ydCB7IHVzZURyb3AsIHVzZURyYWcgfSBmcm9tIFwicmVhY3QtZG5kXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBIZXhhZ29uID0gKHsgaWQsIG1vdmVDaGFtcGlvbiB9KSA9PiB7XHJcbiAgY29uc3QgW2NoYW1waW9uLCBzZXRDaGFtcGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgW3sgaXNPdmVyLCBjYW5Ecm9wIH0sIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xyXG4gICAgYWNjZXB0OiBcImNoYW1waW9uXCIsXHJcbiAgICBkcm9wOiAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWNoYW1waW9uKSB7XHJcbiAgICAgICAgc2V0Q2hhbXBpb24oaXRlbSk7XHJcbiAgICAgICAgbW92ZUNoYW1waW9uKGl0ZW0uaWQsIGlkKTtcclxuICAgICAgICByZXR1cm4geyBpZCB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgIGlzT3ZlcjogISFtb25pdG9yLmlzT3ZlcigpLFxyXG4gICAgICBjYW5Ecm9wOiAhIW1vbml0b3IuY2FuRHJvcCgpLFxyXG4gICAgfSksXHJcbiAgfSkpO1xyXG5cclxuICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZygoKSA9PiAoe1xyXG4gICAgdHlwZTogXCJjaGFtcGlvblwiLFxyXG4gICAgaXRlbTogY2hhbXBpb24sXHJcbiAgICBjYW5EcmFnOiAhIWNoYW1waW9uLFxyXG4gICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICBpZiAoIW1vbml0b3IuZGlkRHJvcCgpKSB7XHJcbiAgICAgICAgc2V0Q2hhbXBpb24obnVsbCk7XHJcbiAgICAgICAgbW92ZUNoYW1waW9uKGl0ZW0uaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgIGlzRHJhZ2dpbmc6ICEhbW9uaXRvci5pc0RyYWdnaW5nKCksXHJcbiAgICB9KSxcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IHJlZiA9IChub2RlKSA9PiB7XHJcbiAgICBkcmFnKG5vZGUpO1xyXG4gICAgZHJvcChub2RlKTtcclxuICB9O1xyXG5cclxuICBsZXQgYm94U2hhZG93O1xyXG4gIGlmIChpc092ZXIpIHtcclxuICAgIGJveFNoYWRvdyA9IFwiMCAwIDEwcHggdmFyKC0tYWNjZW50KVwiO1xyXG4gIH0gZWxzZSBpZiAoaXNEcmFnZ2luZykge1xyXG4gICAgYm94U2hhZG93ID0gXCIwIDAgMjBweCB2YXIoLS1hY2NlbnQpXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJveFNoYWRvdyA9IFwibm9uZVwiOyAvLyBkZWZhdWx0IGJveCBzaGFkb3dcclxuICB9XHJcblxyXG4gIGxldCBjdXJzb3I7XHJcbiAgaWYgKGNhbkRyb3ApIHtcclxuICAgIGN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjdXJzb3IgPSBcImRlZmF1bHRcIjsgLy8gZGVmYXVsdCBjdXJzb3JcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgIGNsYXNzTmFtZT1cImhleGFnb24tYm9yZGVyXCJcclxuICAgICAgc3R5bGU9e3sgYm94U2hhZG93OiBib3hTaGFkb3csIGN1cnNvcjogY3Vyc29yIH19XHJcbiAgICAgIG9uRG91YmxlQ2xpY2s9eygpID0+IHNldENoYW1waW9uKG51bGwpfT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNoYW1waW9uID8gYHVybCgke2NoYW1waW9uLmljb259KWAgOiBcIm5vbmVcIixcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICBjbGlwUGF0aDpcclxuICAgICAgICAgICAgXCJwb2x5Z29uKDUwJSAwLCAxMDAlIDIzJSwgMTAwJSA3NCUsIDUwJSAxMDAlLCAwIDc1JSwgMCAyNCUpXCIsXHJcbiAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXHJcbiAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGV4YWdvblwiXHJcbiAgICAgICAgICAgICAgcG9pbnRzPVwiMi4xLDczLjggMi4xLDI2LjIgNDMuNiwyLjMgODUsMjYuMiA4NSw3My44IDQzLjYsOTcuN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhleGFnb247XHJcbiJdLCJuYW1lcyI6WyJ1c2VEcm9wIiwidXNlRHJhZyIsInVzZVN0YXRlIiwiSGV4YWdvbiIsImlkIiwibW92ZUNoYW1waW9uIiwiY2hhbXBpb24iLCJzZXRDaGFtcGlvbiIsImlzT3ZlciIsImNhbkRyb3AiLCJkcm9wIiwiYWNjZXB0IiwiaXRlbSIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNEcmFnZ2luZyIsImRyYWciLCJ0eXBlIiwiY2FuRHJhZyIsImVuZCIsImRpZERyb3AiLCJyZWYiLCJub2RlIiwiYm94U2hhZG93IiwiY3Vyc29yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbkRvdWJsZUNsaWNrIiwiYmFja2dyb3VuZEltYWdlIiwiaWNvbiIsImJhY2tncm91bmRTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjbGlwUGF0aCIsImJveFNpemluZyIsInN2ZyIsInZpZXdCb3giLCJmaWxsIiwieG1sbnMiLCJnIiwicG9seWdvbiIsInBvaW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Hexagon.jsx\n"));

/***/ })

});