import { GITHUB } from '../config/personalDetails'

const PROJECT_URL = `https://${GITHUB}`

export interface Project {
	title: string
	url: string
	technologies: string[]
	description: string[]
}

export const PersonalWebsite: Project = {
	title: 'Personal Website',
	url: `${PROJECT_URL}/personal-website`,
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

export const Grimoire: Project = {
	title: 'Grimoire',
	url: `${PROJECT_URL}/grimoire`,
	technologies: [
		'TypeScript',
		'Next.JS',
		'Docker',
		'React',
		'GraphQL (Apollo)',
		'Postgres (Prisma)',
		'Material UI',
		'Css (Emotion)',
	],
	description: [
		'Next.JS powered notes and calendar app with a Material UI composed of small reusable components.',
		'GraphQL backend with access control for separate users that uses Prisma to persist data with Postgres.',
	],
}

export const NoteDoctor: Project = {
	title: 'Note Doctor',
	url: `${PROJECT_URL}/note-doctor`,
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

export const DiscordManagementBot: Project = {
	title: 'Discord Management Bot',
	url: `${PROJECT_URL}/discord-mgmt-bot`,
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
		'Code is broken up into highly reusable modules that can be pulled into any TypeScript project for customization.',
	],
}

export const Dstruct: Project = {
	title: 'dstruct',
	url: `${PROJECT_URL}/dstruct`,
	technologies: ['TypeScript', 'Grunt', 'Docker', 'Bower', 'Karma'],
	description: [
		'Common data structures and algorithms for TypeScript.',
		'Based on Java collections, C# collections, and Google Java collections.',
	],
}

export const GPT2API: Project = {
	title: 'GPT-2 API',
	url: `${PROJECT_URL}/gpt2-api`,
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
	url: `${PROJECT_URL}/sharetube`,
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

export const AutocompleteComparison: Project = {
	title: 'Autocomplete Comparison',
	url: `${PROJECT_URL}/autocomplete-compare-web`,
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

export const TypeScriptDatabase: Project = {
	title: 'TypeScript Database',
	url: `${PROJECT_URL}/ts-database`,
	technologies: [
		'TypeScript',
		'Node.JS',
		'eslint',
		'prettier',
		'mocha',
		'sinon',
	],
	description: [
		'A transactional in-memory database for TypeScript with a string key/value REPL.',
	],
}

// TODO: Consider FlightSearcher, Checkout?
export default [
	PersonalWebsite,
	TypeScriptDatabase,
	Grimoire,
	DiscordManagementBot,
	Dstruct,
]
