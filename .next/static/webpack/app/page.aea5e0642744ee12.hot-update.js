"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/section.js":
/*!***********************************!*\
  !*** ./src/components/section.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Section: function() { return /* binding */ Section; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./src/components/button.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletDisconnectButton.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/useWalletModal.js\");\n/* __next_internal_client_entry_do_not_use__ Section,default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Section = (props)=>{\n    _s();\n    const { assetInfoList, getTPS, searchAssets } = props;\n    const walletModal = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.useWalletModal)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"terminal-input-section\",\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"btn btn-default\",\n                        onClick: ()=>getTPS(),\n                        text: \"Get TPS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                        lineNumber: 13,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"btn btn-default\",\n                        text: \"Search Assets\",\n                        onClick: ()=>searchAssets()\n                    }, void 0, false, {\n                        fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                        lineNumber: 14,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        onClick: ()=>walletModal.setVisible(!walletModal.visible),\n                        text: walletModal.visible ? \"Cancel\" : \"Connect Wallet\",\n                        className: \"btn btn-default\",\n                        id: \"connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                        lineNumber: 15,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletDisconnectButton, {}, void 0, false, {\n                        fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                        lineNumber: 17,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h\", {\n                        children: [\n                            \"Assets Found: \",\n                            assetInfoList.length > 0 ? \"(\".concat(assetInfoList.length, \" items)\") : \"\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                        lineNumber: 18,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                lineNumber: 12,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"terminal-output-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h\", {\n                    children: [\n                        \"Assets Found: \",\n                        assetInfoList.length > 0 ? \"(\".concat(assetInfoList.length, \" items)\") : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Section, \"k0VJnfp5Os86IzoZKfQVskqMowE=\", false, function() {\n    return [\n        _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.useWalletModal\n    ];\n});\n_c = Section;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\nvar _c;\n$RefreshReg$(_c, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2QjtBQUM0QztBQUNSO0FBRTFELE1BQU1HLFVBQVUsQ0FBQ0M7O0lBQ3RCLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHSDtJQUNoRCxNQUFNSSxjQUFjTiwrRUFBY0E7SUFFbEMscUJBQ0Y7OzBCQUNJLDhEQUFDTztnQkFBUUMsV0FBVTtnQkFBeUJDLE9BQU87b0JBQUVDLFNBQVM7b0JBQVFDLFlBQVk7Z0JBQVM7O2tDQUMzRiw4REFBQ2IsK0NBQU1BO3dCQUFDVSxXQUFVO3dCQUFrQkksU0FBUyxJQUFNUjt3QkFBVVMsTUFBSzs7Ozs7O2tDQUNsRSw4REFBQ2YsK0NBQU1BO3dCQUFDVSxXQUFVO3dCQUFrQkssTUFBTTt3QkFBaUJELFNBQVMsSUFBTVA7Ozs7OztrQ0FDMUUsOERBQUNQLCtDQUFNQTt3QkFBQ2MsU0FBUyxJQUFNTixZQUFZUSxVQUFVLENBQUMsQ0FBQ1IsWUFBWVMsT0FBTzt3QkFDaEVGLE1BQU1QLFlBQVlTLE9BQU8sR0FBRyxXQUFXO3dCQUFrQlAsV0FBVTt3QkFBa0JRLElBQUc7Ozs7OztrQ0FDMUYsOERBQUNqQixtRkFBc0JBOzs7OztrQ0FDdkIsOERBQUNrQjs7NEJBQUU7NEJBQWVkLGNBQWNlLE1BQU0sR0FBRyxJQUFJLElBQXlCLE9BQXJCZixjQUFjZSxNQUFNLEVBQUMsYUFBVzs7Ozs7Ozs7Ozs7OzswQkFFakYsOERBQUNDOzs7OzswQkFDRCw4REFBQ1o7Z0JBQVFDLFdBQVU7MEJBQ2pCLDRFQUFDUzs7d0JBQUU7d0JBQWVkLGNBQWNlLE1BQU0sR0FBRyxJQUFJLElBQXlCLE9BQXJCZixjQUFjZSxNQUFNLEVBQUMsYUFBVzs7Ozs7Ozs7Ozs7Ozs7QUFJdkYsRUFBQztHQXBCWWpCOztRQUVTRCwyRUFBY0E7OztLQUZ2QkM7QUFxQmIsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbi5qcz83NjdlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgeyBXYWxsZXREaXNjb25uZWN0QnV0dG9uIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSc7XG5pbXBvcnQgeyB1c2VXYWxsZXRNb2RhbCB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpXCI7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYXNzZXRJbmZvTGlzdCwgZ2V0VFBTLCBzZWFyY2hBc3NldHMgfSA9IHByb3BzXG4gIGNvbnN0IHdhbGxldE1vZGFsID0gdXNlV2FsbGV0TW9kYWwoKVxuICBcbiAgcmV0dXJuICggXG48PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlcm1pbmFsLWlucHV0LXNlY3Rpb25cIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17KCkgPT4gZ2V0VFBTKCl9IHRleHQ9XCJHZXQgVFBTXCIgLz5cbiAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHRleHQ9e1wiU2VhcmNoIEFzc2V0c1wifSBvbkNsaWNrPXsoKSA9PiBzZWFyY2hBc3NldHMoKX0gLz5cbiAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHdhbGxldE1vZGFsLnNldFZpc2libGUoIXdhbGxldE1vZGFsLnZpc2libGUpfSBcbiAgICAgIHRleHQ9e3dhbGxldE1vZGFsLnZpc2libGUgPyBcIkNhbmNlbFwiIDogXCJDb25uZWN0IFdhbGxldFwifSBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiBpZD1cImNvbm5lY3RcIi8+XG4gICAgPFdhbGxldERpc2Nvbm5lY3RCdXR0b24vPlxuICAgIDxoPkFzc2V0cyBGb3VuZDoge2Fzc2V0SW5mb0xpc3QubGVuZ3RoID4gMCA/IGAoJHthc3NldEluZm9MaXN0Lmxlbmd0aH0gaXRlbXMpYCA6ICcnfTwvaD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGJyPjwvYnI+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVybWluYWwtb3V0cHV0LXNlY3Rpb25cIj5cbiAgICAgIDxoPkFzc2V0cyBGb3VuZDoge2Fzc2V0SW5mb0xpc3QubGVuZ3RoID4gMCA/IGAoJHthc3NldEluZm9MaXN0Lmxlbmd0aH0gaXRlbXMpYCA6ICcnfTwvaD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24iXSwibmFtZXMiOlsiQnV0dG9uIiwiV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiIsInVzZVdhbGxldE1vZGFsIiwiU2VjdGlvbiIsInByb3BzIiwiYXNzZXRJbmZvTGlzdCIsImdldFRQUyIsInNlYXJjaEFzc2V0cyIsIndhbGxldE1vZGFsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJvbkNsaWNrIiwidGV4dCIsInNldFZpc2libGUiLCJ2aXNpYmxlIiwiaWQiLCJoIiwibGVuZ3RoIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/section.js\n"));

/***/ })

});