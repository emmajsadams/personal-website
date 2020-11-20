export interface School {
	institution: string
	location: string
	degree: string
	startYear: number
	endYear: number
}

export const UniversityOfWashington: School = {
	institution: 'University of Washington',
	location: 'Seattle, WA',
	degree: 'Bachelor of Science in Informatics, Minor in Mathematics',
	startYear: 2011,
	endYear: 2014,
}

export const DigiPen: School = {
	institution: 'DigiPen Institute of Technology',
	location: 'Redmond, WA',
	degree: 'Towards overall degree at University of Washington',
	startYear: 2009,
	endYear: 2011,
}

export const BellevueCollege: School = {
	institution: 'Bellevue College',
	location: 'Bellevue, WA',
	degree: 'Towards overall degree at University of Washington',
	startYear: 2008,
	endYear: 2011,
}

export default [UniversityOfWashington, DigiPen, BellevueCollege]
