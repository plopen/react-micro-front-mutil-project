const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "navbar",
    webpackConfigEnv,
  });

  delete defaultConfig.devServer.firewall;
  delete defaultConfig.devServer.client.host;

  return merge(defaultConfig, {
    // customizations can go here
  });
};
