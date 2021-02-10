module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  roots: [
    '<rootDir>/src/'
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!src/**/*.d.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};
