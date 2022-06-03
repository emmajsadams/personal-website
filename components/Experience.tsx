import { ReactElement } from 'react'
import { Experience as ExperienceConfig } from '../config/experiences'

interface ExperienceProps {
	experience: ExperienceConfig
}

export default function Experience({
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
