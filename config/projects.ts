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

export default [PersonalWebsite, DiscordManagementBot, ShareTube]

/*

      \resumeProjectHeading
          {\textbf{\href{}{\underline{ShareTube}}} $|$ \emph{}}
          \resumeItemListStart
            \resumeItem{}
            \resumeItem{}
            \resumeItem{}
          \resumeItemListEnd

      \resumeProjectHeading
          {\textbf{\href{https://gitlab.com/EmmaJCline/gpt2-api}{\underline{GPT2}}} $|$ \emph{Python, Starlette, GPT-2 Tensorflow, Docker, Kubernetes }}
          \resumeItemListStart
            \resumeItem{API that allows requests against any GPT-2 model }
          \resumeItemListEnd

      \resumeProjectHeading
          {\textbf{\href{https://gitlab.com/EmmaJCline/dstruct}{\underline{dstruct}}} $|$ \emph{TODO}}
          \resumeItemListStart
            \resumeItem{TODO}
          \resumeItemListEnd

      \resumeProjectHeading
          {\textbf{\href{https://gitlab.com/EmmaJCline/FlightSearcher}{\underline{FlightSearcher}}} $|$ \emph{TODO}}
          \resumeItemListStart
            \resumeItem{TODO}
          \resumeItemListEnd

      \resumeProjectHeading
          {\textbf{\href{https://gitlab.com/EmmaJCline/CheckOut}{\underline{CheckOut}}} $|$ \emph{TODO}}
          \resumeItemListStart
            \resumeItem{TODO}
          \resumeItemListEnd

      \resumeProjectHeading
          {\textbf{\href{https://gitlab.com/EmmaJCline/autocomplete-compare-web}{\underline{Autocomplete Comparison}}} $|$ \emph{TODO}}
          \resumeItemListStart
            \resumeItem{TODO}
					\resumeItemListEnd
					*/
