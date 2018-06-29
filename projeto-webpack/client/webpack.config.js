const path = require('path');

module.exports = {
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        
        rules: [
            {
                // arquivos que webpack deve considerar ao comecar a trabalhar
                // todo arquivo que terminar com .js, consdirar
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader' // vai acessar o babelrc e aplicar babel-core nos arquivos
                }

            }
        ]
    }
}