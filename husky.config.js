module.exports = {
	hooks: {
		'pre-commit': 'yarn run format',
		'pre-push': 'yarn run build',
	},
}
