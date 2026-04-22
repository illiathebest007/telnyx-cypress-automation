const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "1oj5xg",
  allowCypressEnv: false,

  e2e: {
      viewportHeight: 1080,
      viewportWidth: 1920,
      baseUrl: 'https://telnyx.com',
    setupNodeEvents(on, config) {
    
    },
  },
});
