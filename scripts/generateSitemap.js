const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

;(async () => {
	const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

	const pages = await globby([
		'pages/**/*{.tsx,.mdx}', // Include all pages and blog posts
		'public/**/*', // Include all static files
		'!pages/_*.tsx', // Ignore Next.js specific files (e.g., _app.js) and API routes.
		'!pages/api', // Ignore api routes
	])

	const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
							.map((page) => {
								const route = page
									// Remove file system routing paths
									.replace('pages', '')
									.replace('public', '')

									// Remove file extensions
									.replace('.tsx', '')
									.replace('.mdx', '')

									// Remove index page name since indexes are represented by /
									.replace('/index', '')

								// 404 is a special next.js route that is rendered for an invalid url. Not a page to crawl
								if (route === '/404') {
									return ''
								}

								return `
                        <url>
                            <loc>${`https://emma.adams.engineer${route}`}</loc>
                        </url>
                    `
							})
							.join('')}
        </urlset>
    `

	const formatted = prettier.format(sitemap, {
		...prettierConfig,
		parser: 'html',
	})

	fs.writeFileSync('public/sitemap.xml', formatted)
})()
