import Head from 'next/head'
import React, { ReactElement } from 'react'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Project from '../components/Project'
import School from '../components/School'
import EXPERIENCES from '../config/experiences'
import PROJECTS from '../config/projects'
import SCHOOLS from '../config/schools'

// TODO: consider a professional affilations section
export default function Resume(): ReactElement {
	return (
		<div className="content">
			<Head>
				<title>Emma Cline Résumé</title>
			</Head>

			<Header showBlog={true} showResume={false} showPDFResume={true} />

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
			{PROJECTS.map((project) => (
				<Project key={project.title} project={project} />
			))}
			<hr />

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
