import UserDarkMode, {
	DARK_THEME,
	LIGHT_THEME,
	THEME_KEY,
} from '../types/UserDarkMode'

function getUserSelectedDarkMode(): UserDarkMode {
	if (process.browser) {
		if (localStorage.getItem(THEME_KEY) === DARK_THEME) {
			return UserDarkMode.selectedDarkTheme
		}

		if (localStorage.getItem(THEME_KEY) === LIGHT_THEME) {
			return UserDarkMode.selectedLightTheme
		}
	}

	return UserDarkMode.unknown
}

function getPreferredColorScheme(): UserDarkMode {
	// if the user has not selected a dark mode setting on this site use their prefers-color-scheme
	// settings
	if (process.browser && window.matchMedia) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return UserDarkMode.prefersDarkTheme
		}

		if (window.matchMedia('(prefers-color-scheme: light)').matches) {
			return UserDarkMode.prefersLightTheme
		}
	}

	return UserDarkMode.unknown
}

export default function getUserDarkMode(): UserDarkMode {
	const userSelectedDarkMode = getUserSelectedDarkMode()
	if (userSelectedDarkMode !== UserDarkMode.unknown) {
		return userSelectedDarkMode
	}

	return getPreferredColorScheme()
}
