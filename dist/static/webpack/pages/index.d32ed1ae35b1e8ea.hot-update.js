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

/***/ "./Component/DealoftheDay.js":
/*!***********************************!*\
  !*** ./Component/DealoftheDay.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DealoftheDay; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCard */ \"./Component/ProductCard.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Grid,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Button,Grid,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _store_Reducers_ProductSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/Reducers/ProductSlice */ \"./store/Reducers/ProductSlice.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_font__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/font */ \"./assets/font.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction DealoftheDay() {\n    _s();\n    const settings = {\n        dots: false,\n        infinite: true,\n        arrows: false,\n        speed: 500,\n        slidesToShow: 5,\n        slidesToScroll: 3,\n        autoplaySpeed: 2000,\n        initialSlide: 0,\n        autoplay: true,\n        pauseOnHover: true,\n        responsive: [\n            {\n                breakpoint: 600,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    dots: false,\n                    arrows: false\n                }\n            },\n            {\n                breakpoint: 900,\n                settings: {\n                    slidesToShow: 3,\n                    slidesToScroll: 3,\n                    dots: false,\n                    arrows: false\n                }\n            }\n        ]\n    };\n    const product = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_store_Reducers_ProductSlice__WEBPACK_IMPORTED_MODULE_4__.ProductsFromSlice);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Grid, {\n        sx: {\n            marginLeft: \"auto\",\n            marginRight: \"auto\",\n            maxWidth: \"90%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            ...settings,\n            children: product.map((i)=>// <ProductCard\n                //   key={i.id}\n                //   src={i.src}\n                //   alt={i.alt}\n                //   brand={i.brand}\n                //   price={i.price}\n                //   actualPrice={i.actualPrice}\n                //   productId={i.id}\n                //   colorId={i.id}\n                // />\n                i.actualPrice === null ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        alignItems: \"center\",\n                        // border: \"1px solid grey\",\n                        padding: 2,\n                        bgcolor: \"white\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            src: i.src,\n                            alt: i.alt,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                            sx: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                mt: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                    className: _assets_font__WEBPACK_IMPORTED_MODULE_6__.poppins.className,\n                                    align: \"center\",\n                                    sx: {\n                                        color: \"#2e8b57\",\n                                        fontWeight: \"600\"\n                                    },\n                                    children: [\n                                        \"₹\",\n                                        i.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, this),\n                                \"\\xa0\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                    className: _assets_font__WEBPACK_IMPORTED_MODULE_6__.poppins.className,\n                                    sx: {\n                                        fontSize: \"14px\",\n                                        color: \"#9D9E9D\"\n                                    },\n                                    children: \"From\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 17\n                                }, this),\n                                \"\\xa0\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Typography, {\n                                    className: _assets_font__WEBPACK_IMPORTED_MODULE_6__.poppins.className,\n                                    sx: {\n                                        color: \"#e95144\",\n                                        fontWeight: \"500\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"del\", {\n                                        children: [\n                                            \"₹\",\n                                            i.actualPrice\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n                            lineNumber: 72,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Grid_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                variant: \"contained\",\n                                sx: {\n                                    bgcolor: \"black\",\n                                    color: \"white\",\n                                    \"&:hover\": {\n                                        bgcolor: \"black\",\n                                        color: \"white\"\n                                    },\n                                    display: \"flex\",\n                                    width: \"100%\"\n                                },\n                                children: \"Hello\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n                            lineNumber: 95,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, i.id, true, {\n                    fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Clone\\\\NewFashion NextJs\\\\my-app\\\\Component\\\\DealoftheDay.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(DealoftheDay, \"3oi/mUOVoAdJicZjv0XI2JfPIV8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = DealoftheDay;\nvar _c;\n$RefreshReg$(_c, \"DealoftheDay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9fTl9FLy4vQ29tcG9uZW50L0RlYWxvZnRoZURheS5qcz8yMDg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IFByb2R1Y3RDYXJkIGZyb20gXCIuL1Byb2R1Y3RDYXJkXCI7XHJcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBHcmlkLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgUHJvZHVjdHNGcm9tU2xpY2UgfSBmcm9tIFwiQC9zdG9yZS9SZWR1Y2Vycy9Qcm9kdWN0U2xpY2VcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHBvcHBpbnMgfSBmcm9tIFwiQC9hc3NldHMvZm9udFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVhbG9mdGhlRGF5KCkge1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgaW5pdGlhbFNsaWRlOiAwLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5MDAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgY29uc3QgcHJvZHVjdCA9IHVzZVNlbGVjdG9yKFByb2R1Y3RzRnJvbVNsaWNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIHN4PXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiLCBtYXJnaW5SaWdodDogXCJhdXRvXCIsIG1heFdpZHRoOiBcIjkwJVwiIH19PlxyXG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAge3Byb2R1Y3QubWFwKChpKSA9PlxyXG4gICAgICAgICAgLy8gPFByb2R1Y3RDYXJkXHJcbiAgICAgICAgICAvLyAgIGtleT17aS5pZH1cclxuICAgICAgICAgIC8vICAgc3JjPXtpLnNyY31cclxuICAgICAgICAgIC8vICAgYWx0PXtpLmFsdH1cclxuICAgICAgICAgIC8vICAgYnJhbmQ9e2kuYnJhbmR9XHJcbiAgICAgICAgICAvLyAgIHByaWNlPXtpLnByaWNlfVxyXG4gICAgICAgICAgLy8gICBhY3R1YWxQcmljZT17aS5hY3R1YWxQcmljZX1cclxuICAgICAgICAgIC8vICAgcHJvZHVjdElkPXtpLmlkfVxyXG4gICAgICAgICAgLy8gICBjb2xvcklkPXtpLmlkfVxyXG4gICAgICAgICAgLy8gLz5cclxuICAgICAgICAgIGkuYWN0dWFsUHJpY2UgPT09IG51bGwgPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAga2V5PXtpLmlkfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyOiBcIjFweCBzb2xpZCBncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICAgICAgICAgICAgYmdjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpLnNyY30gYWx0PXtpLmFsdH0gcHJpb3JpdHkgLz5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIiwgbXQ6IDIgfX0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BvcHBpbnMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IGNvbG9yOiBcIiMyZThiNTdcIiwgZm9udFdlaWdodDogXCI2MDBcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDigrl7aS5wcmljZX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwb3BwaW5zLmNsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgZm9udFNpemU6IFwiMTRweFwiLCBjb2xvcjogXCIjOUQ5RTlEXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRnJvbVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BvcHBpbnMuY2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogXCIjZTk1MTQ0XCIsIGZvbnRXZWlnaHQ6IFwiNTAwXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRlbD7igrl7aS5hY3R1YWxQcmljZX08L2RlbD5cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjogeyBiZ2NvbG9yOiBcImJsYWNrXCIsIGNvbG9yOiBcIndoaXRlXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEhlbGxvXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TbGlkZXI+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTbGlkZXIiLCJQcm9kdWN0Q2FyZCIsIkJveCIsIkJ1dHRvbiIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwidXNlU2VsZWN0b3IiLCJQcm9kdWN0c0Zyb21TbGljZSIsIkltYWdlIiwicG9wcGlucyIsIkRlYWxvZnRoZURheSIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwiYXJyb3dzIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5U3BlZWQiLCJpbml0aWFsU2xpZGUiLCJhdXRvcGxheSIsInBhdXNlT25Ib3ZlciIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwicHJvZHVjdCIsInN4IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWF4V2lkdGgiLCJtYXAiLCJpIiwiYWN0dWFsUHJpY2UiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJwYWRkaW5nIiwiYmdjb2xvciIsInNyYyIsImFsdCIsInByaW9yaXR5IiwianVzdGlmeUNvbnRlbnQiLCJtdCIsImNsYXNzTmFtZSIsImFsaWduIiwiY29sb3IiLCJmb250V2VpZ2h0IiwicHJpY2UiLCJmb250U2l6ZSIsImRlbCIsInZhcmlhbnQiLCJ3aWR0aCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Component/DealoftheDay.js\n"));

/***/ })

});