export default {
  // Use separate projects for client (jsdom) and server (node) tests
  projects: [
    {
      displayName: 'client',
      testMatch: ['<rootDir>/client/**/*.{test,spec}.{ts,tsx}'],
      testEnvironment: 'jsdom',
      preset: 'ts-jest/presets/default-esm',
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/client/src/$1',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      },
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            useESM: true,
            tsconfig: {
              module: 'ESNext',
              jsx: 'react-jsx',
            },
          },
        ],
      },
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
      setupFilesAfterEnv: ['<rootDir>/client/src/setupTests.ts'],
    },
    {
      displayName: 'server',
      testMatch: ['<rootDir>/server/**/*.{test,spec}.{ts,tsx}'],
      testEnvironment: 'node',
      preset: 'ts-jest/presets/default-esm',
      moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
      },
      transform: {
        '^.+\\.tsx?$': [
          'ts-jest',
          {
            useESM: true,
            tsconfig: {
              module: 'ESNext',
            },
          },
        ],
      },
      extensionsToTreatAsEsm: ['.ts', '.tsx'],
    },
  ],
  collectCoverageFrom: [
    'server/**/*.{ts,tsx}',
    'client/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!client/src/main.tsx',
    '!client/src/App.tsx',
  ],
};
