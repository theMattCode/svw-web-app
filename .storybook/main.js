const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {},

  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "#": path.resolve(__dirname, "../"),
    };
    return config;
  },

  staticDirs: ["../public"],

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
