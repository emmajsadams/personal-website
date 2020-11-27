export interface Experience {
	title: string
	institution: string
	institutionUrl: string
	location: string
	start: string
	end: string
	description: string[]
}

export const Freelance: Experience = {
	title: 'Freelance Software Engineer',
	institution: 'Self-Employed',
	institutionUrl: 'https://emma.cline.engineer',
	location: 'Remote',
	start: 'Aug 2020',
	end: 'Present',
	description: [
		'TypeScript Discord bots configured by JSON to manage large servers with high performance',
		'Providing proof of concept code for several University of Washington research projects',
		'Computer Science tutoring for college students',
		'Teaching workshops on modern web development',
	],
}

export const HumbleBundleLead: Experience = {
	title: 'Lead Senior Software Engineer II',
	institution: 'Humble Bundle',
	institutionUrl: 'https://www.humblebundle.com',
	location: 'Remote',
	start: 'Jul 2018',
	end: 'Jul 2020',
	description: [
		'Promoted from Senior Software Engineer to Lead Senior Software Engineer II over the course of my employment',
		'Lead the platform team focused on site reliability engineering',
		'Worked with product to define a plan to optimize the user funnel for our monthly product',
		'Lead the internationalization project for an 8-year-old application with minimal prior internationalization efforts',
		'Integrated an OAuth login system for Facebook and Google into our existing user system',
		'Planned a project to migrate all sessions to the newly required email or TOTP two-factor system',
		'Helped define standards for representing DateTimes, Money, and Percents in Python and JavaScript',
	],
}

export const CommitteeForChildrenLead: Experience = {
	title: 'Lead Full Stack Software Engineer',
	institution: 'Committee for Children',
	institutionUrl: 'https://www.cfchildren.org',
	location: 'Seattle, WA',
	start: 'Jan 2018',
	end: 'Aug 2018',
	description: [
		'Lead replacement of a legacy monolithic DNN platform over to using React and .NET Core',
		'Migrated user authentication to the IdentityServer4 OpenID identity provider',
		'Incrementally rewrote a series of untested stored procedures into a modern C# WebAPI',
	],
}

export const TrovFullStack: Experience = {
	title: 'Full Stack Software Engineer',
	institution: 'Trov',
	institutionUrl: 'https://www.trov.com/',
	location: 'Remote',
	start: 'Jul 2013',
	end: 'Dec 2017',
	description: [
		'Remote software development team where developers write unit and integration tests',
		'Constructed an on demand insurance platform for consumer items with C# and SQL',
		'Developed an app for managing claims and insuring items with React and Angular.js',
		'Built a business intelligence system for sending information to our partners using Python',
	],
}

export const UniversityOfWashingtonResearcher: Experience = {
	title: 'Application Researcher',
	institution: 'University of Washington',
	institutionUrl: 'https://www.washington.edu/',
	location: 'Seattle, WA',
	start: 'Jan 2013',
	end: 'Nov 2013',
	description: [
		'Lead developer for a JavaScript library which abstracted cloud drive APIs like Dropbox and Google Drive',
		'Taught staff and students to use and contribute to the library',
	],
}

export const ETradeSoftwareEngineer: Experience = {
	title: 'Software Engineer Intern',
	institution: 'E*Trade',
	institutionUrl: 'https://etrade.com',
	location: 'Seattle, WA',
	start: 'Sept 2012',
	end: 'May 2013',
	description: [
		'Developed Java stock trading apps with an international team',
		'Worked on features focused on high-frequency trading and options',
	],
}

export const UniversityOfWashingtonInstructor: Experience = {
	title: 'Web Instructor and Engineer',
	institution: 'University of Washington',
	institutionUrl: 'https://www.washington.edu',
	location: 'Seattle, WA',
	start: 'Jan 2012',
	end: 'Jun 2013',
	description: [
		'Taught modern web development standards to UW staff and students',
		'Developed Python Django applications to manage courses and support tickets',
	],
}

export const RakutenSoftwareEngineer: Experience = {
	title: 'Software Engineer Intern',
	institution: 'Rakuten',
	institutionUrl: 'https://www.rakuten.com/',
	location: 'Seattle, WA',
	start: 'Apr 2012',
	end: 'Nov 2012',
	description: [
		'Scraped and normalized product information using Python',
		'Worked with Overstock, Amazon, and Walmart APIs to gather product information and update listings',
	],
}

export const SmiteWorksSoftwareEngineer: Experience = {
	title: 'Software Engineer Intern',
	institution: 'SmiteWorks',
	institutionUrl: 'https://www.fantasygrounds.com',
	location: 'Bellevue, WA',
	start: 'Apr 2011',
	end: 'Nov 2011',
	description: [
		'Worked on the FantasyGrounds chat feature using C',
		'Lead the development of a C app to import character data from competitors apps',
		'Worked with the Steam gaming app store to publish updates and respond to customer feedback',
	],
}

export default [
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
