import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DarkMode from '../../components/DarkMode'
import {
	DARK_THEME,
	LIGHT_THEME,
	THEME_ATTRIBUTE,
	THEME_KEY,
} from '../../types/UserDarkMode'

test('renders dark theme by default if no preferred color scheme or localStorage theme', async () => {
	;(window.process as any).browser = true
	localStorage.setItem(THEME_KEY, null)

	render(<DarkMode />)

	const expectedTheme = DARK_THEME
	expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toEqual(
		expectedTheme,
	)
	expect(document.body.getAttribute(THEME_ATTRIBUTE)).toEqual(expectedTheme)
})

test('renders dark theme if preferred color scheme is dark and no localStorage theme', async () => {
	;(window.process as any).browser = true
	localStorage.setItem(THEME_KEY, null)
	const addEventListener: any = () => {
		return null
	}
	window.matchMedia = (prefersColorScheme) => {
		if (prefersColorScheme === '(prefers-color-scheme: dark)') {
			return { matches: true, addEventListener } as any
		}

		return { matches: false, addEventListener } as any
	}

	render(<DarkMode />)

	const expectedTheme = DARK_THEME
	expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toEqual(
		expectedTheme,
	)
	expect(document.body.getAttribute(THEME_ATTRIBUTE)).toEqual(expectedTheme)
})

test('renders light theme if preferred color scheme is dark and no localStorage theme', async () => {
	;(window.process as any).browser = true
	localStorage.setItem(THEME_KEY, null)
	const addEventListener: any = () => {
		return null
	}
	window.matchMedia = (prefersColorScheme) => {
		if (prefersColorScheme === '(prefers-color-scheme: light)') {
			return { matches: true, addEventListener } as any
		}

		return { matches: false, addEventListener } as any
	}

	render(<DarkMode />)

	const expectedTheme = LIGHT_THEME
	expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toEqual(
		expectedTheme,
	)
	expect(document.body.getAttribute(THEME_ATTRIBUTE)).toEqual(expectedTheme)
})

test('renders dark theme ignoring preferred color scheme if localStorage dark theme is set', async () => {
	;(window.process as any).browser = true
	localStorage.setItem(THEME_KEY, DARK_THEME)
	const addEventListener: any = () => {
		return null
	}
	window.matchMedia = (prefersColorScheme) => {
		if (prefersColorScheme === '(prefers-color-scheme: light)') {
			return { matches: true, addEventListener } as any
		}

		return { matches: false, addEventListener } as any
	}

	render(<DarkMode />)

	const expectedTheme = DARK_THEME
	expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toEqual(
		expectedTheme,
	)
	expect(document.body.getAttribute(THEME_ATTRIBUTE)).toEqual(expectedTheme)
})

test('renders light theme ignoring preferred color scheme if localStorage light theme is set', async () => {
	;(window.process as any).browser = true
	localStorage.setItem(THEME_KEY, LIGHT_THEME)
	const addEventListener: any = () => {
		return null
	}
	window.matchMedia = (prefersColorScheme) => {
		if (prefersColorScheme === '(prefers-color-scheme: dark)') {
			return { matches: true, addEventListener } as any
		}

		return { matches: false, addEventListener } as any
	}

	render(<DarkMode />)

	const expectedTheme = LIGHT_THEME
	expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toEqual(
		expectedTheme,
	)
	expect(document.body.getAttribute(THEME_ATTRIBUTE)).toEqual(expectedTheme)
})

test('renders light theme if preferred color scheme changes and no localStorage theme is set', async () => {
	;(window.process as any).browser = true
	localStorage.setItem(THEME_KEY, null)
	let eventListenerAdded = false
	const addEventListener: any = (_, eventListener) => {
		eventListenerAdded = true
		eventListener()
	}
	window.matchMedia = (prefersColorScheme) => {
		const matchedPrefersColorScheme = eventListenerAdded
			? '(prefers-color-scheme: light)'
			: '(prefers-color-scheme: dark)'
		if (prefersColorScheme === matchedPrefersColorScheme) {
			return { matches: true, addEventListener } as any
		}

		return { matches: false, addEventListener } as any
	}

	render(<DarkMode />)

	const expectedTheme = LIGHT_THEME
	expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toEqual(
		expectedTheme,
	)
	expect(document.body.getAttribute(THEME_ATTRIBUTE)).toEqual(expectedTheme)
})

test('renders light theme if preferred color scheme changes and no localStorage theme is set', async () => {
	;(window.process as any).browser = true
	localStorage.setItem(THEME_KEY, null)
	let eventListenerAdded = false
	const addEventListener: any = (_, eventListener) => {
		eventListenerAdded = true
		eventListener()
	}
	window.matchMedia = (prefersColorScheme) => {
		const matchedPrefersColorScheme = eventListenerAdded
			? '(prefers-color-scheme: dark)'
			: '(prefers-color-scheme: light)'
		if (prefersColorScheme === matchedPrefersColorScheme) {
			return { matches: true, addEventListener } as any
		}

		return { matches: false, addEventListener } as any
	}

	render(<DarkMode />)

	const expectedTheme = DARK_THEME
	expect(document.documentElement.getAttribute(THEME_ATTRIBUTE)).toEqual(
		expectedTheme,
	)
	expect(document.body.getAttribute(THEME_ATTRIBUTE)).toEqual(expectedTheme)
})
