import React, { ReactElement } from 'react'
import { School } from '../config/schools'

interface SchoolProps {
	school: School
}

export default function SchoolElement({
	school: {
		institution,
		url,
		gpa,
		location,
		degree,
		startYear,
		endYear,
		description,
	},
}: SchoolProps): ReactElement {
	return (
		<>
			<div className="flex flex-row">
				<h3 className="flex-auto text-left">
					<a href={url} target="_blank" rel="noreferrer">
						{institution}
					</a>
				</h3>
				<span className="flex-auto text-right">{location}</span>
			</div>
			<div className="flex flex-row">
				<span className="flex-auto text-left">
					{degree}, {gpa.toFixed(1)} GPA
				</span>
				<span className="flex-auto text-right">
					{startYear} — {endYear}
				</span>
			</div>
			<ul>
				{description.map((descriptionBulletPoint) => (
					<li key={descriptionBulletPoint}>{descriptionBulletPoint}</li>
				))}
			</ul>
		</>
	)
}
