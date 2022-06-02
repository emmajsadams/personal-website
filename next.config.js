
module.exports = {
	webpack: (config, { isServer }) => {
    if (isServer) {
			require('./scripts/generateSitemap');
			require('./scripts/generateFeeds');
    }

    return config;
	},
  reactStrictMode: true,
}
