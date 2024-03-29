/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/$1',
        '\\.(css|scss)$': 'identity-obj-proxy',
        '\\.svg$': '<rootDir>/__mocks__/svg.ts',
    },
    setupFilesAfterEnv: ['./setup-tests.ts'],

    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ['<rootDir>'],
    testEnvironment: 'jsdom',
}
