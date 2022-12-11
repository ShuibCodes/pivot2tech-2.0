"use strict";
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 1077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-nice-select"
var external_react_nice_select_ = __webpack_require__(9051);
var external_react_nice_select_default = /*#__PURE__*/__webpack_require__.n(external_react_nice_select_);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("assets/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("https://www.youtube.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const components_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(0);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Newsletters.js

const Newsletters = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "footer-newsletter br-10 bg-lighter"
    });
};
/* harmony default export */ const components_Newsletters = (Newsletters);

;// CONCATENATED MODULE: ./src/layout/Footer.js




const Footer = ({ footer  })=>{
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    switch(footer){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {
                scrollTop: scrollTop
            });
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(Footer3, {
                scrollTop: scrollTop
            });
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(Footer4, {
                scrollTop: scrollTop
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultFooter, {
                scrollTop: scrollTop
            });
    }
};
/* harmony default export */ const layout_Footer = (Footer);
const FollowIcon = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://twitter.com/Shuayb__",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fab fa-facebook-f"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "https://twitter.com/Shuayb__",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fab fa-twitter"
                    })
                })
            })
        ]
    }), Courses = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "Fullstack Web Development"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details-freelance",
                    children: "Freelance Bootcamp"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog-details",
                    children: "Blog"
                })
            })
        ]
    }), Resources = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {}), FooterBottom = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {}), CopyRight = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
        children: [
            "\xa9 ",
            new Date().getFullYear(),
            ". ",
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: "Pivot2Tech Bootcamp"
            }),
            " All rights reserved."
        ]
    }), DefaultFooter = ({ scrollTop  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer bg-blue",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Newsletters, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-between text-white pt-75",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget about-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "About Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Change careers and start your journey as a web developer with our live online courses. Learn the skills to freelance or a Job in tech!"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "pt-5",
                                            children: "Follow Us"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "social-style-one",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FollowIcon, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget menu-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Courses"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Courses, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget menu-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Resources"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Resources, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget contact-info-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "footer-title",
                                                    children: "Get In Touch"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "far fa-envelope"
                                                            }),
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "mailto:abdullahshuib124@gmail.com",
                                                                children: "abdullahshuib124@gmail.com"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copyright-area bg-dark-blue text-white rel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "copyright-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CopyRight, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "footer-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterBottom, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        style: {
                            display: "inline-block"
                        },
                        onClick: ()=>scrollTop(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-angle-double-up"
                        })
                    })
                ]
            })
        ]
    }), Footer1 = ({ scrollTop  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer bg-blue text-white pt-75",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget about-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Change careers and start your journey as a web developer with our live online courses. Learn the skills to freelance or a Job in tech!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "pt-5",
                                        children: "Follow Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social-style-one",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(FollowIcon, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2 col-md-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget menu-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Courses"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Courses, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2 col-md-3 col-sm-4",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "footer-widget menu-widget",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Resources, {})
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-6",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-widget contact-info-widget",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: "footer-title",
                                                children: "Get In Touch"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-envelope"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:abdullahshuib124@gmail.com",
                                                            children: "abdullahshuib124@gmail.com"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copyright-area bg-dark-blue rel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "copyright-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CopyRight, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "footer-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterBottom, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        style: {
                            display: "inline-block"
                        },
                        onClick: ()=>scrollTop(),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-angle-double-up"
                        })
                    })
                ]
            })
        ]
    }), Footer3 = ({ scrollTop  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer bg-black",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-between text-white pt-65",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget about-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "About Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "Sit amet consectetur adipiscin seeiusmod tempor incididunt ut dolore magna aliqu asusp disse ultrices gravida commodo"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "pt-5",
                                        children: "Follow Us"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social-style-one",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(FollowIcon, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2 col-md-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget menu-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Courses"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Courses, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-2 col-md-3 col-sm-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "footer-widget menu-widget",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "footer-title",
                                        children: "Resources"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Resources, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget contact-info-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "footer-title",
                                                    children: "Get In Touch"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-map-marker-alt"
                                                                }),
                                                                " 55 Main Street, 2nd Block, New York"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-envelope"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "mailto:support@gmail.com",
                                                                    children: "support@gmail.com"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-phone"
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    href: "callto:+0123456789",
                                                                    children: "+012 (345) 67 89"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "far fa-clock"
                                                                }),
                                                                " Sunday - Friday,",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                " 08 am - 05 pm"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-sm-6",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget newsletter-widget",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "footer-title",
                                                    children: "Newsletter"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    onSubmit: (e)=>e.preventDefault(),
                                                    action: "#",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "Every Single Updates and Notifications"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "email-input",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                                    htmlFor: "footer-newsletter",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "far fa-envelope"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "email",
                                                                    id: "footer-newsletter",
                                                                    placeholder: "Enter Email",
                                                                    required: ""
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                            className: "theme-btn style-two",
                                                            type: "submit",
                                                            children: [
                                                                "sign up ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fas fa-arrow-right"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copyright-area bg-light-blue text-white rel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "copyright-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CopyRight, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "footer-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterBottom, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        style: {
                            display: "inline-block"
                        },
                        onClick: ()=>scrollTop(),
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-angle-double-up"
                        })
                    })
                ]
            })
        ]
    }), Footer4 = ({ scrollTop  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "main-footer footer-two bg-blue-two text-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "logo-inner style-two pt-85 pb-35",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two1.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two5.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two3.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two4.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two2.png",
                                        alt: "Client Logo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/client-logos/client-logo-two6.png",
                                        alt: "Client Logo"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row large-gap justify-content-between pt-85",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget about-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "footer-logo mb-25",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/logos/logo-four.png",
                                                        alt: "Logo"
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Sit amet consectetur adipiscin seeiusmod tempor incididunt ut dolore magna aliqu asusp",
                                                " "
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "social-style-one pt-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(FollowIcon, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-md-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget menu-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Courses"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Courses, {})
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-3 col-sm-4",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget contact-info-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Get In Touch"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-map-marker-alt"
                                                        }),
                                                        " 55 Main Street, 2nd Block, New York"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-envelope"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "mailto:support@gmail.com",
                                                            children: "support@gmail.com"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fas fa-phone"
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "callto:+0123456789",
                                                            children: "+012 (345) 67 89"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "far fa-clock"
                                                        }),
                                                        " Sunday - Friday,",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                        " 08 am - 05 pm"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-widget gallery-widget",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                            className: "footer-title",
                                            children: "Gallery"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "gallery-widget-wrap",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery1.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery1.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery2.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery2.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery3.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery3.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery4.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery4.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery5.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery5.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "gallery-widget-item",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/widgets/gallery6.jpg",
                                                            alt: "Gallery"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "assets/images/widgets/gallery6.jpg",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fab fa-instagram"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copyright-area rel",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "copyright-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(CopyRight, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "footer-menu",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FooterBottom, {})
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        style: {
                            display: "inline-block"
                        },
                        onClick: ()=>scrollTop(),
                        className: "scroll-top scroll-to-target",
                        "data-target": "html",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-angle-double-up"
                        })
                    })
                ]
            })
        ]
    });

;// CONCATENATED MODULE: ./src/layout/Menu.js



const Home = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/",
                children: "Home"
            })
        })
    });
const Menu_Courses = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "Web Development Bootcamp"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "Freelance Bootcamp"
                })
            })
        ]
    });
const Pages = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {});
const Blog = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog",
                    children: "Blog Page"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog-details",
                    children: "Blog Details"
                })
            })
        ]
    });

;// CONCATENATED MODULE: ./src/layout/MobileHeader.js




const MobileHeader = ()=>{
    const { 0: activeMenu , 1: setActiveMenu  } = (0,external_react_.useState)("");
    const activeMenuSet = (value)=>setActiveMenu(activeMenu === value ? "" : value), activeLi = (value)=>value === activeMenu ? {
            display: "block"
        } : {
            display: "none"
        };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation clearfix d-block d-lg-none mobile-header",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown current",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        children: "home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("home"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Home, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("home"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    children: "About"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Courses"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("Courses"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Menu_Courses, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("Courses"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "pages"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("Pages"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Pages, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("Pages"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "blog"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        style: activeLi("Blog"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Blog, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        onClick: ()=>activeMenuSet("Blog"),
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_MobileHeader = (MobileHeader);

;// CONCATENATED MODULE: ./src/layout/Header.js






const Header = ({ header  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* stickyNav */.h4)();
    }, []);
    const { 0: navToggle , 1: setNavToggle  } = (0,external_react_.useState)(false);
    switch(header){
        case 1:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                navToggle: navToggle,
                setNavToggle: setNavToggle
            });
        case 3:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header3, {
                navToggle: navToggle,
                setNavToggle: setNavToggle
            });
        case 4:
            return /*#__PURE__*/ jsx_runtime_.jsx(Header4, {
                navToggle: navToggle,
                setNavToggle: setNavToggle
            });
        default:
            return /*#__PURE__*/ jsx_runtime_.jsx(DefaultHeader, {
                navToggle: navToggle,
                setNavToggle: setNavToggle
            });
    }
};
/* harmony default export */ const layout_Header = (Header);
const Header1 = ({ navToggle , setNavToggle  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "main-header",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderTop, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid clearfix",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-inner d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "d-lg-flex align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/bootcamp-logo.png",
                                                    alt: "Logo",
                                                    title: "Logo"
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "nav-outer clearfix",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "main-menu navbar-expand-lg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "navbar-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mobile-logo bg-green br-10 p-15",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/bootcamp-logo.png",
                                                                alt: "Logo",
                                                                title: "Logo"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        className: "navbar-toggle",
                                                        "data-toggle": "collapse",
                                                        "data-target": ".navbar-collapse",
                                                        onClick: ()=>setNavToggle(!navToggle),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `navbar-collapse collapse clearfix ${navToggle ? "show" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Menus, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileHeader, {})
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu-btn-sidebar d-flex align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "menu-sidebar",
                                        onClick: ()=>(0,utils/* sidebarOnclick */.fH)(),
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-bar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-bar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-bar"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }), Header3 = ({ navToggle , setNavToggle  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "main-header header-three",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderTop, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container clearfix",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-inner d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo-outer d-lg-flex align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/logos/logo-two.png",
                                                    alt: "Logo",
                                                    title: "Logo"
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "nav-outer clearfix",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "main-menu navbar-expand-lg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "navbar-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mobile-logo",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/logos/logo-two.png",
                                                                    alt: "Logo",
                                                                    title: "Logo"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        className: "navbar-toggle",
                                                        "data-toggle": "collapse",
                                                        "data-target": ".navbar-collapse",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `navbar-collapse collapse clearfix ${navToggle ? "show" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Menus, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileHeader, {})
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "menu-btn-sidebar d-flex align-items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "nav-search",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "fa fa-search"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    onSubmit: (e)=>e.preventDefault(),
                                                    action: "#",
                                                    className: "hide",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "text",
                                                            placeholder: "Search",
                                                            className: "searchbox",
                                                            required: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "submit",
                                                            className: "searchbutton fa fa-search"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "cart",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-shopping-bag"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-user-circle"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-sidebar",
                                            onClick: ()=>(0,utils/* sidebarOnclick */.fH)(),
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "icon-bar"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }), Header4 = ({ navToggle , setNavToggle  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "main-header header-four",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-top bg-light-blue text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "top-inner",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "top-left",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "far fa-clock"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: "Working Hours"
                                            }),
                                            " : Manday - Friday, 08am - 05pm"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fas fa-phone"
                                            }),
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: "Hotline"
                                            }),
                                            " :",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "callto:+012(345)6789",
                                                children: "+012 (345) 67 89"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "top-right d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "social-style-two",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-pinterest-p"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "top-menu",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: "Setting & Privacy"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/faqs",
                                                    children: "Faqs"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/about",
                                                    children: "About"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header-upper",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container-fluid clearfix",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "header-inner d-flex align-items-center justify-content-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "logo-outer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/logos/logo-three.png",
                                                alt: "Logo",
                                                title: "Logo"
                                            })
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "nav-outer clearfix",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "main-menu navbar-expand-lg",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "navbar-header",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mobile-logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/logos/logo-three.png",
                                                                alt: "Logo",
                                                                title: "Logo"
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                    type: "button",
                                                    className: "navbar-toggle",
                                                    "data-toggle": "collapse",
                                                    "data-target": ".navbar-collapse",
                                                    onClick: ()=>setNavToggle(!navToggle),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-bar"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-bar"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-bar"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: `navbar-collapse collapse clearfix ${navToggle ? "show" : ""}`,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menus, {}),
                                                /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileHeader, {})
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }), DefaultHeader = ({ navToggle , setNavToggle  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "main-header header-two",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(HeaderTop, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-upper",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container-fluid clearfix",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-inner d-flex align-items-center justify-content-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo-outer d-lg-flex align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/bootcamp-logo.png",
                                                    alt: "Logo",
                                                    title: "Logo"
                                                })
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "nav-outer clearfix",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                        className: "main-menu navbar-expand-lg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "navbar-header",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mobile-logo bg-green br-10 p-15",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "assets/images/bootcamp-logo.png",
                                                                    alt: "Logo",
                                                                    title: "Logo"
                                                                })
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                        type: "button",
                                                        className: "navbar-toggle",
                                                        "data-toggle": "collapse",
                                                        "data-target": ".navbar-collapse",
                                                        onClick: ()=>setNavToggle(!navToggle),
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-bar"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: `navbar-collapse collapse clearfix ${navToggle ? "show" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Menus, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileHeader, {})
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }), Menus = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        className: "navigation clearfix d-none d-lg-flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Home, {})
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: "dropdown",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Courses"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Menu_Courses, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "dropdown-btn",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "fas fa-chevron-down"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/course-details",
                    children: "Curriculum"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: "dropdown",
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/blog-details",
                    children: "blog"
                })
            })
        ]
    }), HeaderTop = ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "header-top bg-light-blue text-white",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "top-inner",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "top-left",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "far fa-clock"
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                    children: "Next Cohort"
                                }),
                                " 15 December 2022"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "top-right d-flex align-items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "social-style-two",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                className: "py-1",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "px-2",
                                        children: "\uD83D\uDCE3"
                                    }),
                                    " Last 8 SPACES ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "px-2",
                                        children: "\uD83D\uDCE3"
                                    }),
                                    " "
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });

;// CONCATENATED MODULE: ./src/layout/Sidebar.js



const Sidebar = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "form-back-drop",
                onClick: ()=>(0,utils/* sidebarOnclick */.fH)()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "hidden-bar",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inner-box text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cross-icon",
                            onClick: ()=>(0,utils/* sidebarOnclick */.fH)(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "title",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Contact Us"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "appointment-form",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    (0,utils/* sidebarOnclick */.fH)();
                                },
                                method: "post",
                                action: "#",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            name: "text",
                                            defaultValue: "",
                                            placeholder: "Name",
                                            required: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "email",
                                            name: "email",
                                            defaultValue: "",
                                            placeholder: "Email Address",
                                            required: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                            placeholder: "Message",
                                            rows: 5,
                                            defaultValue: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "form-group",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            className: "theme-btn",
                                            children: "Submit now"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "social-style-one",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://twitter.com/Shuayb__",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fab fa-twitter"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/layout/Layout.js









const Layout = ({ children , header , footer  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* animation */.oQ)();
        external_react_nice_select_default()();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "page-wrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                        header: header
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Sidebar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {
                        footer: footer
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fH": () => (/* binding */ sidebarOnclick),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
/* unused harmony export scrollTopFun */
// Animation with wowjs
const animation = ()=>{
    if (false) {}
    new WOW.WOW().init();
};
// Sidebar
const sidebarOnclick = ()=>{
    const body = document.querySelector("body");
    body.classList.toggle("side-content-visible");
};
// Sticky nav
const stickyNav_ = ()=>{
    let offset = window.scrollY;
    const stickys = document.querySelectorAll(".main-header");
    for(let i = 0; i < stickys.length; i++){
        const sticky = stickys[i];
        if (sticky) {
            if (offset > 10) {
                sticky.classList.add("fixed-header");
            } else {
                sticky.classList.remove("fixed-header");
            }
        }
    }
};
const stickyNav = (stickyClass)=>window.addEventListener("scroll", stickyNav_);
// Scroll top
const scrollTopFun = ()=>{
    let scrollUp = document.getElementById("scroll-top"), lastScrollTop = 0;
    window.addEventListener("scroll", ()=>{
        let st = window.scrollY;
        if (st > 110) {
            scrollUp.classList.add("d-block");
        } else {
            scrollUp.classList.remove("d-block");
        }
    });
};
// Paggination
const getPagination = (totalNumber, sort)=>{
    let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx)=>idx + 1);
    return arr;
};
// change pagination and update pagination and content
const pagination = (listClass, sort, active)=>{
    let list = document.querySelectorAll(listClass);
    for(let i = 0; i < list.length; i++){
        const element = list[i];
        if (active === 1) {
            if (i < sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        } else {
            if (i >= (active - 1) * sort && i < active * sort) {
                element.classList.remove("d-none");
            } else {
                element.classList.add("d-none");
            }
        }
    }
};


/***/ })

};
;