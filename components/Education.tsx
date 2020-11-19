import React, { ReactElement } from 'react'

interface EducationProps {
	institution: string
	degree: string
	startYear: number
	endYear: number
}

// TODO: format this like latex resume
export default function Header({
	institution,
	degree,
	startYear,
	endYear,
}: EducationProps): ReactElement {
	return (
		<>
			<p>
				{institution} — {degree}, {startYear} — {endYear}
			</p>
		</>
	)
}
