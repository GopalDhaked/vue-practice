const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry: './src/main.js',
    output:{
            path: path.join(__dirname, "public"),
            filename: "[name].[chunkhash].js",
            publicPath : "/",
            chunkFilename: "[name].[chunkhash].js"
        },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "public")
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
      },      
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                            test: /\.vue$/,
                            use: 'vue-loader'
                        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: true
        }),
        new VueLoaderPlugin()

    ]
}