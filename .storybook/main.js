const svgrPlugin = require("vite-plugin-svgr");

module.exports = {
  stories: ["../src/**/stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    config.plugins = [
      ...config.plugins,
      svgrPlugin({
        exportAsDefault: true,
        svgrOptions: {
          icon: true,
        },
      }),
    ];
    return config;
  },
};
