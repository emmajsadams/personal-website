import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import CodeBlock from '../components/CodeBlock'
import Header from '../components/Header'

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
	const router = useRouter()

	// TODO: remove this once fallback is turned off
	if (router.isFallback) {
		return <p>Loading...</p>
	}

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
				<meta property="og:title" content={frontMatter.name}></meta>
				<meta
					property="og:description"
					content={frontMatter.description}
				></meta>
				<meta
					property="og:image"
					content="https://emma.cline.engineer/files/cherry-blossoms.png"
				></meta>
				<meta property="og:url" content={url}></meta>
			</Head>
			<div className="content">
				<Header showResume={true} showBlog={true} showPDFResume={false} />
				<h1>{frontMatter.name}</h1>
				<h2>{frontMatter.date}</h2>
				<p>
					Share on:{' '}
					<a
						href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
							frontMatter.name,
						)}&url=${encodeURIComponent(url)}`}
						target="_blank"
						rel="noreferrer"
					>
						Twitter
					</a>
					,{' '}
					<a
						href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
							url,
						)}&t=${encodeURIComponent(frontMatter.name)}`}
						target="_blank"
						rel="noreferrer"
					>
						Facebook
					</a>
				</p>
				<br />
				{children}
			</div>
		</MDXProvider>
	)
}
