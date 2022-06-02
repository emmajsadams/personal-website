import Head from 'next/head'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Header from '../../components/Header'
import BLOG_POSTS from '../../config/blogs'
import { NAME } from '../../config/personalDetails'

// TODO: consider sorting posts by date, currently just uses order of blogs array
export default function Blogs({ blogPosts }): ReactElement {
	return (
		<>
			<Head>
				<title>{NAME}s&lsquo; Blog</title>
			</Head>
			<main className="content">
				<Header />
				<ul>
					{blogPosts.map((post) => (
						<li key={post.matter.slug}>
							<Link href={`blog/${post.matter.slug}`}>{post.matter.name}</Link>
							<br />
							{post.matter.description}
						</li>
					))}
				</ul>
			</main>
		</>
	)
}

export async function getStaticProps() {
	return {
		props: {
			blogPosts: BLOG_POSTS,
		},
	}
}
