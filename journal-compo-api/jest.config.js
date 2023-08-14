module.exports = {
  setupFilesAfterEnv: ['<rootDir>/router-mock-setup.js'],
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
  transform: {
    '^.+\\js$': 'babel-jest',
  }
}
