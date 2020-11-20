import { Experience } from '../../config/experiences'

export default function getExperience({
	title,
	institution,
	institutionUrl,
	location,
	start,
	end,
	description,
}: Experience): string {
	// Log latex resume syntax for easy updating of resume
	const latexDescription = description
		.map(
			(descriptionBulletPoint) =>
				`        \\resumeItem{${descriptionBulletPoint}}\n`,
		)
		.join('')
	return (
		`    \\resumeSubheading\n` +
		`      {${title}}{${start} -- ${end}}\n` +
		`      {\\href{${institutionUrl}}{\\underline{${institution}}}}{${location}}\n` +
		`      \\resumeItemListStart\n` +
		latexDescription +
		`      \\resumeItemListEnd`
	)
}
