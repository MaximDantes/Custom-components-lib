/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
        '\\.scss$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
}
