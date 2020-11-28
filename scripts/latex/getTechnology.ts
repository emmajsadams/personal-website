import { Technology } from '../../config/technologies'

export default function getTechnology({
	category,
	technologies,
}: Technology): string {
	return `
\\textbf{${category}}{: ${technologies.join(', ')}} \\\\`
}
