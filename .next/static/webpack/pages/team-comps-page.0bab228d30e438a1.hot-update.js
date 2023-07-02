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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_traits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/traits */ \"./src/data/traits.js\");\n/* harmony import */ var _data_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/items */ \"./src/data/items.js\");\n/* harmony import */ var _data_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/components */ \"./src/data/components.js\");\n/* harmony import */ var _data_costColors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/costColors */ \"./src/data/costColors.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* eslint-disable react/prop-types */ \n\n\n\n\n\n\nconst ChampionCard = (param)=>{\n    let { champion, setHoveredChampion, setHoveredItem, hoveredChampion, hoveredItem, comp, championComp } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n        className: \"cc-champs-wrapper flex-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cc-tooltip-champ \".concat(hoveredChampion === \"\".concat(comp.name, \"-\").concat(champion.name) ? \"visible\" : \"\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: champion.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        className: \"cc-tooltip-champ-icon\",\n                        src: champion.icon,\n                        alt: \"\".concat(champion.name, \" icon\"),\n                        width: 500,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cc-details\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: champion.traits.map((traitName)=>{\n                                    const trait = _data_traits__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((traitItem)=>traitItem.name === traitName);\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"cc-trait-name flex-display\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                src: trait.emblem,\n                                                alt: traitName,\n                                                style: {\n                                                    height: \"1em\"\n                                                },\n                                                width: 500,\n                                                height: 300\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            \" \",\n                                            traitName\n                                        ]\n                                    }, traitName, true, {\n                                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cc-cost-wrapper flex-display\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: \"/assets/icon-gold.svg\",\n                                        alt: \"gold icon\",\n                                        className: \"cc-gold-icon\",\n                                        width: 500,\n                                        height: 300\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    champion.cost\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cc-item-holder flex-display\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/champion-page/\".concat(champion.name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            src: champion.icon,\n                            alt: champion.name,\n                            className: \"cc-champion-icon\",\n                            width: 500,\n                            height: 300,\n                            style: {\n                                borderColor: _data_costColors__WEBPACK_IMPORTED_MODULE_5__[\"default\"][champion.cost]\n                            },\n                            onMouseEnter: ()=>setHoveredChampion(\"\".concat(comp.name, \"-\").concat(champion.name)),\n                            onMouseLeave: ()=>setHoveredChampion(null)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"cc-item-wrapper flex-display\",\n                        children: championComp.items.map((itemId, index)=>{\n                            const item = _data_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find((item)=>item.id === itemId);\n                            if (item) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/item-page/\".concat(itemId),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                src: item.icon,\n                                                alt: item.name,\n                                                className: \"cc-square\",\n                                                width: 500,\n                                                height: 300,\n                                                onMouseEnter: ()=>setHoveredItem(\"\".concat(comp.name, \"-\").concat(champion.name, \"-\").concat(itemId)),\n                                                onMouseLeave: ()=>setHoveredItem(null)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"cc-tooltip-component \".concat(hoveredItem === \"\".concat(comp.name, \"-\").concat(champion.name, \"-\").concat(itemId) ? \"visible\" : \"\"),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                            children: \" Description:\"\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                            lineNumber: 116,\n                                                            columnNumber: 23\n                                                        }, undefined),\n                                                        \" \",\n                                                        item.description\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                    lineNumber: 114,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                item.components.map((componentId, index)=>{\n                                                    const component = _data_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].find((comp)=>comp.id === componentId);\n                                                    if (component) {\n                                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"cc-components-holder flex-display\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                                                    src: component.icon,\n                                                                    alt: component.name,\n                                                                    className: \"cc-border\",\n                                                                    width: 50,\n                                                                    height: 50\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                                    lineNumber: 127,\n                                                                    columnNumber: 29\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                                                    children: component.name\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                                    lineNumber: 134,\n                                                                    columnNumber: 29\n                                                                }, undefined),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                    children: component.description\n                                                                }, void 0, false, {\n                                                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                                    lineNumber: 135,\n                                                                    columnNumber: 29\n                                                                }, undefined)\n                                                            ]\n                                                        }, component.id + \"-\" + index, true, {\n                                                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                                            lineNumber: 124,\n                                                            columnNumber: 27\n                                                        }, undefined);\n                                                    }\n                                                    return null;\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, itemId + index, true, {\n                                    fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 17\n                                }, undefined);\n                            } else {\n                                console.error(\"Item with id \".concat(itemId, \" not found for champion \").concat(champion.name, \".\"));\n                                return null;\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figcaption\", {\n                className: \"cc-champ-name\",\n                children: champion.name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, champion.name ? \"\".concat(comp.name, \"-\").concat(champion.name) : \"\".concat(comp.name, \"-\").concat(Math.random().toString()), true, {\n        fileName: \"C:\\\\Users\\\\Deea\\\\Desktop\\\\tft-companion\\\\src\\\\components\\\\ChampionCard.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ChampionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChampionCard);\nvar _c;\n$RefreshReg$(_c, \"ChampionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2NvbXBvbmVudHMvQ2hhbXBpb25DYXJkLmpzeD84MmZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdHJhaXRzRGF0YSBmcm9tIFwiLi4vZGF0YS90cmFpdHNcIjtcclxuaW1wb3J0IGl0ZW1zIGZyb20gXCIuLi9kYXRhL2l0ZW1zXCI7XHJcbmltcG9ydCBjb21wb25lbnRzRGF0YSBmcm9tIFwiLi4vZGF0YS9jb21wb25lbnRzXCI7XHJcbmltcG9ydCBjb3N0Q29sb3JzIGZyb20gXCIuLi9kYXRhL2Nvc3RDb2xvcnNcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBDaGFtcGlvbkNhcmQgPSAoe1xyXG4gIGNoYW1waW9uLFxyXG4gIHNldEhvdmVyZWRDaGFtcGlvbixcclxuICBzZXRIb3ZlcmVkSXRlbSxcclxuICBob3ZlcmVkQ2hhbXBpb24sXHJcbiAgaG92ZXJlZEl0ZW0sXHJcbiAgY29tcCxcclxuICBjaGFtcGlvbkNvbXAsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZpZ3VyZVxyXG4gICAgICBjbGFzc05hbWU9XCJjYy1jaGFtcHMtd3JhcHBlciBmbGV4LWNlbnRlclwiXHJcbiAgICAgIGtleT17XHJcbiAgICAgICAgY2hhbXBpb24ubmFtZVxyXG4gICAgICAgICAgPyBgJHtjb21wLm5hbWV9LSR7Y2hhbXBpb24ubmFtZX1gXHJcbiAgICAgICAgICA6IGAke2NvbXAubmFtZX0tJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCl9YFxyXG4gICAgICB9PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgY2MtdG9vbHRpcC1jaGFtcCAke1xyXG4gICAgICAgICAgaG92ZXJlZENoYW1waW9uID09PSBgJHtjb21wLm5hbWV9LSR7Y2hhbXBpb24ubmFtZX1gID8gXCJ2aXNpYmxlXCIgOiBcIlwiXHJcbiAgICAgICAgfWB9PlxyXG4gICAgICAgIDxoMz57Y2hhbXBpb24ubmFtZX08L2gzPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2MtdG9vbHRpcC1jaGFtcC1pY29uXCJcclxuICAgICAgICAgIHNyYz17Y2hhbXBpb24uaWNvbn1cclxuICAgICAgICAgIGFsdD17YCR7Y2hhbXBpb24ubmFtZX0gaWNvbmB9XHJcbiAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7Y2hhbXBpb24udHJhaXRzLm1hcCgodHJhaXROYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgdHJhaXQgPSB0cmFpdHNEYXRhLmZpbmQoXHJcbiAgICAgICAgICAgICAgICAodHJhaXRJdGVtKSA9PiB0cmFpdEl0ZW0ubmFtZSA9PT0gdHJhaXROYW1lXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2MtdHJhaXQtbmFtZSBmbGV4LWRpc3BsYXlcIiBrZXk9e3RyYWl0TmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17dHJhaXQuZW1ibGVtfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17dHJhaXROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIxZW1cIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7dHJhaXROYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNjLWNvc3Qtd3JhcHBlciBmbGV4LWRpc3BsYXlcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL2Fzc2V0cy9pY29uLWdvbGQuc3ZnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJnb2xkIGljb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNjLWdvbGQtaWNvblwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2NoYW1waW9uLmNvc3R9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2MtaXRlbS1ob2xkZXIgZmxleC1kaXNwbGF5XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9jaGFtcGlvbi1wYWdlLyR7Y2hhbXBpb24ubmFtZX1gfT5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e2NoYW1waW9uLmljb259XHJcbiAgICAgICAgICAgIGFsdD17Y2hhbXBpb24ubmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2MtY2hhbXBpb24taWNvblwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBib3JkZXJDb2xvcjogY29zdENvbG9yc1tjaGFtcGlvbi5jb3N0XSB9fVxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgc2V0SG92ZXJlZENoYW1waW9uKGAke2NvbXAubmFtZX0tJHtjaGFtcGlvbi5uYW1lfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkQ2hhbXBpb24obnVsbCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNjLWl0ZW0td3JhcHBlciBmbGV4LWRpc3BsYXlcIj5cclxuICAgICAgICAgIHtjaGFtcGlvbkNvbXAuaXRlbXMubWFwKChpdGVtSWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtSWQpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbUlkICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2l0ZW0tcGFnZS8ke2l0ZW1JZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pY29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYy1zcXVhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcmVkSXRlbShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjb21wLm5hbWV9LSR7Y2hhbXBpb24ubmFtZX0tJHtpdGVtSWR9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWRJdGVtKG51bGwpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNjLXRvb2x0aXAtY29tcG9uZW50ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBob3ZlcmVkSXRlbSA9PT0gYCR7Y29tcC5uYW1lfS0ke2NoYW1waW9uLm5hbWV9LSR7aXRlbUlkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PntpdGVtLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+IERlc2NyaXB0aW9uOjwvc3Ryb25nPiB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uY29tcG9uZW50cy5tYXAoKGNvbXBvbmVudElkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gY29tcG9uZW50c0RhdGEuZmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvbXApID0+IGNvbXAuaWQgPT09IGNvbXBvbmVudElkXHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29tcG9uZW50LmlkICsgXCItXCIgKyBpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNjLWNvbXBvbmVudHMtaG9sZGVyIGZsZXgtZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y29tcG9uZW50Lmljb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17Y29tcG9uZW50Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNjLWJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2NvbXBvbmVudC5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Y29tcG9uZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgICAgIGBJdGVtIHdpdGggaWQgJHtpdGVtSWR9IG5vdCBmb3VuZCBmb3IgY2hhbXBpb24gJHtjaGFtcGlvbi5uYW1lfS5gXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZmlnY2FwdGlvbiBjbGFzc05hbWU9XCJjYy1jaGFtcC1uYW1lXCI+e2NoYW1waW9uLm5hbWV9PC9maWdjYXB0aW9uPlxyXG4gICAgPC9maWd1cmU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYW1waW9uQ2FyZDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ0cmFpdHNEYXRhIiwiaXRlbXMiLCJjb21wb25lbnRzRGF0YSIsImNvc3RDb2xvcnMiLCJJbWFnZSIsIkNoYW1waW9uQ2FyZCIsImNoYW1waW9uIiwic2V0SG92ZXJlZENoYW1waW9uIiwic2V0SG92ZXJlZEl0ZW0iLCJob3ZlcmVkQ2hhbXBpb24iLCJob3ZlcmVkSXRlbSIsImNvbXAiLCJjaGFtcGlvbkNvbXAiLCJmaWd1cmUiLCJjbGFzc05hbWUiLCJkaXYiLCJuYW1lIiwiaDMiLCJzcmMiLCJpY29uIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0cmFpdHMiLCJtYXAiLCJ0cmFpdE5hbWUiLCJ0cmFpdCIsImZpbmQiLCJ0cmFpdEl0ZW0iLCJzcGFuIiwiZW1ibGVtIiwic3R5bGUiLCJjb3N0IiwiaHJlZiIsImJvcmRlckNvbG9yIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiaXRlbUlkIiwiaW5kZXgiLCJpdGVtIiwiaWQiLCJoNCIsInAiLCJzdHJvbmciLCJkZXNjcmlwdGlvbiIsImNvbXBvbmVudHMiLCJjb21wb25lbnRJZCIsImNvbXBvbmVudCIsImg1IiwiY29uc29sZSIsImVycm9yIiwiZmlnY2FwdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ChampionCard.jsx\n"));

/***/ })

});