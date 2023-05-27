const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require('fs');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.

  on('after:run', async (results) => {
    if (results) {
      await preprocessor.afterRunHandler(config);
      fs.writeFileSync(
        'cypress/reports/runInfo.json',
        JSON.stringify(
          {
            browserName: results.browserName,
            browserVersion: results.browserVersion,
            osName: results.osName,
            osVersion: results.osVersion,
            nodeVersion: results.config.resolvedNodeVersion,
            cypressVersion: results.cypressVersion,
            startedTestsAt: results.startedTestsAt,
            endedTestsAt: results.endedTestsAt,
          },
          null,
          '\t',
        ),
      );
    }
  });
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "/",
    specPattern: "**/*.feature",
    responseTimeout: 5000,
    supportFile: false,
    video: false,
    setupNodeEvents,
    experimentalInteractiveRunEvents: true,
  },
});