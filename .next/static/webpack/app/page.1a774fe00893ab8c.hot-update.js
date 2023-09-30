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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Section: function() { return /* binding */ Section; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./src/components/button.js\");\n/* harmony import */ var _connecter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connecter */ \"(app-pages-browser)/./src/components/connecter.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/WalletDisconnectButton.js\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react-ui/lib/esm/useWalletModal.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"(app-pages-browser)/./node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ Section,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Section = (props)=>{\n    _s();\n    const { assetInfoList, getTPS, searchAssets } = props;\n    const walletModal = (0,_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.useWalletModal)();\n    const { wallet } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet)(); // Add this line to get the wallet state\n    const [isConnected, setIsConnected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const handleConnectWallet = ()=>{\n        walletModal.setVisible(!walletModal.visible);\n        setIsConnected(true);\n    };\n    const handleDisconnectWallet = ()=>{\n        setIsConnected(false);\n    // Perform any additional disconnect logic if needed\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"terminal-input-section\",\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"btn btn-default\",\n                        onClick: ()=>getTPS(),\n                        text: \"Get TPS\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"btn btn-default\",\n                        text: \"Search Assets\",\n                        onClick: ()=>searchAssets()\n                    }, void 0, false, {\n                        fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined),\n                    isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_6__.WalletDisconnectButton, {\n                            onClick: handleDisconnectWallet\n                        }, void 0, false, {\n                            fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        onClick: handleConnectWallet,\n                        text: walletModal.visible ? \"Cancel\" : \"Connect Wallet\",\n                        className: \"btn btn-default\",\n                        id: \"connect\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                lineNumber: 42,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"terminal-output-section\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h\", {\n                    children: [\n                        \"Assets Found: \",\n                        assetInfoList.length > 0 ? \"(\".concat(assetInfoList.length, \" items)\") : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nickcarp/basket/src/components/section.js\",\n                lineNumber: 43,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Section, \"XIt5OJZ4VqczLChEWsGWRkOs27s=\", false, function() {\n    return [\n        _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_4__.useWalletModal,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__.useWallet\n    ];\n});\n_c = Section;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section);\nvar _c;\n$RefreshReg$(_c, \"Section\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDTztBQUNxQztBQUNSO0FBQ1I7QUFDeEI7QUFJMUIsTUFBTU0sVUFBVSxDQUFDQzs7SUFDdEIsTUFBTSxFQUFFQyxhQUFhLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUdIO0lBQ2hELE1BQU1JLGNBQWNSLCtFQUFjQTtJQUNsQyxNQUFNLEVBQUVTLE1BQU0sRUFBRSxHQUFHUix1RUFBU0EsSUFBSSx3Q0FBd0M7SUFDeEUsTUFBTSxDQUFDUyxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1VLHNCQUFzQjtRQUMxQkosWUFBWUssVUFBVSxDQUFDLENBQUNMLFlBQVlNLE9BQU87UUFDM0NILGVBQWU7SUFDakI7SUFFQSxNQUFNSSx5QkFBeUI7UUFDN0JKLGVBQWU7SUFDZixvREFBb0Q7SUFDdEQ7SUFHQSxxQkFDQTs7MEJBQ0UsOERBQUNLO2dCQUFRQyxXQUFVO2dCQUF5QkMsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMsWUFBWTtnQkFBUzs7a0NBQzNGLDhEQUFDdkIsK0NBQU1BO3dCQUFDb0IsV0FBVTt3QkFBa0JJLFNBQVMsSUFBTWY7d0JBQVVnQixNQUFLOzs7Ozs7a0NBQ2xFLDhEQUFDekIsK0NBQU1BO3dCQUFDb0IsV0FBVTt3QkFBa0JLLE1BQU07d0JBQWlCRCxTQUFTLElBQU1kOzs7Ozs7b0JBQ3pFRyw0QkFDSztrQ0FDRSw0RUFBQ1gsbUZBQXNCQTs0QkFBQ3NCLFNBQVNOOzs7Ozs7c0RBR25DLDhEQUFDbEIsK0NBQU1BO3dCQUFDd0IsU0FBU1Q7d0JBQ2ZVLE1BQU1kLFlBQVlNLE9BQU8sR0FBRyxXQUFXO3dCQUFrQkcsV0FBVTt3QkFBa0JNLElBQUc7Ozs7Ozs7Ozs7OzswQkFHaEcsOERBQUNDOzs7OzswQkFDRCw4REFBQ1I7Z0JBQVFDLFdBQVU7MEJBQ2pCLDRFQUFDUTs7d0JBQUU7d0JBQWVwQixjQUFjcUIsTUFBTSxHQUFHLElBQUksSUFBeUIsT0FBckJyQixjQUFjcUIsTUFBTSxFQUFDLGFBQVc7Ozs7Ozs7Ozs7Ozs7O0FBSXZGLEVBQUM7R0FyQ1l2Qjs7UUFFU0gsMkVBQWNBO1FBQ2ZDLG1FQUFTQTs7O0tBSGpCRTtBQXNDYiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLmpzPzc2N2UiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbidcbmltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0ZXInO1xuaW1wb3J0IHsgV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWknO1xuaW1wb3J0IHsgdXNlV2FsbGV0TW9kYWwgfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aVwiO1xuaW1wb3J0IHsgdXNlV2FsbGV0IH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGFzc2V0SW5mb0xpc3QsIGdldFRQUywgc2VhcmNoQXNzZXRzIH0gPSBwcm9wc1xuICBjb25zdCB3YWxsZXRNb2RhbCA9IHVzZVdhbGxldE1vZGFsKClcbiAgY29uc3QgeyB3YWxsZXQgfSA9IHVzZVdhbGxldCgpOyAvLyBBZGQgdGhpcyBsaW5lIHRvIGdldCB0aGUgd2FsbGV0IHN0YXRlXG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0SXNDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNvbm5lY3RXYWxsZXQgPSAoKSA9PiB7XG4gICAgd2FsbGV0TW9kYWwuc2V0VmlzaWJsZSghd2FsbGV0TW9kYWwudmlzaWJsZSk7XG4gICAgc2V0SXNDb25uZWN0ZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGlzY29ubmVjdFdhbGxldCA9ICgpID0+IHtcbiAgICBzZXRJc0Nvbm5lY3RlZChmYWxzZSk7XG4gICAgLy8gUGVyZm9ybSBhbnkgYWRkaXRpb25hbCBkaXNjb25uZWN0IGxvZ2ljIGlmIG5lZWRlZFxuICB9O1xuXG4gIFxuICByZXR1cm4gKCBcbiAgPD5cbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXJtaW5hbC1pbnB1dC1zZWN0aW9uXCIgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIG9uQ2xpY2s9eygpID0+IGdldFRQUygpfSB0ZXh0PVwiR2V0IFRQU1wiIC8+XG4gICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIiB0ZXh0PXtcIlNlYXJjaCBBc3NldHNcIn0gb25DbGljaz17KCkgPT4gc2VhcmNoQXNzZXRzKCl9IC8+XG4gICAge2lzQ29ubmVjdGVkID8gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8V2FsbGV0RGlzY29ubmVjdEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEaXNjb25uZWN0V2FsbGV0fSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ29ubmVjdFdhbGxldH0gXG4gICAgICAgICAgICB0ZXh0PXt3YWxsZXRNb2RhbC52aXNpYmxlID8gXCJDYW5jZWxcIiA6IFwiQ29ubmVjdCBXYWxsZXRcIn0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCIgaWQ9XCJjb25uZWN0XCIgLz5cbiAgICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gICAgPGJyPjwvYnI+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVybWluYWwtb3V0cHV0LXNlY3Rpb25cIj5cbiAgICAgIDxoPkFzc2V0cyBGb3VuZDoge2Fzc2V0SW5mb0xpc3QubGVuZ3RoID4gMCA/IGAoJHthc3NldEluZm9MaXN0Lmxlbmd0aH0gaXRlbXMpYCA6ICcnfTwvaD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb24iXSwibmFtZXMiOlsiQnV0dG9uIiwiQ29ubmVjdG9yIiwiV2FsbGV0RGlzY29ubmVjdEJ1dHRvbiIsInVzZVdhbGxldE1vZGFsIiwidXNlV2FsbGV0IiwidXNlU3RhdGUiLCJTZWN0aW9uIiwicHJvcHMiLCJhc3NldEluZm9MaXN0IiwiZ2V0VFBTIiwic2VhcmNoQXNzZXRzIiwid2FsbGV0TW9kYWwiLCJ3YWxsZXQiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmVjdGVkIiwiaGFuZGxlQ29ubmVjdFdhbGxldCIsInNldFZpc2libGUiLCJ2aXNpYmxlIiwiaGFuZGxlRGlzY29ubmVjdFdhbGxldCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwib25DbGljayIsInRleHQiLCJpZCIsImJyIiwiaCIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/section.js\n"));

/***/ })

});