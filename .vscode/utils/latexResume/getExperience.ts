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
			(descriptionBulletPoint) => `\\resumeItem{${descriptionBulletPoint}}\n`,
		)
		.join('')
	return `\\resumeSubheading
{${title}}{${start} -- ${end}}
{\\href{${institutionUrl}}{\\underline{${institution}}}}{${location}}
\\resumeItemListStart
${latexDescription}
\\resumeItemListEnd`
}
