import React, { ReactElement } from 'react'
import { Experience } from '../config/experiences'

interface ExperienceProps {
	experience: Experience
}

// TODO: format this like latex resume
export default function ExperienceElement({
	experience: {
		title,
		institution,
		institutionUrl,
		location,
		start,
		end,
		description,
	},
}: ExperienceProps): ReactElement {
	return (
		<>
			<h2>
				{title},&nbsp;
				<a href={institutionUrl} target="_blank" rel="noreferrer">
					{institution}
				</a>{' '}
				&mdash; {location} &mdash; {start} - {end}
			</h2>
			<ul>
				{description.map((descriptionBulletPoint) => (
					<li key={descriptionBulletPoint}>{descriptionBulletPoint}</li>
				))}
			</ul>
		</>
	)
}
