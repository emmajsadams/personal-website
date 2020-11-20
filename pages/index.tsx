import Head from 'next/head'
import React, { ReactElement } from 'react'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Project from '../components/Project'
import School from '../components/School'
import Technology from '../components/Technology'
import EXPERIENCES from '../config/experiences'
import PROJECTS from '../config/projects'
import SCHOOLS from '../config/schools'
import TECHNOLOGIES from '../config/technologies'

// TODO: consider a professional affilations section
// TODO: Create helper function to generate each section using generics
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
			{TECHNOLOGIES.map((technology) => (
				<Technology key={technology.category} technology={technology} />
			))}
		</div>
	)
}
