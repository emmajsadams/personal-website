// TODO: figure out how to import globals.css with tailwind
// TODO: Change name -> title in blog posts to avoid duplication
export default {
	typescript: true,
	ignore: ['**/blog/**', 'LICENSE.md'],
	files: '**/*.{md,mdx}',
	port: 3001,
	dest: '/public/docz',
	base: '/docz',
	plugins: [`gatsby-plugin-postcss`],
}
