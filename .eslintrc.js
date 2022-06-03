module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',

		// TODO: Reenable all these
		// 'plugin:import/errors',
		// 'plugin:react/recommended',
		// 'plugin:markdown/recommended',
		// 'plugin:jsx-a11y/strict',
		// 'plugin:@next/next/recommended',
	],
	rules: {
		// TODO: Renenable all these
		// 'react/prop-types': 'off',
		// 'react/react-in-jsx-scope': 'error',
		// 'import/no-unresolved': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
