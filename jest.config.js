module.exports = {
	// Jest transformations -- this adds support for TypeScript
	// using ts-jest
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},

	// Test spec file resolution pattern
	// Matches parent folder `__tests__` and filename
	// should contain `test` or `spec`.
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

	// Module file extensions for importing
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

	moduleNameMapper: {
		'\\.css$': '<rootDir>/__mocks__/styleMock.js',
	},

	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.test.json',
		},
	},

	collectCoverageFrom: ['components/**/*.{ts,tsx}'],
}
