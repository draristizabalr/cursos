import type {Config} from 'jest';

const config: Config = {
  rootDir: './',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^(\.{1,2}/.*)\.js$': ['ts-jest', { useESM: true, }],
  },
};

export default config;