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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Section: function() { return /* binding */ Section; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./src/components/button.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletDisconnectButton.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/useWalletModal.js\");\n/* __next_internal_client_entry_do_not_use__ Section,default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Section = (props)=>{\n    _s();\n    const { assetInfoList, getTPS, searchAssets } = props;\n    const walletModal = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.useWalletModal)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"terminal-input-section\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"btn btn-default\",\n                    onClick: ()=>getTPS(),\n                    text: \"Get TPS\"\n                }, void 0, false, {\n                    fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    className: \"btn btn-default\",\n                    text: \"Search Assets\",\n                    onClick: ()=>searchAssets()\n                }, void 0, false, {\n                    fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                    lineNumber: 14,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    onClick: ()=>walletModal.setVisible(!walletModal.visible),\n                    text: walletModal.visible ? \"  Cancel    \" : \"Connect Wallet\",\n                    className: \"btn btn-default\",\n                    id: \"connect\"\n                }, void 0, false, {\n                    fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                    lineNumber: 15,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_3__.WalletDisconnectButton, {}, void 0, false, {\n                    fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                    lineNumber: 20,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h\", {\n                    children: [\n                        \"Assets Found: \",\n                        assetInfoList.length > 0 ? \"(\".concat(assetInfoList.length, \" items)\") : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                    lineNumber: 21,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n};\n_s(Section, \"k0VJnfp5Os86IzoZKfQVskqMowE=\", false, function() {\n    return [\n        _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.useWalletModal\n    ];\n});\n_c = Section;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\nvar _c;\n$RefreshReg$(_c, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUM2QjtBQUM0QztBQUNSO0FBRTFELE1BQU1HLFVBQVUsQ0FBQ0M7O0lBQ3RCLE1BQU0sRUFBRUMsYUFBYSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHSDtJQUNoRCxNQUFNSSxjQUFjTiwrRUFBY0E7SUFFbEMscUJBQ0Y7a0JBQ0ksNEVBQUNPO1lBQVFDLFdBQVU7OzhCQUNuQiw4REFBQ1YsK0NBQU1BO29CQUFDVSxXQUFVO29CQUFrQkMsU0FBUyxJQUFNTDtvQkFBVU0sTUFBSzs7Ozs7OzhCQUNsRSw4REFBQ1osK0NBQU1BO29CQUFDVSxXQUFVO29CQUFrQkUsTUFBTTtvQkFBaUJELFNBQVMsSUFBTUo7Ozs7Ozs4QkFDMUUsOERBQUNQLCtDQUFNQTtvQkFDTFcsU0FBUyxJQUFNSCxZQUFZSyxVQUFVLENBQUMsQ0FBQ0wsWUFBWU0sT0FBTztvQkFDMURGLE1BQU1KLFlBQVlNLE9BQU8sR0FBRyxpQkFBaUI7b0JBQzdDSixXQUFVO29CQUFrQkssSUFBRzs7Ozs7OzhCQUVqQyw4REFBQ2QsbUZBQXNCQTs7Ozs7OEJBQ3ZCLDhEQUFDZTs7d0JBQUU7d0JBQWVYLGNBQWNZLE1BQU0sR0FBRyxJQUFJLElBQXlCLE9BQXJCWixjQUFjWSxNQUFNLEVBQUMsYUFBVzs7Ozs7Ozs7Ozs7Ozs7QUFJckYsRUFBQztHQW5CWWQ7O1FBRVNELDJFQUFjQTs7O0tBRnZCQztBQW9CYiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLmpzPzc2N2UiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbidcbmltcG9ydCB7IFdhbGxldERpc2Nvbm5lY3RCdXR0b24gfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcbmltcG9ydCB7IHVzZVdhbGxldE1vZGFsIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcblxuZXhwb3J0IGNvbnN0IFNlY3Rpb24gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBhc3NldEluZm9MaXN0LCBnZXRUUFMsIHNlYXJjaEFzc2V0cyB9ID0gcHJvcHNcbiAgY29uc3Qgd2FsbGV0TW9kYWwgPSB1c2VXYWxsZXRNb2RhbCgpXG4gIFxuICByZXR1cm4gKCBcbjw+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVybWluYWwtaW5wdXQtc2VjdGlvblwiPlxuICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgb25DbGljaz17KCkgPT4gZ2V0VFBTKCl9IHRleHQ9XCJHZXQgVFBTXCIgLz5cbiAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIHRleHQ9e1wiU2VhcmNoIEFzc2V0c1wifSBvbkNsaWNrPXsoKSA9PiBzZWFyY2hBc3NldHMoKX0gLz5cbiAgICA8QnV0dG9uIFxuICAgICAgb25DbGljaz17KCkgPT4gd2FsbGV0TW9kYWwuc2V0VmlzaWJsZSghd2FsbGV0TW9kYWwudmlzaWJsZSl9IFxuICAgICAgdGV4dD17d2FsbGV0TW9kYWwudmlzaWJsZSA/IFwiICBDYW5jZWwgICAgXCIgOiBcIkNvbm5lY3QgV2FsbGV0XCJ9IFxuICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgaWQ9XCJjb25uZWN0XCIgXG4gICAgLz5cbiAgICA8V2FsbGV0RGlzY29ubmVjdEJ1dHRvbi8+XG4gICAgPGg+QXNzZXRzIEZvdW5kOiB7YXNzZXRJbmZvTGlzdC5sZW5ndGggPiAwID8gYCgke2Fzc2V0SW5mb0xpc3QubGVuZ3RofSBpdGVtcylgIDogJyd9PC9oPlxuICAgIDwvc2VjdGlvbj5cbiAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJXYWxsZXREaXNjb25uZWN0QnV0dG9uIiwidXNlV2FsbGV0TW9kYWwiLCJTZWN0aW9uIiwicHJvcHMiLCJhc3NldEluZm9MaXN0IiwiZ2V0VFBTIiwic2VhcmNoQXNzZXRzIiwid2FsbGV0TW9kYWwiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsInRleHQiLCJzZXRWaXNpYmxlIiwidmlzaWJsZSIsImlkIiwiaCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/section.js\n"));

/***/ })

});