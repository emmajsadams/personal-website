import React, { ReactElement, useState } from 'react'
import styles from '../styles/DarkMode.module.css'

interface DarkModeProps {
	darkMode: boolean
}

function changeToLightMode(): void {
	localStorage.setItem('theme', 'light')
	document.body.setAttribute('data-theme', 'light')
}

function changeToDarkMode(): void {
	localStorage.setItem('theme', 'dark')
	document.body.setAttribute('data-theme', 'dark')
}

// TODO: Refactor this to have properties which define how to change between dark and light mode
export default function DarkMode(props: DarkModeProps): ReactElement {
	const [darkMode, setDarkMode] = useState(props.darkMode)

	if (process.browser) {
		if (darkMode) {
			changeToDarkMode()
		} else {
			changeToLightMode()
		}
	}

	return (
		<>
			<span className={styles.sun} onClick={() => setDarkMode(!darkMode)}>
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
