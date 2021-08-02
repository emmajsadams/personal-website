import Head from 'next/head'
import React, { ReactElement } from 'react'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Project from '../components/Project'
import School from '../components/School'
import Technology from '../components/Technology'
import EXPERIENCES from '../config/experiences'
import { DESCRIPTION, NAME, URL } from '../config/personalDetails'
import PROJECTS from '../config/projects'
import SCHOOLS from '../config/schools'
import TECHNOLOGIES from '../config/technologies'

export default function Resume(): ReactElement {
	const resumeTitle = `${NAME} Résumé`

	return (
		<main className="content">
			<Head>
				<title>{resumeTitle}</title>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content={URL} />
				<meta name="twitter:title" content={resumeTitle} />
				<meta name="twitter:description" content={DESCRIPTION} />
				<meta
					name="twitter:image"
					content={`${URL}/files/cherry-blossoms.png`}
				/>
				<meta property="og:title" content={resumeTitle} />
				<meta property="og:description" content={DESCRIPTION} />
				<meta
					property="og:image"
					content={`${URL}/files/cherry-blossoms.png`}
				/>
				<meta property="og:url" content={URL} />
			</Head>

			<Header />

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

			<h1>Projects</h1>
			{PROJECTS.map((project) => (
				<Project key={project.title} project={project} />
			))}
			<hr />

			<h1>Technical Skills</h1>
			{TECHNOLOGIES.map((technology) => (
				<Technology key={technology.category} technology={technology} />
			))}
		</main>
	)
}
