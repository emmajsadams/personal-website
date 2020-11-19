// TODO: figure out if I need postcss-normalize? I think tailwind does this
module.exports = {
	plugins: [
		'tailwindcss',
		'postcss-flexbugs-fixes',
		[
			'postcss-preset-env',
			{
				autoprefixer: {
					flexbox: 'no-2009',
				},
				stage: 3,
				features: {
					'custom-properties': false,
				},
			},
		],
		'autoprefixer',
	],
}
