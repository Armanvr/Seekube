const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	devtool: 'source-map',
	watch: true,
	entry: {
		main: './index'
	},
	output: {
		filename: '[name].js?[chunkhash]',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						"preact"
					],
					plugins: [
						[
							'@babel/plugin-transform-react-jsx',
							{
								pragma: 'h',
								pragmaFrag: "Fragment"
							}
						]
					]
				}
			}
		}]
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			title: 'Seekube',
			template: 'index.html'
		}),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 5000,
			server: {
				baseDir: ['dist'],
			},
			index: "index.html"
		})
	]
};
