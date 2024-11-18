export interface School {
	institution: string
	url: string
	gpa: number
	location: string
	degree: string
	startYear: number
	endYear: number
	description: string[]
}

export const UniversityOfWashington: School = {
	institution: 'University of Washington Seattle',
	url: 'https://www.washington.edu/',
	gpa: 3.87,
	location: 'Seattle, WA',
	degree: 'Bachelor of Science in Informatics',
	startYear: 2011,
	endYear: 2014,
	description: [
		'Informatics as my major taught an interdisciplinary approach to technology covering topics a range of topics including computer science, business, design, user experience, and project management. It encouraged a broad foundation, but deep specialization within a given field. Within this major, I specialized in computer science.',
	],
}

export const DigiPen: School = {
	institution: 'DigiPen Institute of Technology',
	url: 'https://www.digipen.edu/',
	gpa: 4.0,
	location: 'Redmond, WA',
	degree: 'Towards overall degree at University of Washington',
	startYear: 2009,
	endYear: 2011,
	description: [
		'Attended while in High School at Sammamish High. Focused on learning fundamentals of computer science such as various data structures and algorithms and applying them to designing video game software.',
	],
}

export default [UniversityOfWashington, DigiPen]
