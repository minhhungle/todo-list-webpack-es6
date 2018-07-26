var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry: './src/app.js',
    output: {
        filename: './asset/main.js'
    },
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery'",
			"window.$": "jquery"
		})
	],
	module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            }
        ],
		rules: [
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			}
		]
    }
};
