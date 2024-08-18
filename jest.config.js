const nextJest = require('next/jest');

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['app/**/*.{ts,tsx}'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
