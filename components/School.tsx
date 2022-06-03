import { ReactElement } from 'react'
import { School as SchoolConfig } from '../config/schools'

interface SchoolProps {
	school: SchoolConfig
}

export default function School({
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
				<h2 className="flex-auto text-left">
					<a href={url} target="_blank" rel="noreferrer">
						{institution}
					</a>
				</h2>
				<span className="flex-auto text-right">{location}</span>
			</div>
			<div className="flex flex-row">
				<span className="flex-auto text-left">
					{degree}, {gpa.toFixed(2)} GPA
				</span>
				<span className="flex-none text-right">
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
