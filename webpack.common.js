const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { HotModuleReplacementPlugin } = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:  ['core-js/stable','regenerator-runtime/runtime',join(__dirname,'./src/app.js')], 
    output: {
        path: join(__dirname, 'dist'), 
        filename: 'bundle.js',
        chunkFilename:'[id].js',
        publicPath:'/hariswb/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }, {
                test: /.vue$/, 
                loader: 'vue-loader'
            },
            {
                test: /\.css$/, 
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
     resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm-bundler.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            template: join(__dirname, './src/index.html')
        })
    ]
}