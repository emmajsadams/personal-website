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
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
						}}
					/>
					<script
						defer
						src="https://static.cloudflareinsights.com/beacon.min.js"
						data-cf-beacon='{"token": "5bea707fee3a4c3bad09c585c8f00fe8"}'
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
