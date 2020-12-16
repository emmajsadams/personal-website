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
		'Next.JS powered blog and resume website adhering to modern web development standards.',
		'High performance and no JavaScript support is enabled due to a hybrid model of server-side and client-side rendering.',
		'Blog using MDX files for easy maintenance and richly formatted posts.',
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
		'Discord bots written in TypeScript running on Node.JS for logging, music, GPT-2 chatting, role management, and security monitoring.',
		'Scales to a discord of any size and can be configured with JSON to support any number of discords.',
		'Bots are broken up into functions respecting separate of concerns to enable granular permissions for each bot.',
		'Code is broken up into highly reusable modules that can be pulled into any TypeScript project for customization.',
	],
}

export const NoteDoctor: Project = {
	title: 'Note Doctor',
	url: 'https://gitlab.com/EmmaJCline/note-doctor',
	technologies: [
		'TypeScript',
		'Node.JS',
		'SendGrid',
		'Google Cloud',
		'eslint',
		'prettier',
	],
	description: [
		'A CLI tool for triaging markdown files using front-matter headers sorted by priority, status, category, and due date.',
		'Sends a daily email digest of due and urgent tasks using the SendGrid Email API and Google Cloud VMs.',
	],
}

export const Dstruct: Project = {
	title: 'dstruct',
	url: 'https://gitlab.com/EmmaJCline/dstruct',
	technologies: ['TypeScript', 'Grunt', 'Docker', 'Bower', 'Karma'],
	description: [
		'Common data structures and algorithms for TypeScript.',
		'Based on Java collections, C# collections, and Google Java collections.',
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
	description: [
		'An API that allows requests against GPT-2 models to generate meaningful responses to any text prompt.',
	],
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
		'Displays a video with multiple sources allowing the user to select which source is used.',
		'Implements a single shared comments thread across all sources for the video.',
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
		'An application to search for flights based on airports and datetimes.',
	],
}

// NOTE: No longer used, keeping around just incase I change my mind
export const CheckOut: Project = {
	title: 'CheckOut',
	url: 'https://gitlab.com/EmmaJCline/CheckOut',
	technologies: ['C#', 'ASP.NET MVC', 'Docker'],
	description: [
		'An API to manage a store inventory and allow customers to checkout items.',
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
		'An implementation of the same search autocomplete similar to Google in React Native, React, and C# Blazor.',
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
]
