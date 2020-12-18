import { AppProps, NextWebVitalsMetric } from 'next/app'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
import DarkMode from '../components/DarkMode'
import '../styles/globals.css'
import * as gtag from '../utils/gtag'

export default function App({ Component, pageProps }: AppProps): ReactElement {
	const router = useRouter()

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
