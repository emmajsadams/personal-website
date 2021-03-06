import { AppProps, NextWebVitalsMetric } from 'next/app'
import React, { ReactElement, useEffect } from 'react'
import DarkMode from '../components/DarkMode'
import '../styles/globals.css'
import * as gtag from '../utils/gtag'

/* eslint-disable @typescript-eslint/no-var-requires */
if (process.env.NODE_ENV !== 'production' && process.browser) {
	const ReactDOM = require('react-dom')
	const axe = require('react-axe')
	axe(React, ReactDOM, 1000)
}
/* eslint-enable @typescript-eslint/no-var-requires */

export default function App({
	Component,
	pageProps,
	router,
}: AppProps): ReactElement {
	useEffect(() => {
		const handleRouteChange = (url: URL) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<div>
			<DarkMode />
			<Component {...pageProps} />
		</div>
	)
}

export function reportWebVitals({
	/* eslint-disable @typescript-eslint/no-unused-vars */
	id,
	/* eslint-disable @typescript-eslint/no-unused-vars */
	name,
	label,
	value,
}: NextWebVitalsMetric): void {
	gtag.event({
		action: name,
		category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
		label,
		value: Math.round(name === 'CLS' ? value * 1000 : value),
		nonInteraction: true,
	})
}
