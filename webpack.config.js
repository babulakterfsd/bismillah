const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
      entry: './src/js/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
       },
       mode: 'development',
       module: {
          rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.html$/i,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|ico|jpg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: 'assets/images',
                    outputPath: 'assets/images'
                },
              },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}