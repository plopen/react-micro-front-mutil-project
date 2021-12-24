const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "react-mf";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
    // externals: [
    //   /^@react-mf\/*/,
    // ],
    entry: {
      // Set the single-spa config as the project entry point
      'single-spa.config': './src/react-mf-root-config.js',
    },
  });
  return merge(defaultConfig, {
      // modify the webpack config however you'd like to by adding to this object
      devServer: {
        historyApiFallback: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        // disableHostCheck: true,
      },
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: "src/index.ejs",
          templateParameters: {
            isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          },
        }),
      ],
    },
    {
      // modify the webpack config however you'd like to by adding to this object
      externals: [/^rxjs\/?.*$/],
    }
  );
};
