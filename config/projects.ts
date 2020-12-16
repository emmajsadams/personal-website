export interface Project {
	title: string
	url: string
	technologies: string[]
	description: string[]
}

export const PersonalWebsite: Project = {
	title: 'Personal Website',
	url: 'https://gitlab.com/EmmaJCline/personal-website',
	technologies: [
		'TypeScript',
		'Next.JS',
		'TailwindCSS',
		'Docker',
		'Node.js',
		'MDX',
		'React',
	],
	description: [
		'Next.JS powered blog, resume, and link shortener website powering my portfolio',
		'Hybrid static and server rendering model for initial load performance that switches to client side rendering',
		'Blog using MDX files for easy maintenance and richly formatted posts',
	],
}

export const DiscordManagementBot: Project = {
	title: 'Discord Management Bot',
	url: 'https://gitlab.com/EmmaJCline/discord-mgmt-bot',
	technologies: [
		'TypeScript',
		'Node.JS',
		'Docker',
		'Discord.js',
		'eslint',
		'prettier',
	],
	description: [
		'Discord bots written in TypeScript for Node.JS to manage administrative functions of a feature',
		'Scales to any size of discord server and can be deployed via Docker on any cloud platform',
		'Bots are broken up by function to enable isolated permissions instead of the monolithic administrative function',
		'Configured with JSON and allows for separate testing and production discord',
		'Code is broken up into highly reusable modules that can be pulled into any TypeScript project for customization',
	],
}

export const NoteDoctor: Project = {
	title: 'Note Doctor',
	url: 'https://gitlab.com/EmmaJCline/note-doctor',
	technologies: [
		'TypeScript',
		'Node.JS',
		'eslint',
		'prettier',
		'SendGrid',
		'GCP',
	],
	description: [
		'A CLI tool for triaging markdown files with front matter by priority, status, category, and due date',
		'Sends a daily email digest of tasks due, and prioritized as urgent using SendGrid and GCP VMs',
	],
}

export const Dstruct: Project = {
	title: 'dstruct',
	url: 'https://gitlab.com/EmmaJCline/dstruct',
	technologies: ['TypeScript', 'Grunt', 'Docker', 'Bower', 'Karma'],
	description: [
		'Data Structures and Algorithms for TypeScript',
		'Based on Java and C# Collections, and Google Guava',
	],
}

export const GPT2API: Project = {
	title: 'GPT-2 API',
	url: 'https://gitlab.com/EmmaJCline/gpt2-api',
	technologies: [
		'Python',
		'Starlette',
		'GPT-2',
		'Tensorflow',
		'Docker',
		'Kubernetes',
	],
	description: ['API that allows requests against any GPT-2 model'],
}

export const ShareTube: Project = {
	title: 'ShareTube',
	url: 'https://gitlab.com/EmmaJCline/sharetube',
	technologies: [
		'TypeScript',
		'Node.JS',
		'Docker',
		'React',
		'eslint',
		'prettier',
	],
	description: [
		'Sharing a redundantly uploaded video across several video services',
		'JSON configuration of video that can be loaded via url or as a query param',
		'Unique chat rooms for each JSON configuration video',
	],
}

export const FlightSearcher: Project = {
	title: 'FlightSearcher',
	url: 'https://gitlab.com/EmmaJCline/FlightSearcher',
	technologies: [
		'C#',
		'ASP.NET MVC',
		'TypeScript',
		'React',
		'Redux',
		'Webpack',
	],
	description: [
		'An application to search for flights based on airports and datetimes',
	],
}

export const CheckOut: Project = {
	title: 'CheckOut',
	url: 'https://gitlab.com/EmmaJCline/CheckOut',
	technologies: ['C#', 'ASP.NET MVC', 'Docker'],
	description: [
		'An API to manage a store inventory and allow customers to checkout items',
	],
}

export const AutocompleteComparison: Project = {
	title: 'Autocomplete Comparison',
	url: 'https://gitlab.com/EmmaJCline/autocomplete-compare-web',
	technologies: [
		'TypeScript',
		'React',
		'Redux',
		'React Native',
		'C#',
		'Blazor',
	],
	description: [
		'An implementation of a search autocomplete similar Google',
		'Comparing React Native, React Redux, and Blazor',
	],
}

export default [
	PersonalWebsite,
	NoteDoctor,
	DiscordManagementBot,
	GPT2API,
	Dstruct,
	ShareTube,
	AutocompleteComparison,
	FlightSearcher,
	CheckOut,
]
