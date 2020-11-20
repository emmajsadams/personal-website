import { School } from '../../config/schools'

export default function getSchool({
	institution,
	location,
	degree,
	startYear,
	endYear,
}: School): string {
	return (
		`    \\resumeSubheading\n` +
		`      {${institution}}{${location}}\n` +
		`      {${degree}}{${startYear} -- ${endYear}}`
	)
}
