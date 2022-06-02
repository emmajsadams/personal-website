import Link from 'next/link'
import React, { ReactElement } from 'react'
import {
	EMAIL,
	GITHUB,
	LINKEDIN,
	NAME,
	PDF_RESUME_NAME,
	PRONOUNS,
	TITLE,
	TWITTER,
} from '../config/personalDetails'
import utilStyles from '../styles/utils.module.css'
import Blog from './Blog'
import Github from './icons/Github'
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
				<Github href={`https://${GITHUB}`} label={`GitHub for ${NAME}`} />
				<LinkedIn href={`https://${LINKEDIN}`} label={`LinkedIn for ${NAME}`} />
				<Twitter href={`https://${TWITTER}`} label={`Twitter for ${NAME}`} />
				<Mail href={`mailto:${EMAIL}`} label={`Email for ${NAME}`} />
				<PDF
					href={`/files/${PDF_RESUME_NAME}.pdf`}
					label={`PDF Résumé for ${NAME}`}
				/>
				<Blog />
			</div>
			<div className={utilStyles.center}>
				<p>{TITLE} 👩‍💻</p>
			</div>
			<div className={utilStyles.center}>
				<p>
					Trans Woman ({PRONOUNS}){' '}
					<span role="img" aria-label="Transgender Flag">
						♀️🏳️‍⚧️
					</span>{' '}
				</p>
			</div>
			<hr />
		</nav>
	)
}
