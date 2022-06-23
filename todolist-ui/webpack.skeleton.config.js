const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPluugin = require('vue-server-renderer/server--plugin')

module.exports = {
    target: 'node',
    entry: {
        skeleton: './src/skeleton.entry.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rule: [
            {
                test:/\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extension: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueSSRServerPluugin({
            filename: 'skeleton.json'
        })
    ]
}