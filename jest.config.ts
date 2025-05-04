import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  // Optional: path aliases, coverage, etc.
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "jest-report", outputName: "junit.xml" }]
  ],
};

export default config;
