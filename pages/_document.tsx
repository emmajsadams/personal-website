import Document, { Head, Html, Main, NextScript } from 'next/document'
import React, { ReactElement } from 'react'

export default class MyDocument extends Document {
	render(): ReactElement {
		return (
			<Html data-theme="dark" lang="en">
				<Head>
					<meta
						name="google-site-verification"
						content="O_dhy7q1Kfwrvh4v9kyyHmHVZWJqzCegjrgNteyU65k"
					/>
					<script
						defer
						data-cf-beacon='{"token": "5bea707fee3a4c3bad09c585c8f00fe8"}'
						src="https://static.cloudflareinsights.com/beacon.min.js"
					></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							var googleTagManager = document.createElement( 'script' );
							googleTagManager.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}';
							googleTagManager.async = true;
							document.head.appendChild(googleTagManager);

							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}', {
								page_path: window.location.pathname,
							});`,
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
