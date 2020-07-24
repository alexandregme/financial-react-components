const EXCLUDED_FOLDERS = [
    '<rootDir>/.idea/',
    '<rootDir>/coverage/',
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
];

const COVERAGE = [
    '<rootDir>/**/*.js',
    '!<rootDir>/**/index.js',
    '!<rootDir>/jest.config.js',
];

module.exports = {
    setupFiles: ['<rootDir>/jest.setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        '^components(.*)$': '<rootDir>/components/$1',
        '^.+\\.(css|less|scss)$': 'babel-jest',
    },
    collectCoverageFrom: COVERAGE,
    coveragePathIgnorePatterns: EXCLUDED_FOLDERS,
    testPathIgnorePatterns: EXCLUDED_FOLDERS,
    modulePathIgnorePatterns: EXCLUDED_FOLDERS,
};
