import Head from 'next/head'
import React, { ReactElement } from 'react'
import Experience from '../components/Experience'
import Header from '../components/Header'
import School from '../components/School'
import EXPERIENCES from '../config/experiences'
import SCHOOLS from '../config/schools'

export default function Resume(): ReactElement {
	return (
		<div className="content">
			<Head>
				<title>Emma Cline Résumé</title>
			</Head>

			<Header showBlog={true} showResume={false} />

			<h1>Education</h1>
			{SCHOOLS.map((school) => (
				<School key={school.institution + school.degree} school={school} />
			))}
			<hr />

			<h1>Experience</h1>
			{EXPERIENCES.map((experience) => (
				<Experience
					key={experience.title + experience.institution}
					experience={experience}
				/>
			))}
			<hr />

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
