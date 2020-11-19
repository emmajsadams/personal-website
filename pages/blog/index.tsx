import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Header from '../../components/Header'
// TODO: import glob these
import { frontMatter as astarData } from './astar-csharp.mdx'
import { frontMatter as dstructErrorData } from './dstruct-error-list-map-tree.mdx'
import { frontMatter as dstructPosterData } from './dstruct-poster.mdx'
import { frontMatter as dstructSetData } from './dstruct-set-multiset-stack.mdx'
import { frontMatter as dstructTablesData } from './dstruct-tables-queues.mdx'

const BLOG_POSTS = [
	astarData,
	dstructErrorData,
	dstructPosterData,
	dstructSetData,
	dstructTablesData,
]

// TODO: read mdx files in the blog folder rather than manually creating links
export default function Blogs(): ReactElement {
	return (
		<>
			<Head>
				<title>Emma Cline&lsquo;s Blog</title>
			</Head>
			<div className="content">
				<Header showBlog={false} showResume={true} />
				<ul>
					{BLOG_POSTS.map((post) => (
						<li key={post.title}>
							<Link href={post.__resourcePath.replace('.mdx', '')}>
								{post.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
