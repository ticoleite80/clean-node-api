module.exports = {
  roots: ['<rootDir>/specs'],
  collectCoverageFrom: ['<rootDir>/specs/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
