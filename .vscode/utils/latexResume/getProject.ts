import { Project } from '../../config/projects'

export default function getProject({
	title,
	url,
	technologies,
	description,
}: Project): string {
	const latexTechnologies = technologies.join(', ')
	const latexDescription = description
		.map(
			(descriptionBulletPoint) => `\\resumeItem{${descriptionBulletPoint}}\n`,
		)
		.join('')
	return `\\resumeProjectHeading
{\\textbf{\\href{${url}}{\\underline{${title}}}} $|$ \\emph{${latexTechnologies}}}
\\resumeItemListStart
${latexDescription}
\\resumeItemListEnd`
}
