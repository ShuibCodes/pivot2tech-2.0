"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 9368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/CartCount.js


const CartCount = ()=>{
    const { 0: value , 1: setValue  } = (0,external_react_.useState)(1);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "quantity-input",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "quantity-down",
                id: "quantityDown",
                onClick: ()=>setValue(value == 1 ? 1 : value - 1),
                children: "-"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: "quantity",
                value: value,
                type: "text",
                defaultValue: 1,
                name: "quantity"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>setValue(value + 1),
                className: "quantity-up",
                id: "quantityUP",
                children: "+"
            })
        ]
    });
};
/* harmony default export */ const components_CartCount = (CartCount);

// EXTERNAL MODULE: ./src/components/PageBanner.js
var PageBanner = __webpack_require__(2745);
// EXTERNAL MODULE: ./src/layout/Layout.js + 9 modules
var Layout = __webpack_require__(1077);
;// CONCATENATED MODULE: ./pages/cart.js





const Cart = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageBanner/* default */.Z, {
                pageName: "Cart"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "cart-page py-120 rpy-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cart-total-product",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "total-cart-price",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Total Items: 4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            children: "Cart Total: $510"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cart-item-wrap pt-15",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "alert fade show cart-single-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "product-name",
                                                    children: "PSD Book Mockup"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "product-price",
                                                    children: "$70"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_CartCount, {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "avilable",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-check"
                                                        }),
                                                        " Avilable Now"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "product-total-price",
                                                    children: "$70"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    className: "close",
                                                    "data-dismiss": "alert",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        "aria-hidden": "true",
                                                        children: "\xd7"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "alert fade show cart-single-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "product-name",
                                                    children: "Historical Store Book"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "product-price",
                                                    children: "$120"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_CartCount, {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "avilable",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-check"
                                                        }),
                                                        " Avilable Now"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "product-total-price",
                                                    children: "$360"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    className: "close",
                                                    "data-dismiss": "alert",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        "aria-hidden": "true",
                                                        children: "\xd7"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "alert fade show cart-single-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "product-name",
                                                    children: "Medical Equipment"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "product-price",
                                                    children: "$10"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_CartCount, {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "avilable",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-check"
                                                        }),
                                                        " Avilable Now"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "product-total-price",
                                                    children: "$20"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    className: "close",
                                                    "data-dismiss": "alert",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        "aria-hidden": "true",
                                                        children: "\xd7"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "alert fade show cart-single-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "product-name",
                                                    children: "Video Tutorials"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "product-price",
                                                    children: "$20"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(components_CartCount, {}),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                    className: "avilable",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-check"
                                                        }),
                                                        " Avilable Now"
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "product-total-price",
                                                    children: "$60"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    type: "button",
                                                    className: "close",
                                                    "data-dismiss": "alert",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        "aria-hidden": "true",
                                                        children: "\xd7"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cart-total-price mt-40",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row justify-content-end text-center text-lg-left",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "update-shopping text-lg-right",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/cart",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "mr-2 theme-btn mt-10",
                                                    children: "update cart"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/checkout",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "theme-btn mt-10",
                                                    children: "checkout"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const cart = (Cart);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9051:
/***/ ((module) => {

module.exports = require("react-nice-select");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,676,664,77,745], () => (__webpack_exec__(9368)));
module.exports = __webpack_exports__;

})();