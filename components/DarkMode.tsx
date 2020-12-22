import React, { ReactElement, useEffect, useState } from 'react'
import styles from '../styles/DarkMode.module.css'
import UserDarkMode, {
	DARK_MODES,
	DARK_THEME,
	LIGHT_THEME,
	THEME_ATTRIBUTE,
	THEME_KEY,
} from '../types/UserDarkMode'
import getUserDarkMode from '../utils/getUserDarkMode'

function setTheme(selectedUserDarkMode: UserDarkMode) {
	if (selectedUserDarkMode === UserDarkMode.selectedDarkTheme) {
		localStorage.setItem(THEME_KEY, DARK_THEME)
	}

	if (selectedUserDarkMode === UserDarkMode.selectedLightTheme) {
		localStorage.setItem(THEME_KEY, LIGHT_THEME)
	}
}

export default function DarkMode(): ReactElement {
	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', () => {
				const userDarkMode = getUserDarkMode()

				if (DARK_MODES.includes(userDarkMode)) {
					document.documentElement.setAttribute('data-theme', 'dark')
					document.body.setAttribute('data-theme', 'dark')
				} else {
					document.documentElement.setAttribute('data-theme', 'light')
					document.body.setAttribute('data-theme', 'light')
				}
			})
	})

	const [userDarkMode, setDarkMode]: [
		UserDarkMode,
		(userDarkMode: UserDarkMode) => void,
	] = useState(getUserDarkMode())

	if (process.browser) {
		if (DARK_MODES.includes(userDarkMode)) {
			document.documentElement.setAttribute(THEME_ATTRIBUTE, DARK_THEME)
			document.body.setAttribute(THEME_ATTRIBUTE, DARK_THEME)
		} else {
			document.documentElement.setAttribute(THEME_ATTRIBUTE, LIGHT_THEME)
			document.body.setAttribute(THEME_ATTRIBUTE, LIGHT_THEME)
		}
	}

	let newlySelectedDarkMode = UserDarkMode.selectedDarkTheme
	if (DARK_MODES.includes(userDarkMode)) {
		newlySelectedDarkMode = UserDarkMode.selectedLightTheme
	}

	return (
		<>
			<span
				className={styles.sun}
				onClick={() => {
					setTheme(newlySelectedDarkMode)
					setDarkMode(newlySelectedDarkMode)
				}}
			>
				<svg>
					<path d="M19,1 Q21,0,23,1 L39,10 Q41.5,11,42,14 L42,36 Q41.5,39,39,40 L23,49 Q21,50,19,49 L3,40 Q0.5,39,0,36 L0,14 Q0.5,11,3,10 L19,1"></path>
					<circle cx="21" cy="25" r="8"></circle>
					<circle cx="21" cy="25" r="12">
						<animateTransform
							attributeName="transform"
							attributeType="XML"
							type="rotate"
							from="0 21 25"
							to="360 21 25"
							dur="3.5s"
							repeatCount="indefinite"
						></animateTransform>
					</circle>
				</svg>
			</span>
		</>
	)
}
