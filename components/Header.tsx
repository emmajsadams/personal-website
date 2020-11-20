import Link from 'next/link'
import React, { ReactElement } from 'react'
import styles from '../styles/Header.module.css'

interface HeaderProps {
	showBlog: boolean
	showResume: boolean
}

// TODO: Can I use one flex column to center all of this??
// At the very least use a helper class to avoid duplicating styles
// TODO: Consider adding phone since it is in pdf resume? What about spam?
// TODO: add link to pdf resume
export default function Header({
	showBlog,
	showResume,
}: HeaderProps): ReactElement {
	return (
		<>
			<div className="flex justify-center content-center text-center">
				<h1>Emma Cline</h1>
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
						<a href="mailto:emma@cline.engineer">Email</a>&nbsp;
					</li>
					<li>
						<a href="https://www.linkedin.com/in/EmmaJCline">LinkedIn</a>
					</li>
					<li>
						<a href="https://gitlab.com/EmmaJCline">GitLab</a>
					</li>
					<li>
						<a href="https://twitter.com/EmmaJCline">Twitter</a>
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
			<hr />
		</>
	)
}
