const { Feed } = require('feed')
const fs = require('fs')
const fm = require('front-matter')
const globby = require('globby')

// TODO: consider some way of importing config/personalDetails into this file
// TODO: Fix blog dates so that they are a specific JS date parseable time with timezone - https://gitlab.com/emmajsadams/personal-website/-/issues/48
;(async () => {
	const feed = new Feed({
		title: "Emma Adams' Blog",
		description: 'Blog feed for the Software Engineer Emma Adams',
		id: 'https://emma.adams.engineer/blog',
		link: 'https://emma.adams.engineer/blog',
		language: 'en',
		image: 'https://emma.adams.engineer/android-chrome-192x192.png',
		favicon: 'https://emma.adams.engineer/favicon.ico',
		copyright: 'Copyright (c) 2021 Emma Adams',
		feedLinks: {
			rss: 'https://emma.adams.engineer/feed',
			json: 'https://emma.adams.engineer/json',
			atom: 'https://emma.adams.engineer/atom',
		},
		author: {
			name: 'Emma Adams',
			email: 'emma@adams.engineer',
			link: 'https://emma.adams.engineer/',
		},
	})

	const blogPosts = await globby(['pages/blog/*.mdx'])

	for (const blogPost of blogPosts) {
		const frontMatter = fm(fs.readFileSync(blogPost, 'utf8'))
		const url = `https://emma.adams.engineer/${blogPost
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
