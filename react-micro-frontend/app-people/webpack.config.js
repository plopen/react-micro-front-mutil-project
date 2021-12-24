const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv = {}) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "people",
    webpackConfigEnv,
  });

  delete defaultConfig.devServer.firewall;
  delete defaultConfig.devServer.client.host;
  // console.log('defaultConfig', defaultConfig);

  const config = merge(defaultConfig, {
    // customizations go here
  });

  return config;
};
