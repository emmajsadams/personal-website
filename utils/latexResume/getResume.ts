import EXPERIENCES from '../../config/experiences'
import SCHOOLS from '../../config/schools'
import getExperience from './getExperience'
import getSchool from './getSchool'

export default function getResume(): string {
	let resume = ''

	resume += '\\section{Education}\n' + '  \\resumeSubHeadingListStart\n'
	for (const school of SCHOOLS) {
		resume += getSchool(school) + '\n'
	}
	resume += '  \\resumeSubHeadingListEnd'

	resume += '\n\\section{Experience}\n' + '  \\resumeSubHeadingListStart\n'
	for (const experience of EXPERIENCES) {
		resume += getExperience(experience) + '\n'
	}
	resume += '  \\resumeSubHeadingListEnd'

	return resume
}
