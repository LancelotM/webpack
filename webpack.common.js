const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack'); //访问内置的插件
const path = require("path");

module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename:'builde.[hash:6].js',
    },
    resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
		alias: {
            '@': path.join(__dirname, 'src'),
            'components': path.join(__dirname, 'src/components'),
            'common': path.join(__dirname, 'src/common'),
            'images': path.join(__dirname, 'src/images'),
            'config': path.join(__dirname, 'src/config'),
            'pages': path.join(__dirname, 'src/pages'),
		}
    },
    module: {
        rules:[
            { 
                test: /\.(ts|tsx)$/, 
                exclude: /node_modules/, 
                use: ["ts-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // 将 JS 字符串生成为 style 节点
                  'style-loader',
                  // 将 CSS 转化成 CommonJS 模块
                  'css-loader',
                  // 将 Sass 编译成 CSS
                  'sass-loader',
                ],
              },
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
                    name:'assets/[name].[hash:8].[ext]',
                    // limit: 10000,
                    // esModule: false
                },
            }
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