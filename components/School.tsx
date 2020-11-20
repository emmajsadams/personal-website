import React, { ReactElement } from 'react'
import { School } from '../config/schools'

interface SchoolProps {
	school: School
}

// TODO: format this like the latex resume
export default function SchoolElement({
	school: { institution, location, degree, startYear, endYear },
}: SchoolProps): ReactElement {
	return (
		<>
			<p>
				{institution} — {degree}, {startYear} — {endYear}
			</p>
		</>
	)
}
