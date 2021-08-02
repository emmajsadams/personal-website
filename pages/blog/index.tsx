import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Header from '../../components/Header'
import BLOG_POSTS from '../../config/blogs'
import { NAME } from '../../config/personalDetails'

export default function Blogs(): ReactElement {
	return (
		<>
			<Head>
				<title>{NAME}s&lsquo; Blog</title>
			</Head>
			<main className="content">
				<Header />
				<ul>
					{BLOG_POSTS.map((post) => (
						<li key={post.frontMatter.name}>
							<Link href={post.frontMatter.__resourcePath.replace('.mdx', '')}>
								{post.frontMatter.name}
							</Link>
							<br />
							{post.frontMatter.description}
						</li>
					))}
				</ul>
			</main>
		</>
	)
}
