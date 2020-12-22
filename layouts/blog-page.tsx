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
	const url = `https://emma.cline.engineer/${frontMatter.__resourcePath.replace(
		'.mdx',
		'',
	)}`

	return (
		<MDXProvider components={components}>
			<Head>
				<title>Emma Cline - {frontMatter.name}</title>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content={url} />
				<meta name="twitter:title" content={frontMatter.name} />
				<meta name="twitter:description" content={frontMatter.description} />
				<meta
					name="twitter:image"
					content="https://emma.cline.engineer/files/cherry-blossoms.png"
				/>
				<meta property="og:title" content={frontMatter.name} />
				<meta property="og:description" content={frontMatter.description} />
				<meta
					property="og:image"
					content="https://emma.cline.engineer/files/cherry-blossoms.png"
				/>
				<meta property="og:url" content={url} />
			</Head>
			<div className="content">
				<Header />
				<h1>{frontMatter.name}</h1>
				<h2>{frontMatter.date}</h2>
				<br />
				<div style={{ display: 'flex' }}>
					<Twitter
						href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
							frontMatter.name,
						)}&url=${encodeURIComponent(url)}`}
					/>
					<Facebook
						href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
							url,
						)}&t=${encodeURIComponent(frontMatter.name)}`}
					/>
					<Reddit
						href={`https://reddit.com/submit?url=${encodeURIComponent(
							url,
						)}&title=${encodeURIComponent(frontMatter.name)}`}
					/>
					<LinkedIn
						href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
							url,
						)}`}
					/>
					<Mail
						href={`mailto:?subject=${encodeURIComponent(
							frontMatter.name,
						)}&body=${encodeURIComponent(url)}`}
					/>
				</div>
				<br />
				{children}
			</div>
		</MDXProvider>
	)
}
