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

/***/ "./src/components/ChampionCard.jsx":
/*!*****************************************!*\
  !*** ./src/components/ChampionCard.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_traits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/traits */ \"./src/data/traits.js\");\n/* harmony import */ var _data_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/items */ \"./src/data/items.js\");\n/* harmony import */ var _data_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/components */ \"./src/data/components.js\");\n/* harmony import */ var _data_costColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/costColors */ \"./src/data/costColors.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* eslint-disable react/prop-types */ \n\n\n\n\n\n\nconst ChampionCard = (param)=>{\n    let { champion, setHoveredChampion, setHoveredItem, hoveredChampion, hoveredItem, comp, championComp } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n        className: \"champs-wrapper flex-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tooltip-champ \".concat(hoveredChampion === \"\".concat(comp.name, \"-\").concat(champion.name) ? \"visible\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: champion.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        className: \"tooltip-champ-icon\",\n                        src: champion.icon,\n                        alt: \"\".concat(champion.name, \" icon\"),\n                        width: 170,\n                        height: 170\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"champion-details\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: champion.traits.map((traitName)=>{\n                                    const trait = _data_traits__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((traitItem)=>traitItem.name === traitName);\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"cc-trait-name flex-display\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                src: trait.emblem,\n                                                alt: traitName,\n                                                style: {\n                                                    height: \"1em\"\n                                                },\n                                                width: 50,\n                                                height: 50\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            \" \",\n                                            traitName\n                                        ]\n                                    }, traitName, true, {\n                                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cc-cost-wrapper flex-display\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: \"/assets/icon-gold.svg\",\n                                        alt: \"gold icon\",\n                                        className: \"cc-gold-icon\",\n                                        width: 50,\n                                        height: 50\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    champion.cost\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"item-holder flex-display\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/champion-page/\".concat(champion.name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: champion.icon,\n                            alt: champion.name,\n                            className: \"champion-icon\",\n                            width: 100,\n                            height: 75,\n                            style: {\n                                borderColor: _data_costColors__WEBPACK_IMPORTED_MODULE_5__[\"default\"][champion.cost]\n                            },\n                            onMouseEnter: ()=>setHoveredChampion(\"\".concat(comp.name, \"-\").concat(champion.name)),\n                            onMouseLeave: ()=>setHoveredChampion(null)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"item-wrapper flex-display\",\n                        children: championComp.items.map((itemId, index)=>{\n                            const item = _data_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find((item)=>item.id === itemId);\n                            if (item) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/item-page/\".concat(itemId),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                src: item.icon,\n                                                alt: item.name,\n                                                className: \"item-icon\",\n                                                width: 50,\n                                                height: 50,\n                                                onMouseEnter: ()=>setHoveredItem(\"\".concat(comp.name, \"-\").concat(champion.name, \"-\").concat(itemId)),\n                                                onMouseLeave: ()=>setHoveredItem(null)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"tooltip-component \".concat(hoveredItem === \"\".concat(comp.name, \"-\").concat(champion.name, \"-\").concat(itemId) ? \"visible\" : \"\"),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                            children: \" Description:\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                            lineNumber: 116,\n                                                            columnNumber: 23\n                                                        }, undefined),\n                                                        \" \",\n                                                        item.description\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                item.components.map((componentId, index)=>{\n                                                    const component = _data_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find((comp)=>comp.id === componentId);\n                                                    if (component) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"components-wrapper flex-display\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                                    src: component.icon,\n                                                                    alt: component.name,\n                                                                    className: \"component-image\",\n                                                                    width: 64,\n                                                                    height: 64\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                                    lineNumber: 127,\n                                                                    columnNumber: 29\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                                    children: component.name\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                                    lineNumber: 134,\n                                                                    columnNumber: 29\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    children: component.description\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                                    lineNumber: 135,\n                                                                    columnNumber: 29\n                                                                }, undefined)\n                                                            ]\n                                                        }, component.id + \"-\" + index, true, {\n                                                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                            lineNumber: 124,\n                                                            columnNumber: 27\n                                                        }, undefined);\n                                                    }\n                                                    return null;\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, itemId + index, true, {\n                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 17\n                                }, undefined);\n                            } else {\n                                console.error(\"Item with id \".concat(itemId, \" not found for champion \").concat(champion.name, \".\"));\n                                return null;\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                className: \"champ-name\",\n                children: champion.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, champion.name ? \"\".concat(comp.name, \"-\").concat(champion.name) : \"\".concat(comp.name, \"-\").concat(Math.random().toString()), true, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ChampionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChampionCard);\nvar _c;\n$RefreshReg$(_c, \"ChampionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y29tcG9uZW50cy9DaGFtcGlvbkNhcmQuanN4PzgyZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB0cmFpdHNEYXRhIGZyb20gXCIuLi9kYXRhL3RyYWl0c1wiO1xyXG5pbXBvcnQgaXRlbXMgZnJvbSBcIi4uL2RhdGEvaXRlbXNcIjtcclxuaW1wb3J0IGNvbXBvbmVudHNEYXRhIGZyb20gXCIuLi9kYXRhL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IGNvc3RDb2xvcnMgZnJvbSBcIi4uL2RhdGEvY29zdENvbG9yc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IENoYW1waW9uQ2FyZCA9ICh7XHJcbiAgY2hhbXBpb24sXHJcbiAgc2V0SG92ZXJlZENoYW1waW9uLFxyXG4gIHNldEhvdmVyZWRJdGVtLFxyXG4gIGhvdmVyZWRDaGFtcGlvbixcclxuICBob3ZlcmVkSXRlbSxcclxuICBjb21wLFxyXG4gIGNoYW1waW9uQ29tcCxcclxufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZmlndXJlXHJcbiAgICAgIGNsYXNzTmFtZT1cImNoYW1wcy13cmFwcGVyIGZsZXgtY2VudGVyXCJcclxuICAgICAga2V5PXtcclxuICAgICAgICBjaGFtcGlvbi5uYW1lXHJcbiAgICAgICAgICA/IGAke2NvbXAubmFtZX0tJHtjaGFtcGlvbi5uYW1lfWBcclxuICAgICAgICAgIDogYCR7Y29tcC5uYW1lfS0ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoKX1gXHJcbiAgICAgIH0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2B0b29sdGlwLWNoYW1wICR7XHJcbiAgICAgICAgICBob3ZlcmVkQ2hhbXBpb24gPT09IGAke2NvbXAubmFtZX0tJHtjaGFtcGlvbi5uYW1lfWAgPyBcInZpc2libGVcIiA6IFwiXCJcclxuICAgICAgICB9YH0+XHJcbiAgICAgICAgPGgzPntjaGFtcGlvbi5uYW1lfTwvaDM+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0b29sdGlwLWNoYW1wLWljb25cIlxyXG4gICAgICAgICAgc3JjPXtjaGFtcGlvbi5pY29ufVxyXG4gICAgICAgICAgYWx0PXtgJHtjaGFtcGlvbi5uYW1lfSBpY29uYH1cclxuICAgICAgICAgIHdpZHRoPXsxNzB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezE3MH1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW1waW9uLWRldGFpbHNcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjaGFtcGlvbi50cmFpdHMubWFwKCh0cmFpdE5hbWUpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB0cmFpdCA9IHRyYWl0c0RhdGEuZmluZChcclxuICAgICAgICAgICAgICAgICh0cmFpdEl0ZW0pID0+IHRyYWl0SXRlbS5uYW1lID09PSB0cmFpdE5hbWVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYy10cmFpdC1uYW1lIGZsZXgtZGlzcGxheVwiIGtleT17dHJhaXROYW1lfT5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXt0cmFpdC5lbWJsZW19XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXt0cmFpdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjFlbVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7dHJhaXROYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNjLWNvc3Qtd3JhcHBlciBmbGV4LWRpc3BsYXlcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pY29uLWdvbGQuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJnb2xkIGljb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNjLWdvbGQtaWNvblwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHtjaGFtcGlvbi5jb3N0fVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0taG9sZGVyIGZsZXgtZGlzcGxheVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbXBpb24tcGFnZS8ke2NoYW1waW9uLm5hbWV9YH0+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtjaGFtcGlvbi5pY29ufVxyXG4gICAgICAgICAgICBhbHQ9e2NoYW1waW9uLm5hbWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYW1waW9uLWljb25cIlxyXG4gICAgICAgICAgICB3aWR0aD17MTAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezc1fVxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJDb2xvcjogY29zdENvbG9yc1tjaGFtcGlvbi5jb3N0XSB9fVxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0SG92ZXJlZENoYW1waW9uKGAke2NvbXAubmFtZX0tJHtjaGFtcGlvbi5uYW1lfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkQ2hhbXBpb24obnVsbCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0td3JhcHBlciBmbGV4LWRpc3BsYXlcIj5cclxuICAgICAgICAgIHtjaGFtcGlvbkNvbXAuaXRlbXMubWFwKChpdGVtSWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtSWQpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbUlkICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2l0ZW0tcGFnZS8ke2l0ZW1JZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG92ZXJlZEl0ZW0oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7Y29tcC5uYW1lfS0ke2NoYW1waW9uLm5hbWV9LSR7aXRlbUlkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkSXRlbShudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0b29sdGlwLWNvbXBvbmVudCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgaG92ZXJlZEl0ZW0gPT09IGAke2NvbXAubmFtZX0tJHtjaGFtcGlvbi5uYW1lfS0ke2l0ZW1JZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND57aXRlbS5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPiBEZXNjcmlwdGlvbjo8L3N0cm9uZz4ge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmNvbXBvbmVudHMubWFwKChjb21wb25lbnRJZCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNEYXRhLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjb21wKSA9PiBjb21wLmlkID09PSBjb21wb25lbnRJZFxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbXBvbmVudC5pZCArIFwiLVwiICsgaW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnRzLXdyYXBwZXIgZmxleC1kaXNwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb21wb25lbnQuaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtjb21wb25lbnQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50LWltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezY0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezY0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57Y29tcG9uZW50Lm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntjb21wb25lbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgYEl0ZW0gd2l0aCBpZCAke2l0ZW1JZH0gbm90IGZvdW5kIGZvciBjaGFtcGlvbiAke2NoYW1waW9uLm5hbWV9LmBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxmaWdjYXB0aW9uIGNsYXNzTmFtZT1cImNoYW1wLW5hbWVcIj57Y2hhbXBpb24ubmFtZX08L2ZpZ2NhcHRpb24+XHJcbiAgICA8L2ZpZ3VyZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhbXBpb25DYXJkO1xyXG4iXSwibmFtZXMiOlsiTGluayIsInRyYWl0c0RhdGEiLCJpdGVtcyIsImNvbXBvbmVudHNEYXRhIiwiY29zdENvbG9ycyIsIkltYWdlIiwiQ2hhbXBpb25DYXJkIiwiY2hhbXBpb24iLCJzZXRIb3ZlcmVkQ2hhbXBpb24iLCJzZXRIb3ZlcmVkSXRlbSIsImhvdmVyZWRDaGFtcGlvbiIsImhvdmVyZWRJdGVtIiwiY29tcCIsImNoYW1waW9uQ29tcCIsImZpZ3VyZSIsImNsYXNzTmFtZSIsImRpdiIsIm5hbWUiLCJoMyIsInNyYyIsImljb24iLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInRyYWl0cyIsIm1hcCIsInRyYWl0TmFtZSIsInRyYWl0IiwiZmluZCIsInRyYWl0SXRlbSIsInNwYW4iLCJlbWJsZW0iLCJzdHlsZSIsImNvc3QiLCJocmVmIiwiYm9yZGVyQ29sb3IiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJpdGVtSWQiLCJpbmRleCIsIml0ZW0iLCJpZCIsImg0IiwicCIsInN0cm9uZyIsImRlc2NyaXB0aW9uIiwiY29tcG9uZW50cyIsImNvbXBvbmVudElkIiwiY29tcG9uZW50IiwiaDUiLCJjb25zb2xlIiwiZXJyb3IiLCJmaWdjYXB0aW9uIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ChampionCard.jsx\n"));

/***/ })

});