const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.js');


const host = 'localhost';

module.exports = merge(baseConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		bundle: [
			'@babel/polyfill',
			'react-hot-loader/patch',
			`webpack-dev-server/client?http://${host}:3000`,
			'webpack/hot/only-dev-server',
			path.resolve(__dirname, 'src/index.js'),
		],
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: '[name].[hash:16].js',
		chunkFilename: '[id].[hash:16].js',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(), // HMR을 사용하기 위한 플러그인
		new HtmlWebpackPlugin({
			filename: 'index.html',
			title: 'React Design Editor',
		}),
	],
});
