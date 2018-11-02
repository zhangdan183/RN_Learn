module.exports = {
    entry: './src/less/login.less',
    output: {
        path: './src/styles',
        filename: 'tmp.js'
    },
    module: {
        rules: [{
            test: /\.less$/,
            loader: "react-native-style-loader!less"
        }]
    }
};