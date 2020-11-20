import Document, { Head, Html, Main, NextScript } from 'next/document'
import React, { ReactElement } from 'react'

export default class MyDocument extends Document {
	render(): ReactElement {
		return (
			<Html>
				<Head>
					<meta
						name="google-site-verification"
						content="O_dhy7q1Kfwrvh4v9kyyHmHVZWJqzCegjrgNteyU65k"
					/>
					<link href="/files/emma.jpg" rel="icon" type="image/jpg"></link>
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
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
