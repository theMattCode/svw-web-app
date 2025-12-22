const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
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
