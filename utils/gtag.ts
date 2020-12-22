declare global {
	interface Window {
		gtag: any // TODO better type here
	}
}

type GTagEvent = {
	action: string
	category: string
	label: string
	value: number
	nonInteraction: boolean
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
	// Analytics can be rejected by GDPR users
	if (!window.gtag) {
		return
	}

	window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID, {
		page_path: url,
	})
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
	action,
	category,
	label,
	value,
	nonInteraction,
}: GTagEvent): void => {
	// Analytics can be rejected by GDPR users
	if (!window.gtag) {
		return
	}

	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
		nonInteraction,
	})
}
