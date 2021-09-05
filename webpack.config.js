const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
	mode: "development",
	entry: "./src/js/core.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: "css-loader",
					},
					{
						loader: "postcss-loader",
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "images",
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|ttf|otf|eot)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "fonts",
						},
					},
				],
			},
			{
				test: /\.(mp3|wav|ogg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: "sounds",
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "bundle.css",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "public",
					to: "",
				},
			],
		}),
	],
};
