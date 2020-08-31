const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
    plugins: [
        new MonacoWebpackPlugin({
            languages: ['javascript','java','cpp','go','python'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 100000,
                    },
                },
            },
        ],
    },
};
