import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import "../styles/globals.css";
import "../src/components/CookieBanner/index.scss";
import Script from "next/script";
import CookieBanner from "../src/components/CookieBanner";
import SocialModal from "../src/components/SocialModal";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QQSSMGG0L8"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
         
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-QQSSMGG0L8');
        `,
        }}
      />
      <Script
        id="script-1"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `			
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};

  ttq.load('CE15V6RC77UE9HS44FL0');
  ttq.page();
}(window, document, 'ttq');  `,
        }}
      />
      <Head>
        <title>Pivot2Tech Bootcamp </title>
        {/*====== Favicon Icon ======*/}

        <link
          rel="shortcut icon"
          href="assets/images/favicon-new.ico"
          type="image/x-icon"
        />
        {/*====== Google Fonts ======*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/*====== Flaticon ======*/}
        <link
          rel="stylesheet"
          href="assets/css/flaticon.min.css"
        />
        {/*====== Font Awesome ======*/}
        <link
          rel="stylesheet"
          href="assets/css/font-awesome-5.9.0.min.css"
        />
        {/*====== Bootstrap ======*/}
        <link
          rel="stylesheet"
          href="assets/css/bootstrap-4.5.3.min.css"
        />
        {/*====== Magnific Popup ======*/}
        <link
          rel="stylesheet"
          href="assets/css/magnific-popup.min.css"
        />
        {/*====== Nice Select ======*/}
        <link
          rel="stylesheet"
          href="assets/css/nice-select.min.css"
        />
        {/*====== jQuery UI ======*/}
        <link
          rel="stylesheet"
          href="assets/css/jquery-ui.min.css"
        />
        {/*====== Animate ======*/}
        <link
          rel="stylesheet"
          href="assets/css/animate.min.css"
        />
        {/*====== Slick ======*/}
        <link
          rel="stylesheet"
          href="assets/css/slick.min.css"
        />
        {/*====== Main Style ======*/}
        <link
          rel="stylesheet"
          href="assets/css/style.css"
        />
      </Head>
      <div className="position-relative">
        <CookieBanner />
        <SocialModal />
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
