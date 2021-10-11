module.exports = {
  rootDir: './',
  coverageReporters: ['cobertura', 'text', 'html', 'json'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.{ts.*}'],
  coverageThreshold: undefined,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['/node_modules/', '/src/components/Icons/*'],
  preset: 'react-native',
  setupFiles: [
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  transformIgnorePatterns: [
    "/node_modules/(?!native-base)/"
  ]
};
