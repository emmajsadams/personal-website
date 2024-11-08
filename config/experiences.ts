import { URL } from './personalDetails'

export interface Experience {
	title: string
	institution: string
	institutionUrl: string
	location: string
	start: string
	end: string
	description: string[]
}

export const HPE: Experience = {
	title: 'Senior Software Engineer',
	institution: 'Hewlett Packard Enterprise',
	institutionUrl: 'https://www.hpe.com',
	location: 'Remote',
	start: 'Jan. 2024',
	end: 'Nov. 2024',
	description: [
		'Worked across the stack on a greenfield RAG evaluation and deployment service which primarily used Go, Python, and TypeScript React.',
		'Lead the RAG evaluation React frontend project. Evaluation streamed DeepEval results in real-time with WebSockets to help compare RAG output to what was expected.',
		'Helped define the frontend architecture into core components reused across the app with tools like vite, eslint, axe, storybook, orval, zod, msw, jest, and playwright.',
		'Implemented performance critical features in a JupyterLab extension for managing large data-driven pipelines training LLMs.',
		'Worked closely with product managers and designers to deliver stories sometimes requiring presentations to stakeholders and technical design documents.',
	],
}

export const DevotedHealth: Experience = {
	title: 'Principal Software Engineer',
	institution: 'Devoted Health',
	institutionUrl: 'https://www.devoted.com/',
	location: 'Remote',
	start: 'Feb. 2021',
	end: 'Apr. 2023',
	description: [
		'Remote role working with Go on the backend and TypeScript React on the frontend.',
		'Drafted stories for a React customer service app by participating product design meetings and developed them until release.',
		'Scaled ETL pipelines that had to meet the demands of fast user growth.',
		'Lead project redesigning the RISK engine which is the primary revenue stream enabling claim reimbursement by the US government.',
	],
}

export const Freelance: Experience = {
	title: 'Freelance Software Engineer',
	institution: 'Self-Employed',
	institutionUrl: URL,
	location: 'Remote',
	start: 'Aug. 2020',
	end: 'Jan. 2021',
	description: [
		'Contract work building APIs and React web applications for small to mid-sized companies.',
		'Computer Science tutoring and classes for teaching university students web development.',
	],
}

export const HumbleBundleLead: Experience = {
	title: 'Lead Senior Software Engineer',
	institution: 'Humble Bundle',
	institutionUrl: 'https://www.humblebundle.com',
	location: 'Remote',
	start: 'Jul. 2018',
	end: 'Jul. 2020',
	description: [
		'Promoted from Senior Software Engineer to Lead Senior Software Engineer II of the Platform team.',
		'Developed features for a Python and React e-commerce website that averages 26 million views per month.',
		'Executed a project to migrate all sessions to the newly required TOTP two-factor system with OAuth Google login.',
		'Led the internationalization project for an 8-year-old application and educated other developers on how to use these tools.',
		'Managed 5 direct reports including regular one-on-one meetings, code reviews, and pair programming.',
	],
}

export const CommitteeForChildrenLead: Experience = {
	title: 'Lead Full Stack Software Engineer',
	institution: 'Committee for Children',
	institutionUrl: 'https://www.cfchildren.org',
	location: 'Seattle, WA',
	start: 'Jan. 2018',
	end: 'Aug. 2018',
	description: [
		'Led the replacement of a legacy, monolithic DNN platform to a high performance platform utilizing using React and .NET Core.',
		'Migrated user authentication to the IdentityServer4 OpenID identity provider.',
		'Incrementally transformed a series of untested stored procedures into a modern C# WebAPI.',
		'Developed a TypeScript React frontend powered by an ASP.NET Core C# backend to track the delivery of coursework to students.',
	],
}

export const TrovFullStack: Experience = {
	title: 'Full Stack Software Engineer',
	institution: 'Trov',
	institutionUrl: 'https://www.trov.com/',
	location: 'Remote',
	start: 'Jul. 2013',
	end: 'Dec. 2017',
	description: [
		'Remote software development team where developers wrote unit and integration tests.',
		'Constructed an on-demand insurance platform for consumer items with ASP.NET C# and SQL.',
		'Developed an app for managing claims and insuring items with a Typescript React frontend and ASP.NET C# backend.',
		"Built a business intelligence system for sending information to Trov's partners using Python.",
	],
}

export const UniversityOfWashingtonResearcher: Experience = {
	title: 'Application Researcher',
	institution: 'University of Washington',
	institutionUrl: 'https://www.washington.edu/',
	location: 'Seattle, WA',
	start: 'Jan. 2013',
	end: 'Nov. 2013',
	description: [
		'Lead developer for the TypeScript library that abstracted cloud storage services like Dropbox, Google Drive, and AWS.',
		'Contributed to a research paper on abstracting cloud storage.',
	],
}

export const ETradeSoftwareEngineer: Experience = {
	title: 'Software Engineer Intern',
	institution: 'E*Trade',
	institutionUrl: 'https://etrade.com',
	location: 'Seattle, WA',
	start: 'Sept. 2012',
	end: 'May 2013',
	description: [
		'Worked on an international team to develop high performance stock trading apps implemented in Java',
		'Developed high-frequency trading features that supported options (contracts to buy a stock at a given price in a span of time).',
	],
}

export const UniversityOfWashingtonInstructor: Experience = {
	title: 'Web Instructor and Engineer',
	institution: 'University of Washington',
	institutionUrl: 'https://www.washington.edu',
	location: 'Seattle, WA',
	start: 'Jan. 2012',
	end: 'Jun. 2013',
	description: [
		'Taught modern web development standards to University of Washington staff and students.',
		'Developed applications to manage courses and support tickets using Python and Django.',
	],
}

export const RakutenSoftwareEngineer: Experience = {
	title: 'Software Engineer Intern',
	institution: 'Rakuten',
	institutionUrl: 'https://www.rakuten.com/',
	location: 'Seattle, WA',
	start: 'Apr. 2012',
	end: 'Nov. 2012',
	description: [
		'Scraped and normalized product information using Python.',
		'Worked with Overstock, Amazon, and Walmart APIs to gather product information and update listings.',
	],
}

export const SmiteWorksSoftwareEngineer: Experience = {
	title: 'Software Engineer Intern',
	institution: 'SmiteWorks',
	institutionUrl: 'https://www.fantasygrounds.com',
	location: 'Bellevue, WA',
	start: 'Apr. 2011',
	end: 'Nov. 2011',
	description: [
		'Worked on the FantasyGrounds chat feature using C.',
		'Led the development of a C app to import character data from competitors apps.',
		'Worked with the Steam gaming app store to publish updates and respond to customer feedback.',
	],
}

export default [
	HPE,
	DevotedHealth,
	Freelance,
	HumbleBundleLead,
	CommitteeForChildrenLead,
	TrovFullStack,
	UniversityOfWashingtonResearcher,
	ETradeSoftwareEngineer,
	UniversityOfWashingtonInstructor,
	RakutenSoftwareEngineer,
	SmiteWorksSoftwareEngineer,
]
