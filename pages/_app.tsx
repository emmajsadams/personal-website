import { AppProps, NextWebVitalsMetric } from 'next/app'
import React, { ReactElement, useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import DarkMode from '../components/DarkMode'
import '../styles/globals.css'
import * as gtag from '../utils/gtag'

if (process.env.NODE_ENV !== 'production' && process.browser) {
	const ReactDOM = require('react-dom')
	const axe = require('react-axe')
	axe(React, ReactDOM, 1000)
}

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
			<CookieConsent
				buttonText="Enable Analytics"
				buttonStyle={{ backgroundColor: 'green', color: 'white' }}
				onAccept={() => {
					location.reload()
				}}
			>
				This website uses cookies for Google analytics for an enhanced user
				experience.
			</CookieConsent>
			<DarkMode />
			<Component {...pageProps} />
		</div>
	)
}

export function reportWebVitals({
	id,
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
