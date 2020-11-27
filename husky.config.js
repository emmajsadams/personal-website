module.exports = {
	hooks: {
		'pre-push': 'yarn run lint && sh ./scripts/check-latex.sh',
	},
}
