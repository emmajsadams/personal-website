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

// TODO: Can I use one flex column to center all of this??
// At the very least use a helper class to avoid duplicating styles
// TODO: Consider adding phone since it is in pdf resume? What about spam?
// TODO: add link to pdf resume
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
						<a href={`mailto:${EMAIL}`}>Email</a>&nbsp;
					</li>
					<li>
						<a href={`https://${LINKEDIN}`}>LinkedIn</a>
					</li>
					<li>
						<a href={`https://${GITLAB}`}>GitLab</a>
					</li>
					<li>
						<a href={`https://${TWITTER}`}>Twitter</a>
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
					Happily transgender 🏳️‍🌈 (she/her ♀️) sociable 🤗 senior software
					engineer 👩🏻‍💻
				</p>
			</div>
			<div className="flex justify-center content-center text-center">
				<p>
					Currently looking for remote Senior Software Engineer and Application
					Researcher positions
				</p>
			</div>
			{!showPDFResume ? (
				<></>
			) : (
				<div className="flex justify-center content-center text-center">
					<p>
						<a href="/files/EmmaJCline-resume.pdf">
							Download a PDF version of this resume
						</a>
					</p>
				</div>
			)}
			<hr />
		</>
	)
}
