// TODO: Refactor this to be about technical skills, not technologies
export interface Technology {
	category: string
	technologies: string[]
}

export const Languages: Technology = {
	category: 'Languages',
	technologies: [
		'Bash',
		'C',
		'C#',
		'CSS',
		'HTML',
		'JavaScript',
		'Python',
		'SQL',
		'TypeScript',
	],
}

export const Frameworks: Technology = {
	category: 'Frameworks',
	technologies: [
		'ASP.NET MVC',
		'Flask',
		'Next.JS',
		'React',
		'Starlette',
		'Vue.js',
	],
}

export const Libraries: Technology = {
	category: 'Libraries',
	technologies: [
		'ASP.NET MVC',
		'NumPy',
		'pandas',
		'PostCSS',
		'TailwindCSS',
		'TensorFlow',
	],
}

export const Databases: Technology = {
	category: 'Databases',
	technologies: ['Elasticsearch', 'MSSQL', 'MySQL', 'PostgreSQL'],
}

export const CloudProviders: Technology = {
	category: 'Cloud Providers',
	technologies: [
		'Akamai',
		'AWS',
		'Cloudflare',
		'DigtalOcean',
		'Google Cloud',
		'Microsoft Azure',
		'Vercel',
	],
}

export const DeveloperTools: Technology = {
	category: 'Developer Tools',
	technologies: [
		'cmake',
		'Docker',
		'ESLint',
		'gcc',
		'Git',
		'Kubernetes',
		'npm',
		'Prettier',
		'Visual Studio',
		'VSCode',
		'webpack',
		'yarn',
	],
}

export const OperatingSystems: Technology = {
	category: 'Operating Systems',
	technologies: ['ChromeOS', 'GNU/Linux', 'MacOS', 'Windows'],
}

export const OfficeSoftware: Technology = {
	category: 'Office Software',
	technologies: [
		'Apple iWork',
		'Google Docs',
		'LaTeX',
		'LibreOffice',
		'Microsoft Office',
	],
}

export const SoftSkills: Technology = {
	category: 'Soft Skills',
	technologies: [
		'Constructive feedback',
		'desire to listen and grow',
		'effective concise communication',
		'problem solving with minimal guidance',
	],
}

export const ProfessionalAffiliations: Technology = {
	category: 'Professional Affiliations',
	technologies: [
		'IEEE Computer Society',
		'IEEE Robotics and Automation Society',
		'IEEE Communications',
		'Association for Computing Machinery',
	],
}

export default [
	Languages,
	Frameworks,
	Libraries,
	Databases,
	CloudProviders,
	DeveloperTools,
	OperatingSystems,
	OfficeSoftware,
	ProfessionalAffiliations,
	SoftSkills,
]
