module.exports = {
	hooks: {
		'pre-push': 'yarn run lint && yarn run latex',
	},
}
