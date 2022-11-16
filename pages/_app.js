import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<Fragment>
			<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=UA-207304431-1" />
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-207304431-1', {
            page_path: window.location.pathname,
          });
        `,
				}}
			/>
			<Head>
				<title>Pivot2Tech Bootcamp </title>
				{/*====== Favicon Icon ======*/}

				<link rel="shortcut icon" href="assets/images/favicon-new.ico" type="image/x-icon" />
				{/*====== Google Fonts ======*/}
				<link
					href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				{/*====== Flaticon ======*/}
				<link rel="stylesheet" href="assets/css/flaticon.min.css" />
				{/*====== Font Awesome ======*/}
				<link rel="stylesheet" href="assets/css/font-awesome-5.9.0.min.css" />
				{/*====== Bootstrap ======*/}
				<link rel="stylesheet" href="assets/css/bootstrap-4.5.3.min.css" />
				{/*====== Magnific Popup ======*/}
				<link rel="stylesheet" href="assets/css/magnific-popup.min.css" />
				{/*====== Nice Select ======*/}
				<link rel="stylesheet" href="assets/css/nice-select.min.css" />
				{/*====== jQuery UI ======*/}
				<link rel="stylesheet" href="assets/css/jquery-ui.min.css" />
				{/*====== Animate ======*/}
				<link rel="stylesheet" href="assets/css/animate.min.css" />
				{/*====== Slick ======*/}
				<link rel="stylesheet" href="assets/css/slick.min.css" />
				{/*====== Main Style ======*/}
				<link rel="stylesheet" href="assets/css/style.css" />
			</Head>

			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
