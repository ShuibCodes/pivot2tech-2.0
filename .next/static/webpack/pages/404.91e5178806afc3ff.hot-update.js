"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/404",{

/***/ "./src/layout/MobileHeader.js":
/*!************************************!*\
  !*** ./src/layout/MobileHeader.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ \"./src/layout/Menu.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar MobileHeader = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), activeMenu = ref[0], setActiveMenu = ref[1];\n    var activeMenuSet = function(value) {\n        return setActiveMenu(activeMenu === value ? \"\" : value);\n    }, activeLi = function(value) {\n        return value === activeMenu ? {\n            display: \"block\"\n        } : {\n            display: \"none\"\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"navigation clearfix d-block d-lg-none mobile-header\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"dropdown current\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: \"home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 12,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: activeLi(\"home\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Home, {}, void 0, false, {\n                            fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                            lineNumber: 14,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown-btn\",\n                        onClick: function() {\n                            return activeMenuSet(\"home\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"fas fa-chevron-down\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                            lineNumber: 17,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 16,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                lineNumber: 11,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/about\",\n                    children: \"About\"\n                }, void 0, false, {\n                    fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"dropdown\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: \"Courses\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: activeLi(\"Courses\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Courses, {}, void 0, false, {\n                            fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                            lineNumber: 26,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 25,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown-btn\",\n                        onClick: function() {\n                            return activeMenuSet(\"Courses\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"fas fa-chevron-down\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                            lineNumber: 29,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                lineNumber: 23,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"dropdown\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: \"pages\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: activeLi(\"Pages\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Pages, {}, void 0, false, {\n                            fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                            lineNumber: 35,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 34,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown-btn\",\n                        onClick: function() {\n                            return activeMenuSet(\"Pages\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"fas fa-chevron-down\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                            lineNumber: 38,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 37,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                lineNumber: 32,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"dropdown\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: \"blog\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 42,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        style: activeLi(\"Blog\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Menu__WEBPACK_IMPORTED_MODULE_3__.Blog, {}, void 0, false, {\n                            fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                            lineNumber: 44,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 43,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dropdown-btn\",\n                        onClick: function() {\n                            return activeMenuSet(\"Blog\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"fas fa-chevron-down\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                            lineNumber: 47,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                        lineNumber: 46,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n                lineNumber: 41,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shuibabdillahi/Desktop/New Bootcamp Site/React Template/src/layout/MobileHeader.js\",\n        lineNumber: 10,\n        columnNumber: 3\n    }, _this);\n};\n_s(MobileHeader, \"v2x6wirwKCy++9DuW8s383qRkbI=\");\n_c = MobileHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileHeader);\nvar _c;\n$RefreshReg$(_c, \"MobileHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUFDSyxLQUFLLEVBQUVQLFFBQVEsQ0FBQyxNQUFNLENBQUM7a0NBQzFCLDRFQUFDVCx1Q0FBSTs7OztpQ0FBRzs7Ozs7NkJBQ0o7a0NBQ0wsOERBQUNpQixLQUFHO3dCQUFDTCxTQUFTLEVBQUMsY0FBYzt3QkFBQ00sT0FBTyxFQUFFO21DQUFNWCxhQUFhLENBQUMsTUFBTSxDQUFDO3lCQUFBO2tDQUNqRSw0RUFBQ1ksTUFBSTs0QkFBQ1AsU0FBUyxFQUFDLHFCQUFxQjs7Ozs7aUNBQUc7Ozs7OzZCQUNuQzs7Ozs7O3FCQUNGOzs7Ozs7YUFDRCxDQUNKO0NBQ0Y7R0EvQ0tSLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQWdEbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L01vYmlsZUhlYWRlci5qcz9hNzdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCbG9nLCBDb3Vyc2VzLCBIb21lLCBQYWdlcyB9IGZyb20gJy4vTWVudSc7XHJcblxyXG5jb25zdCBNb2JpbGVIZWFkZXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgW2FjdGl2ZU1lbnUsIHNldEFjdGl2ZU1lbnVdID0gdXNlU3RhdGUoJycpO1xyXG5cdGNvbnN0IGFjdGl2ZU1lbnVTZXQgPSAodmFsdWUpID0+IHNldEFjdGl2ZU1lbnUoYWN0aXZlTWVudSA9PT0gdmFsdWUgPyAnJyA6IHZhbHVlKSxcclxuXHRcdGFjdGl2ZUxpID0gKHZhbHVlKSA9PiAodmFsdWUgPT09IGFjdGl2ZU1lbnUgPyB7IGRpc3BsYXk6ICdibG9jaycgfSA6IHsgZGlzcGxheTogJ25vbmUnIH0pO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBjbGVhcmZpeCBkLWJsb2NrIGQtbGctbm9uZSBtb2JpbGUtaGVhZGVyXCI+XHJcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJkcm9wZG93biBjdXJyZW50XCI+XHJcblx0XHRcdFx0PGEgaHJlZj1cIiNcIj5ob21lPC9hPlxyXG5cdFx0XHRcdDx1bCBzdHlsZT17YWN0aXZlTGkoJ2hvbWUnKX0+XHJcblx0XHRcdFx0XHQ8SG9tZSAvPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1idG5cIiBvbkNsaWNrPXsoKSA9PiBhY3RpdmVNZW51U2V0KCdob21lJyl9PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbGk+XHJcblx0XHRcdDxsaT5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XHJcblx0XHRcdDwvbGk+XHJcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCI+Q291cnNlczwvYT5cclxuXHRcdFx0XHQ8dWwgc3R5bGU9e2FjdGl2ZUxpKCdDb3Vyc2VzJyl9PlxyXG5cdFx0XHRcdFx0PENvdXJzZXMgLz5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnRuXCIgb25DbGljaz17KCkgPT4gYWN0aXZlTWVudVNldCgnQ291cnNlcycpfT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIiAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuXHRcdFx0XHQ8YSBocmVmPVwiI1wiPnBhZ2VzPC9hPlxyXG5cdFx0XHRcdDx1bCBzdHlsZT17YWN0aXZlTGkoJ1BhZ2VzJyl9PlxyXG5cdFx0XHRcdFx0PFBhZ2VzIC8+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWJ0blwiIG9uQ2xpY2s9eygpID0+IGFjdGl2ZU1lbnVTZXQoJ1BhZ2VzJyl9PlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tZG93blwiIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbGk+XHJcblx0XHRcdDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxyXG5cdFx0XHRcdDxhIGhyZWY9XCIjXCI+YmxvZzwvYT5cclxuXHRcdFx0XHQ8dWwgc3R5bGU9e2FjdGl2ZUxpKCdCbG9nJyl9PlxyXG5cdFx0XHRcdFx0PEJsb2cgLz5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tYnRuXCIgb25DbGljaz17KCkgPT4gYWN0aXZlTWVudVNldCgnQmxvZycpfT5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWRvd25cIiAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0PC91bD5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJCbG9nIiwiQ291cnNlcyIsIkhvbWUiLCJQYWdlcyIsIk1vYmlsZUhlYWRlciIsImFjdGl2ZU1lbnUiLCJzZXRBY3RpdmVNZW51IiwiYWN0aXZlTWVudVNldCIsInZhbHVlIiwiYWN0aXZlTGkiLCJkaXNwbGF5IiwidWwiLCJjbGFzc05hbWUiLCJsaSIsImEiLCJocmVmIiwic3R5bGUiLCJkaXYiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/MobileHeader.js\n"));

/***/ })

});