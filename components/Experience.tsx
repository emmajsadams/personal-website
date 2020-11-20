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
			<h3>
				{title},&nbsp;
				<a href={institutionUrl}>{institution}</a> &mdash; {location} &mdash;{' '}
				{start} - {end}
			</h3>
			<ul>
				{description.map((descriptionBulletPoint) => (
					<li key={descriptionBulletPoint}>{descriptionBulletPoint}</li>
				))}
			</ul>
		</>
	)
}
