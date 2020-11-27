import { School } from '../../config/schools'

export default function getSchool({
	institution,
	location,
	degree,
	startYear,
	endYear,
	gpa,
}: School): string {
	return `\\resumeSubheading
{${institution}}{${location}}
{${degree}, ${gpa.toFixed(2)} GPA}{${startYear} -- ${endYear}}`
}
