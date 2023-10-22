const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    devtool: 'inline-source-map',
	entry: './src/app.ts',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
    module: {
        rules: [
            {
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                },
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
        extensionAlias: {
            '.ts': [ '.js', '.ts' ]
        }
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            serveIndex: true,
        },
        open: true
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public', to: '.' }
            ]
        })
    ]
}
