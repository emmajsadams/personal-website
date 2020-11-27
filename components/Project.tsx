import React, { ReactElement } from 'react'
import { Project } from '../config/projects'

interface ProjectProps {
	project: Project
}

export default function ProjectElement({
	project: { title, url, technologies, description },
}: ProjectProps): ReactElement {
	return (
		<>
			<h3>
				<a href={url} target="_blank" rel="noreferrer">
					{title}
				</a>
			</h3>
			<p>
				<span className="font-bold">Technologies: </span>
				{technologies.join(', ')}
			</p>
			<ul>
				{description.map((descriptionBulletPoint) => (
					<li key={descriptionBulletPoint}>{descriptionBulletPoint}</li>
				))}
			</ul>
		</>
	)
}
