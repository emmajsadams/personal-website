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

	return (
		<MDXProvider components={components}>
			<Head>
				<title>Emma Cline - {frontMatter.name}</title>
			</Head>
			<div className="content">
				<Header showResume={true} showBlog={true} showPDFResume={false} />
				<h1>{frontMatter.name}</h1>
				<h2>{frontMatter.date}</h2>
				{children}
			</div>
		</MDXProvider>
	)
}
