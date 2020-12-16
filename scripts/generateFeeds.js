const { Feed } = require('feed')
const fs = require('fs')
const fm = require('front-matter')
const globby = require('globby')

// TODO: Fix blog dates so that they are a specific JS date parseable time with timezone - https://gitlab.com/EmmaJCline/personal-website/-/issues/48
;(async () => {
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

	const blogPosts = await globby(['pages/blog/*.mdx'])

	for (const blogPost of blogPosts) {
		const frontMatter = fm(fs.readFileSync(blogPost, 'utf8'))
		const url = `https://emma.cline.engineer/${blogPost
			.replace('.mdx', '')
			.replace('pages/', '')}`
		feed.addItem({
			title: frontMatter.attributes.name,
			id: url,
			link: url,
			description: frontMatter.attributes.description,
			date: new Date(frontMatter.attributes.date),
		})
	}

	feed.addCategory('Technology')
	feed.addCategory('Software Engineering')
	feed.addCategory('Application Research')

	fs.writeFileSync('public/rss.xml', feed.rss2())
	fs.writeFileSync('public/feed.json', feed.json1())
	fs.writeFileSync('public/atom.xml', feed.atom1())
})()
