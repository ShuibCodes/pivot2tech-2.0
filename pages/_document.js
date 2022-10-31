import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />
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
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
