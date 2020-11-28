import Link from 'next/link'
import React, { ReactElement } from 'react'
import {
	EMAIL,
	GITLAB,
	LINKEDIN,
	NAME,
	TWITTER,
} from '../config/personalDetails'
import styles from '../styles/Header.module.css'

interface HeaderProps {
	showBlog: boolean
	showResume: boolean
	showPDFResume: boolean
}

export default function Header({
	showBlog,
	showResume,
	showPDFResume,
}: HeaderProps): ReactElement {
	return (
		<>
			<div className="flex justify-center content-center text-center">
				<h1>{NAME}</h1>
			</div>
			<div className="flex justify-center content-center text-center">
				<ul className={`inline-flex space-x-4 ${styles['nav-links']}`}>
					{!showResume ? (
						<></>
					) : (
						<li>
							<Link href="/">Résumé</Link>
						</li>
					)}
					<li>
						<a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
							Email
						</a>
						&nbsp;
					</li>
					<li>
						<a href={`https://${LINKEDIN}`} target="_blank" rel="noreferrer">
							LinkedIn
						</a>
					</li>
					<li>
						<a href={`https://${GITLAB}`} target="_blank" rel="noreferrer">
							GitLab
						</a>
					</li>
					<li>
						<a href={`https://${TWITTER}`} target="_blank" rel="noreferrer">
							Twitter
						</a>
					</li>
					{!showBlog ? (
						<></>
					) : (
						<li>
							<Link href="/blog">Blog</Link>
						</li>
					)}
				</ul>
			</div>
			<div className="flex justify-center content-center text-center">
				<p>
					Currently looking for remote Senior Software Engineer and Application
					Researcher positions
				</p>
			</div>
			<div className="flex justify-center content-center text-center">
				<p>Happily transgender 🏳️‍🌈 (she/her ♀️)</p>
			</div>
			{!showPDFResume ? (
				<></>
			) : (
				<div className="flex justify-center content-center text-center">
					<p>
						<a
							href="/files/EmmaJCline-resume.pdf"
							target="_blank"
							rel="noreferrer"
						>
							Download a PDF version of this resume
						</a>
					</p>
				</div>
			)}
			<hr />
		</>
	)
}
