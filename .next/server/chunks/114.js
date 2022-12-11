"use strict";
exports.id = 114;
exports.ids = [114];
exports.modules = {

/***/ 6114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export checkout */
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(943);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);

async function checkout({ lineItems  }) {
    let stripePromise = null;
    const getStripe = ()=>{
        if (!stripePromise) {
            stripePromise = loadStripe("pk_test_51LspTRB4LR0nzv0D6Bj5iDPp6fVEyUBckI5RTjcriNPQh0qUF1mQUh86KKLjX8lMWuirgBnVGmNbmZkvgcISGNtX00t7T3YHTM");
        }
        return stripePromise;
    };
    const stripe = await getStripe();
    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin
    });
    const paymentIntent = await stripe.paymentIntents.create({
        // Make sure the total amount fits within Afterpay transaction amount limits:
        // https://stripe.com/docs/payments/afterpay-clearpay#collection-schedule
        amount: 1000,
        currency: "gbp",
        payment_method_types: [
            "afterpay_clearpay"
        ],
        shipping: {
            name: "Jenny Rosen",
            address: {
                line1: "1234 Main Street",
                city: "San Francisco",
                state: "CA",
                country: "US",
                postal_code: "94111"
            }
        }
    });
}


/***/ })

};
;