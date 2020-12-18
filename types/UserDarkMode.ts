enum UserDarkMode {
	selectedDarkTheme,
	selectedLightTheme,
	prefersLightTheme,
	prefersDarkTheme,
	unknown,
}

export const DARK_MODES = [
	UserDarkMode.prefersDarkTheme,
	UserDarkMode.selectedDarkTheme,
	UserDarkMode.unknown,
]

export const LIGHT_MODES = [
	UserDarkMode.prefersLightTheme,
	UserDarkMode.selectedLightTheme,
]

export const THEME_ATTRIBUTE = 'data-theme'
export const THEME_KEY = 'theme'
export const DARK_THEME = 'dark'
export const LIGHT_THEME = 'light'

export default UserDarkMode
