/** @type {import('jest').Config} */
export default {
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        '\\.(scss|sass|css)$': 'identity-obj-proxy',
        '^@root/(.*)$': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
    testEnvironment: 'jsdom',
    testRegex: ['test/.*\\.test\\.tsx?$'],
    transform: {
        '\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    verbose: true,
};
