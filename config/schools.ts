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
	degree: 'Bachelor of Science in Informatics, Minor in Mathematics',
	startYear: 2011,
	endYear: 2014,
	description: [
		'Informatics as my major taught an interdisciplinary approach to technology covering topics a range of topics including computer science, business, design, user experience, and project management. It encouraged a broad foundation, but deep specialization within a given field. Within this major, I specialized in computer science.',
		'Mathematics as my minor taught me a broad overview of important topics that apply to computer science and many other fields such as calculus, linear algebra, complex analysis, markov chains, monte-carlo methods, and probability theory.',
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

export const BellevueCollege: School = {
	institution: 'Bellevue College',
	url: 'https://www.bellevuecollege.edu/',
	gpa: 4.0,
	location: 'Bellevue, WA',
	degree: 'Towards overall degree at University of Washington',
	startYear: 2008,
	endYear: 2011,
	description: [
		'Attended while in High School at Sammamish High as part of the Running Start program. Focused on general education prerequisites. Near the end of my time at Bellevue College, I focused on Computer Science and Mathematics courses to prepare me for the University of Washington.',
	],
}

export default [UniversityOfWashington, DigiPen, BellevueCollege]
