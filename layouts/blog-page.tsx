import { MDXProvider } from '@mdx-js/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import CodeBlock from '../components/CodeBlock'
import Header from '../components/Header'

const components = {
	code: CodeBlock,
}

interface FrontMatter {
	title: string
	date: string
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
				<title>Emma Cline - {frontMatter.title}</title>
			</Head>
			<div className="content">
				<Header showResume={true} showBlog={true} />
				<h1>{frontMatter.title}</h1>
				<h2>{frontMatter.date}</h2>
				{children}
			</div>
		</MDXProvider>
	)
}
