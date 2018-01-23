const path = require('path')
const getEntries = require('./entries')

module.exports = {
    entry: getEntries('./src/**/index.js'),
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'weex-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'less-loader'
                    }
                ]
            }
        ]
    }
}