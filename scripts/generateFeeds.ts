import { Feed } from 'feed'
import fs from 'fs'
import BLOG_POSTS from '../config/blogs'

/*
TODO: Fix blog dates so that they are a specific JS date parseable time with timezone - https://gitlab.com/EmmaJCline/personal-website/-/issues/48
TODO: Figure out how to generate static html content from mdx - https://gitlab.com/EmmaJCline/personal-website/-/issues/29
		import mdx from '@mdx-js/mdx'
		import ReactDOMServer from 'react-dom/server'
		console.log(mdx.sync(post.default))
		content: ReactDOMServer.renderToStaticMarkup(post.default),
*/
export default async function generateFeeds(): Promise<void> {
	const feed = new Feed({
		title: "Emma Cline's Blog",
		description:
			'Blog feed for the Software Engineer and Application Researcher Emma Cline',
		id: 'https://emma.cline.engineer/blog',
		link: 'https://emma.cline.engineer/blog',
		language: 'en',
		image: 'https://emma.cline.engineer/android-chrome-192x192.png',
		favicon: 'https://emma.cline.engineer/favicon.ico',
		copyright: 'Copyright (c) 2020 Emma Cline',
		feedLinks: {
			rss: 'https://emma.cline.engineer/feed',
			json: 'https://emma.cline.engineer/json',
			atom: 'https://emma.cline.engineer/atom',
		},
		author: {
			name: 'Emma Cline',
			email: 'emma@cline.engineer',
			link: 'https://emma.cline.engineer/',
		},
	})

	BLOG_POSTS.forEach((post) => {
		const url = `https://emma.cline.engineer/${post.frontMatter.__resourcePath.replace(
			'.mdx',
			'',
		)}`
		feed.addItem({
			title: post.frontMatter.title,
			id: url,
			link: url,
			description: post.frontMatter.description,
			date: new Date(post.frontMatter.date), // TODO: confirm this creates the right date
		})
	})

	feed.addCategory('Technology')
	feed.addCategory('Software Engineering')
	feed.addCategory('Application Research')

	fs.writeFileSync('public/feed', feed.rss2())
	fs.writeFileSync('public/json', feed.json1())
	fs.writeFileSync('public/atom', feed.atom1())
}
