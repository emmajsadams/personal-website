module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	extends: [
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:react/recommended',
		'plugin:markdown/recommended',
		'plugin:jsx-a11y/strict',
	],
	rules: {
		'import/no-unresolved': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: '*.mdx',
			extends: 'plugin:mdx/recommended',
		},
	],
}
