const HtmlWebPackPlugin = require("html-webpack-plugin")

const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
})

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
};