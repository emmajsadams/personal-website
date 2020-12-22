import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Header from '../../components/Header'
import BLOG_POSTS from '../../config/blogs'

export default function Blogs(): ReactElement {
	return (
		<>
			<Head>
				<title>Emma Cline&lsquo;s Blog</title>
			</Head>
			<div className="content">
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
			</div>
		</>
	)
}
