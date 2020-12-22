import Link from 'next/link'
import React, { ReactElement } from 'react'
import {
	EMAIL,
	GITLAB,
	LINKEDIN,
	NAME,
	TWITTER,
} from '../config/personalDetails'
import Blog from './icons/Blog'
import Gitlab from './icons/Gitlab'
import LinkedIn from './icons/LinkedIn'
import Mail from './icons/Mail'
import PDF from './icons/PDF'
import Twitter from './icons/Twitter'

export default function Header(): ReactElement {
	return (
		<>
			<div className="flex justify-center content-center text-center">
				<h1>
					<Link href="/">{NAME}</Link>
				</h1>
			</div>
			<div className="flex justify-center content-center text-center">
				<Gitlab href={`https://${GITLAB}`} />
				<LinkedIn href={`https://${LINKEDIN}`} />
				<Twitter href={`https://${TWITTER}`} />
				<Mail href={`mailto:${EMAIL}`} />
				<PDF href="/files/EmmaJCline-resume.pdf" />
				<Blog />
			</div>
			<div className="flex justify-center content-center text-center">
				<p>
					Currently looking for remote Senior Software Engineer or Application
					Researcher positions
				</p>
			</div>
			<div className="flex justify-center content-center text-center">
				<p>Happily transgender 🏳️‍🌈 (she/her ♀️)</p>
			</div>
			<hr />
		</>
	)
}
