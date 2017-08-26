var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: __dirname + "/dist/app.js",
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: './build',
		port: 8000
	},
	module: {
		loaders: [
			{
			    test: /\.(scss)$/,
			    use: [
			    	{
			      		loader: 'style-loader', // inject CSS to page
			    	}, 
			    	{
			      		loader: 'css-loader', // translates CSS into CommonJS modules
			    	}, 
			    	{
			      		loader: 'postcss-loader', // Run post css actions
			      		options: {
			        		plugins: function () { // post css plugins, can be exported to postcss.config.js
			          			return [
			            			require('precss'),
			            			require('autoprefixer')
			          			];
			        		}
			      		}
			    	}, 
			    	{
			      		loader: 'sass-loader' // compiles SASS to CSS
			    	},
			    ]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({  // Also generate a test.html 
      		filename: 'index.html',
      		template: './dist/index.html'
    	}),
		new webpack.ProvidePlugin({
        	$: 'jquery',
        	jQuery: 'jquery',
        	'window.jQuery': 'jquery',
        	Popper: ['popper.js', 'default'],
        	// In case you imported plugins individually, you must also require them here:
        	Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
			Button: "exports-loader?Button!bootstrap/js/dist/button",
			Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
			Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
			Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
			Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
			Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
			Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
			Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
			Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
			Util: "exports-loader?Util!bootstrap/js/dist/util",
      }),
	]
};
module.exports = config;