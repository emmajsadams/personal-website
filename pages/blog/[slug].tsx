import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import { ReactElement } from 'react'
import Header from '../../components/Header'
import Facebook from '../../components/icons/Facebook'
import LinkedIn from '../../components/icons/LinkedIn'
import Mail from '../../components/icons/Mail'
import Reddit from '../../components/icons/Reddit'
import Twitter from '../../components/icons/Twitter'
import BLOG_POSTS from '../../config/blogs'
import { Blog } from '../../config/blogs/parse'
import { NAME } from '../../config/personalDetails'

interface BlogPageProps {
	mdxSource: any
	blog: Blog
}

// TODO: look into color highlighting for codeblocks
export default function Page({ mdxSource, blog }: BlogPageProps): ReactElement {
	const url = `${URL}/blog/${blog.matter.slug}`

	return (
		<>
			<Head>
				<title>
					{NAME} - {blog.matter.name}
				</title>
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content={url} />
				<meta name="twitter:title" content={blog.matter.name} />
				<meta name="twitter:description" content={blog.matter.description} />
				<meta
					name="twitter:image"
					content={`${URL}/files/cherry-blossoms.png`}
				/>
				<meta property="og:title" content={blog.matter.name} />
				<meta property="og:description" content={blog.matter.description} />
				<meta
					property="og:image"
					content={`${URL}/files/cherry-blossoms.png`}
				/>
				<meta property="og:url" content={url} />
			</Head>
			<main className="content">
				<Header />
				<h1>{blog.matter.name}</h1>
				<h2>{blog.matter.date}</h2>
				<br />
				<div style={{ display: 'flex' }}>
					<Twitter
						href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
							blog.matter.name,
						)}&url=${encodeURIComponent(url)}`}
						label="Share this blog post on Twitter"
					/>
					<Facebook
						href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(
							url,
						)}&t=${encodeURIComponent(blog.matter.name)}`}
						label="Share this blog post on Facebook"
					/>
					<Reddit
						href={`https://reddit.com/submit?url=${encodeURIComponent(
							url,
						)}&title=${encodeURIComponent(blog.matter.name)}`}
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
							blog.matter.name,
						)}&body=${encodeURIComponent(url)}`}
						label="Share this blog post via Email"
					/>
				</div>
				<br />
				<MDXRemote {...mdxSource} />
			</main>
		</>
	)
}

export async function getStaticProps({ params }) {
	const { slug } = params

	let blog: Blog = null
	for (const potentialBlog of BLOG_POSTS) {
		if (slug === potentialBlog.matter.slug) {
			blog = potentialBlog
		}
	}

	const mdxSource = await serialize(blog.body)

	return {
		props: {
			blog,
			mdxSource,
		},
	}
}

export async function getStaticPaths() {
	const paths = []
	for (const blog of BLOG_POSTS) {
		paths.push('/blog/' + blog.matter.slug)
	}

	return {
		paths,
		fallback: false,
	}
}
