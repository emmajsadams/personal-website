module.exports = {
	hooks: {
		'pre-push': 'npm run generate-latex && npm run check-latex',
	},
}
