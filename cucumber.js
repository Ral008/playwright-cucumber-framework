module.exports = {
  default: {
    require: [
      'src/steps/**/*.ts',
      'src/core/hooks/**/*.ts',
      'src/core/fixtures/**/*.ts'
    ],

    paths: ['src/features/**/*.feature'],

    requireModule: ['ts-node/register'],

    format: [
      'progress',
      'allure-cucumberjs/reporter'
    ],

    formatOptions: {
      resultsDir: 'reports/allure-results'
    },

    parallel: 0,
    timeout: 60000
  }
};
