import Document, { Head, Html, Main, NextScript } from 'next/document'
import React, { ReactElement } from 'react'

export default class MyDocument extends Document {
	render(): ReactElement {
		return (
			<Html data-theme="dark">
				<Head>
					<meta
						name="google-site-verification"
						content="O_dhy7q1Kfwrvh4v9kyyHmHVZWJqzCegjrgNteyU65k"
					/>
					{/* Check for GDPR cookie consent before loading analytics */}
					<script
						dangerouslySetInnerHTML={{
							__html: `
							function getCookie(cname) {
								var name = cname + "=";
								var decodedCookie = decodeURIComponent(document.cookie);
								var ca = decodedCookie.split(';');
								for(var i = 0; i <ca.length; i++) {
									var c = ca[i];
									while (c.charAt(0) == ' ') {
										c = c.substring(1);
									}
									if (c.indexOf(name) == 0) {
										return c.substring(name.length, c.length);
									}
								}
								return "";
							}

							if (getCookie('CookieConsent') || getCookie('CookieConsent-legacy')) {
								var googleTagManager = document.createElement( 'script' );
								googleTagManager.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}';
								googleTagManager.async = true;
								document.head.appendChild(googleTagManager);

								var cloudflareAnalytics = document.createElement( 'script' );
								cloudflareAnalytics.src = 'https://static.cloudflareinsights.com/beacon.min.js';
								cloudflareAnalytics.defer = true;
								cloudflareAnalytics.setAttribute('data-cf-beacon', '{"token": "5bea707fee3a4c3bad09c585c8f00fe8"}')
								document.head.appendChild(cloudflareAnalytics);

								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}', {
									page_path: window.location.pathname,
								});
							}
          `,
						}}
					/>
				</Head>
				<body data-theme="dark">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
