const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack'); //访问内置的插件
const path = require("path");

module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/',
    },
    resolve: {
		extensions: ['*', '.js', '.jsx', '.ts'],
		alias: {
            components: path.join(__dirname, 'src/components'),
            common: path.join(__dirname, 'src/common'),
            images: path.join(__dirname, 'src/images'),
            config: path.join(__dirname, 'src/config'),
            pages: path.join(__dirname, 'src/pages'),
		}
    },
    module: {
        rules:[
            { test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader' },
            { 
                test: /\.css$/, 
                exclude: /node_modules/, 
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'babel-preset-env',
                            "es2015"
                        ]
                    },
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options: {
                    name:'assets/[name].[ext]',
                    // limit: 10000,
                    // name: 'static/media/[name].[hash:8].[ext]',
                    // esModule: false
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name:'assets/[name].[ext]',
                        limit:2048
                    }
                }
            },
        ]
    },
    plugins: [
        //每次清理 output 文件夹
        new CleanWebpackPlugin(),
        //创建html文件
        new HtmlWebpackPlugin({
            title: 'webpack脚手架',
            template:'./template/index.html',
        }),
    ]
};