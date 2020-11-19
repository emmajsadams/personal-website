import Head from 'next/head'
import React, { ReactElement } from 'react'
import Education from '../components/Education'
import Header from '../components/Header'

// TODO: refactor parts of this into components (project, experience, etc..) similar to latex resume
// TODO: update content from latex resume
export default function Resume(): ReactElement {
	return (
		<div className="content">
			<Head>
				<title>Emma Cline Résumé</title>
			</Head>
			<Header showBlog={true} showResume={false} />
			<h1>Education</h1>
			<Education
				institution="University of Washington"
				degree="Bachelor of Science in Informatics, Minor in Mathematics"
				startYear={2011}
				endYear={2013}
			/>
			<Education
				institution="DigiPen Institute of Technology"
				degree="Towards overall degree at University of Washington"
				startYear={2009}
				endYear={2011}
			/>
			<Education
				institution="Bellevue College"
				degree="Towards overall degree at University of Washington"
				startYear={2008}
				endYear={2011}
			/>
			<h1>Experience</h1>
			<h3>Freelance Software Engineer, Remote &mdash; Aug 2020 - Present</h3>
			<ul>
				<li>
					A variety of contract positions focused on full stack web development
				</li>
			</ul>
			<h3>
				Lead Senior Software Engineer II,&nbsp;
				<a href="https://www.humblebundle.com">Humble Bundle</a> &mdash; Remote
				&mdash; Jul 2018 - Jul 2020
			</h3>
			<ul>
				<li>
					Promoted from Senior Software Engineer to Lead Senior Software
					Engineer II over the course of my employment.
				</li>
				<li>Lead the platform team focused on site reliability engineering.</li>
				<li>
					Lead the internationalization project for an 8-year-old application
					with minimal prior internationalization efforts
				</li>
				<li>
					Worked with product to define a plan to optimize the user funnel for
					our monthly product
				</li>
				<li>
					Integrated an OAuth login system for Facebook and Google into our
					existing user system
				</li>
				<li>
					Planned a project to migrate all sessions to the newly required email
					or TOTP two-factor system
				</li>
				<li>
					Helped define standards for representing DateTimes, Money, and
					Percents in Python and JavaScript
				</li>
			</ul>
			<h3>
				Lead Full Stack Software Engineer,&nbsp;
				<a href="https://www.cfchildren.org">Committee for Children</a>
				&mdash; Seattle &mdash; Jan 2018 - Aug 2018
			</h3>
			<ul>
				<li>
					Lead replacement of a legacy monolithic DNN platform over to using
					React and .NET Core
				</li>
				<li>
					Migrated user authentication to an OpenID identity
					provider(IdentityServer4)
				</li>
				<li>
					Incrementally rewrote a series of untested stored procedures into a
					modern C# WebAPI
				</li>
			</ul>
			<h3>
				Full Stack Software Engineer,&nbsp;
				<a href="https://www.trov.com/">Trov</a> &mdash; Remote &mdash; Jul 2013
				– Dec 2017
			</h3>
			<ul>
				<li>
					Remote software development team where developers write unit and
					integration tests
				</li>
				<li>
					Constructed an on demand insurance platform for consumer items with C#
					& SQL
				</li>
				<li>
					Developed an app for managing claims and insuring items with React and
					Angular.js
				</li>
				<li>
					Built a business intelligence system for sending information to our
					partners using Python
				</li>
			</ul>

			<h3>
				Assistant Researcher,&nbsp;
				<a href="https://www.washington.edu">University of Washington</a>{' '}
				&mdash; Jan 2013 – Nov 2013
			</h3>
			<ul>
				<li>
					Lead developer for a JavaScript library which abstracted cloud drive
					APIs like Dropbox and Google Drive
				</li>
				<li>Taught staff and students to use and contribute to the library</li>
			</ul>

			<h3>
				Software Engineer Intern,&nbsp;
				<a href="https://us.etrade.com/home">E*TRADE</a> &mdash; Sep 2012 – May
				2013
			</h3>
			<ul>
				<li>
					Developed Java and Ruby on Rails stock trading apps with an
					international team
				</li>
				<li>
					Worked on features focused on high-frequency trading and options
				</li>
			</ul>
			<h3>
				Web Instructor and Engineer,&nbsp;
				<a href="https://www.washington.edu">University of Washington</a>{' '}
				&mdash; Jan 2012 – Jun 2013
			</h3>
			<ul>
				<li>Taught modern web development standards to staff and students</li>
				<li>
					Developed internal applications to manage courses and support tickets
				</li>
			</ul>

			<h3>
				Software Engineer Intern,&nbsp;
				<a href="https://www.rakuten.com/">Rakuten</a> &mdash; Apr 2012 – Nov
				2012
			</h3>
			<ul>
				<li>Scraped and normalized product information using Ruby and Java</li>
			</ul>

			<h3>
				Software Engineer Intern,&nbsp;
				<a href="https://www.fantasygrounds.com">SmiteWorks</a> &mdash; Apr 2011
				– Nov 2011
			</h3>
			<ul>
				<li>
					Lead the development of a C app to import character data from
					competitors apps
				</li>
				<li>
					Implemented rich text chat features for the Fantasy Grounds game
					written in C
				</li>
			</ul>

			<h2>Projects</h2>
			<h3>
				<a href="https://gitlab.com/EmmaJCline/discord-mgmt-bot">
					Discord Management Bot
				</a>
			</h3>
			<ul>
				<li>
					Discord bots written in TypeScript for Node.JS to manage
					administrative functions of a feature
				</li>
				<li>
					Scales to any size of discord server and can be deployed via Docker on
					any cloud platform
				</li>
				<li>
					Bots are broken up by function to enable isolated permissions instead
					of the monolithic administrative function
				</li>
				<li>
					Configured with JSON and allows for separate testing and production
					discord
				</li>
				<li>
					Code is broken up into highly reusable modules that can be pulled into
					any TypeScript project for customization
				</li>
			</ul>

			<h2>Techincal Skills</h2>
			<p>
				<span className="font-bold">Languages:</span> TypeScript, JavaScript,
				C#, Python, HTML5/CSS3, Bash, SQL, C
			</p>
			<p>
				<span className="font-bold">Frameworks:</span> Next.JS, React, Vue.js,
				Flask, Starlette, ASP.NET MVC
			</p>
			<p>
				<span className="font-bold">Libraries:</span> TailwindCSS, PostCSS,
				pandas, NumPy, TensorFlow, GPT-2
			</p>
			<p>
				<span className="font-bold">Developer Tools:</span> VSCode, Visual
				Studio Git, ESLint, Prettier, Docker, Kubernetes, Chef, Yarn, npm,
				cmake, gcc
			</p>
			<p>
				<span className="font-bold">Databases:</span> PostgreSQL, MSSQL, MySQL,
				Elasticsearch
			</p>
			<p>
				<span className="font-bold">Databases:</span> PostgreSQL, MSSQL, MySQL,
				Elasticsearch
			</p>
		</div>
	)
}
