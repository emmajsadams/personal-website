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

// TODO: Expand on this
export const DevotedHealth: Experience = {
	title: 'Principal Software Engineer',
	institution: 'Devoted Health',
	institutionUrl: 'https://www.devoted.com/',
	location: 'Remote',
	start: 'Feb. 2021',
	end: 'Present',
	description: [
		'Remote software development team working with Go on the backend and TypeScript React on the frontend.',
		'Modeled legal compliance workflows impacting all company departments.',
		'Scaled integrations with external vendors that dealt with all member information.',
		'More details coming soon!',
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
		'Providing proof of concept code for several University of Washington research projects.',
		'Computer Science tutoring for university students.',
		'Teaching workshops on modern web development.',
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
		'Promoted from Senior Software Engineer to Lead Senior Software Engineer II over the course of my employment.',
		'Led the platform team focused on site reliability engineering.',
		'Worked with product to define a plan to optimize the user funnel for the primary product Humble Monthly.',
		'Led the internationalization project for an 8-year-old application with minimal prior internationalization efforts.',
		'Integrated an OAuth login system for Facebook and Google into the existing user system.',
		'Executed a project to migrate all sessions to the newly required email or TOTP two-factor system.',
		'Helped define standards for representing dates, times, money, and percents in Python and JavaScript.',
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
		'Constructed an on-demand insurance platform for consumer items with C# and SQL.',
		'Developed an app for managing claims and insuring items with React and Angular.js.',
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
