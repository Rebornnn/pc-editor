const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const nodeExternals = require("webpack-node-externals");

const prodConfig = {
    mode: "production",
    entry: path.join(__dirname, "../src/index.js"),
    output: {
        path: path.join(__dirname, "../lib/"),
        filename: "dist.js",
        libraryTarget: "umd",
        libraryExport: "default",
    },
    // externals: [nodeExternals()],
};
module.exports = merge(prodConfig, baseConfig);