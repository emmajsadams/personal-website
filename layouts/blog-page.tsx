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
				<meta name="twitter:site" content="@EmmaJCline" />
				<meta name="twitter:title" content={frontMatter.name} />
				<meta name="twitter:description" content={frontMatter.description} />
				<meta
					name="twitter:image"
					content="https://emma.cline.engineer/files/cherry-blossoms.png"
				/>
			</Head>
			<div className="content">
				<Header showResume={true} showBlog={true} showPDFResume={false} />
				<h1>{frontMatter.name}</h1>
				<h2>{frontMatter.date}</h2>
				<p>
					Share on:{' '}
					<a
						href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
							frontMatter.name + ' ' + url,
						)}`}
						target="_blank"
					>
						Twitter
					</a>
				</p>
				<br />
				{children}
			</div>
		</MDXProvider>
	)
}
