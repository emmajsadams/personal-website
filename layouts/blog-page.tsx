import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import Image from 'next/image'
import React, { ReactElement } from 'react'
import CodeBlock from '../components/CodeBlock'
import Header from '../components/Header'
import Facebook from '../components/icons/Facebook'
import LinkedIn from '../components/icons/LinkedIn'
import Mail from '../components/icons/Mail'
import Reddit from '../components/icons/Reddit'
import Twitter from '../components/icons/Twitter'
import { NAME, URL } from '../config/personalDetails'

const components = {
	code: CodeBlock,
	Image: Image,
}

interface BlogPageProps {
	children: ReactElement
	frontMatter: FrontMatter
}

export default function BlogPage({
	children,
	frontMatter,
}: BlogPageProps): ReactElement {
	const url = `${URL}/${frontMatter.__resourcePath.replace('.mdx', '')}`

	return (
		<MDXProvider components={components}>
			<Head>
				<title>
					{NAME} - {frontMatter.name}
				</title>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content={url} />
				<meta name="twitter:title" content={frontMatter.name} />
				<meta name="twitter:description" content={frontMatter.description} />
				<meta
					name="twitter:image"
					content={`${URL}/files/cherry-blossoms.png`}
				/>
				<meta property="og:title" content={frontMatter.name} />
				<meta property="og:description" content={frontMatter.description} />
				<meta
					property="og:image"
					content={`${URL}/files/cherry-blossoms.png`}
				/>
				<meta property="og:url" content={url} />
			</Head>
			<main className="content">
				<Header />
				<h1>{frontMatter.name}</h1>
				<h2>{frontMatter.date}</h2>
				<br />
				<div style={{ display: 'flex' }}>
					<Twitter
						href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
							frontMatter.name,
						)}&url=${encodeURIComponent(url)}`}
						label="Share this blog post on Twitter"
					/>
					<Facebook
						href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
							url,
						)}&t=${encodeURIComponent(frontMatter.name)}`}
						label="Share this blog post on Facebook"
					/>
					<Reddit
						href={`https://reddit.com/submit?url=${encodeURIComponent(
							url,
						)}&title=${encodeURIComponent(frontMatter.name)}`}
						label="Share this blog post on Reddit"
					/>
					<LinkedIn
						href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
							url,
						)}`}
						label="Share this blog post on LinkedIn"
					/>
					<Mail
						href={`mailto:?subject=${encodeURIComponent(
							frontMatter.name,
						)}&body=${encodeURIComponent(url)}`}
						label="Share this blog post via Email"
					/>
				</div>
				<br />
				{children}
			</main>
		</MDXProvider>
	)
}
