export default function isDarkMode(): boolean {
	// prefer manually selected locally stored settings
	if (process.browser) {
		if (localStorage.getItem('theme') === 'dark') {
			return true
		}
		if (localStorage.getItem('theme') === 'light') {
			return false
		}

		// If the browser supports match media and it is light then note no light mode
		if (
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: light)').matches
		) {
			return false
		}
	}

	// default to dark mode
	return true
}
