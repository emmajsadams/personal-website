const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
	layoutPath: 'layouts',
	defaultLayout: true,
	fileExtensions: ['mdx'],
	remarkPlugins: [],
	rehypePlugins: [],
	usesSrc: false,
	extendFrontMatter: {
		process: (mdxContent, frontMatter) => {},
		phase: 'prebuild|loader|both',
	},
	reExportDataFetching: false,
})({
	webpack: (config, { isServer }) => {
    if (isServer) {
			require('./scripts/generateSitemap');
			require('./scripts/generateFeeds');
    }

    return config;
	},
  reactStrictMode: true,
})
