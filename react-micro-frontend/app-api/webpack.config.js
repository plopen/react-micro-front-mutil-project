const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "api",
    webpackConfigEnv,
  });

  delete defaultConfig.devServer.firewall;
  delete defaultConfig.devServer.client.host;

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // externals: [/^rxjs\/?.*$/],
  });
};
