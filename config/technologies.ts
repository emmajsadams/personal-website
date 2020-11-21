// TODO: CONSIDER adding years for each skill
export interface Technology {
	category: string
	technologies: string[]
}

export const Languages: Technology = {
	category: 'Languages',
	technologies: [
		'TypeScript',
		'JavaScript',
		'C#',
		'Python',
		'HTML',
		'CSS',
		'SQL',
		'C',
		'Bash',
	],
}

export const Frameworks: Technology = {
	category: 'Frameworks',
	technologies: [
		'Next.JS',
		'React',
		'Vue.js',
		'Flask',
		'Starlette',
		'ASP.NET MVC',
	],
}

export const Libraries: Technology = {
	category: 'Libraries',
	technologies: [
		'TailwindCSS',
		'PostCSS',
		'pandas',
		'NumPy',
		'TensorFlow',
		'ASP.NET MVC',
	],
}

export const Databases: Technology = {
	category: 'Databases',
	technologies: ['PostgreSQL', 'MSSQL', 'MySQL', 'Elasticsearch'],
}

export const CloudProviders: Technology = {
	category: 'Cloud Providers',
	technologies: [
		'AWS',
		'GCE',
		'Azure',
		'Vercel',
		'DigtalOcean',
		'Cloudflare (workers, CDN, DNS)',
		'Akamai',
	],
}

export const DeveloperTools: Technology = {
	category: 'Developer Tools',
	technologies: [
		'VSCode',
		'Visual Studio',
		'Git',
		'Docker',
		'Kubernetes',
		'yarn',
		'npm',
		'webpack',
		'ESLint',
		'Prettier',
		'cmake',
		'gcc',
	],
}

export default [
	Languages,
	Frameworks,
	Libraries,
	Databases,
	CloudProviders,
	DeveloperTools,
]
