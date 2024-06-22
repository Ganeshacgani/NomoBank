exports.config = {
  runner: 'local',
  port: 4724,
  specs: ['./features/**/*.feature'],
  maxInstances: 1,
  capabilities: [{
    'appium:platformName': 'iOS',
    'appium:deviceName': 'iPhone 15',
    'appium:platformVersion': '17.5',
    'appium:app': '/Users/ganesh/Downloads/sample.app',
    'appium:automationName': 'XCUITest'
  }],
  before: async function () {
         const chai = await import('chai');
         global.expect = chai.expect;
     },
  logLevel: 'info',
  framework: 'cucumber',
  cucumberOpts: {
    require: ['./src/steps/**/*.js'],
    timeout: 1200000
  },
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
    }]
  ],
  services: ['appium'],
  appium: {
    command: 'appium'
  },
  before: function (capabilities, specs) {
    require('ts-node').register({
      transpileOnly: true,
      shortCircuit: true,
      compilerOptions: {
        module: 'commonjs'
      }
    });
  }
};
