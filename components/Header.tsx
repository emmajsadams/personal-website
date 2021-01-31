import Link from 'next/link'
import React, { ReactElement } from 'react'
import {
	EMAIL,
	GITLAB,
	LINKEDIN,
	NAME,
	TWITTER,
} from '../config/personalDetails'
import utilStyles from '../styles/utils.module.css'
import Blog from './icons/Blog'
import Gitlab from './icons/Gitlab'
import LinkedIn from './icons/LinkedIn'
import Mail from './icons/Mail'
import PDF from './icons/PDF'
import Twitter from './icons/Twitter'

export default function Header(): ReactElement {
	return (
		<nav>
			<div className={utilStyles.center}>
				<h1>
					<Link href="/">{NAME}</Link>
				</h1>
			</div>
			<div className={utilStyles.center}>
				<Gitlab href={`https://${GITLAB}`} label="GitLab for Emma Jane Cline" />
				<LinkedIn
					href={`https://${LINKEDIN}`}
					label="LinkedIn for Emma Jane Cline"
				/>
				<Twitter
					href={`https://${TWITTER}`}
					label="Twitter for Emma Jane Cline"
				/>
				<Mail href={`mailto:${EMAIL}`} label="Email for Emma Jane Cline" />
				<PDF
					href="/files/EmmaJCline-resume.pdf"
					label="PDF Résumé for Emma Jane Cline"
				/>
				<Blog />
			</div>
			<div className={utilStyles.center}>
				<p>Senior Software Engineer and Application Researcher.</p>
			</div>
			<div className={utilStyles.center}>
				<p>
					Happily transgender{' '}
					<span role="img" aria-label="Transgender Flag">
						🏳️‍🌈
					</span>{' '}
					(she/her{' '}
					<span role="img" aria-label="she/her pronouns">
						♀️
					</span>
					)
				</p>
			</div>
			<hr />
		</nav>
	)
}
