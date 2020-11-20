import { Project } from '../../config/projects'

export default function getProject({
	title,
	url,
	technologies,
	description,
}: Project): string {
	// Log latex resume syntax for easy updating of resume
	const latexTechnologies = technologies.join(', ')
	const latexDescription = description
		.map(
			(descriptionBulletPoint) =>
				`        \\resumeItem{${descriptionBulletPoint}}\n`,
		)
		.join('')
	return (
		`    \\resumeSubheading\n` +
		`      {\\textbf{\href{${url}}{\\underline{${title}}}} $|$ \\emph{${latexTechnologies}}}\n ` +
		`      \\resumeItemListStart\n` +
		latexDescription +
		`      \\resumeItemListEnd`
	)
}
