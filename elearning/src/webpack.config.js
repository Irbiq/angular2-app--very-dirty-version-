var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = {
    /*необходимые файлы для сборки*/
    entry: {
        'polyfills': './app/polyfills',
        'vendor': './app//vendor.ts',
        'app': './app/scripts/main.ts'
    },
    /*куда соберутся файлы после компиляции( .js)*/
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve('tsconfig.json') }
                } , 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },

            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/,loaders: ['style', 'css', 'postcss', 'sass'] }

        /*    {  // до этого комментария все работало если сломается удалить то что выше и раскомментить
                test: /\.css$/,
                exclude: path.resolve('src', 'app'),
                loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
            },
            /!*мб добавить -loader*!/
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract('css!sass')
            },

            {
                test: /\.css$/,
                include: path.resolve('src', 'app'),
                loader: 'raw-loader'
            }*/]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\|\/)core(\|\/)(esm(\|\/)src|src)(\|\/)linker/,
            path.resolve('./src'), // каталог с исходными файлами
            {} // карта маршрутов
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),

        new ExtractTextPlugin('[name].[hash].css'),

        new webpack.NoEmitOnErrorsPlugin(),

        //**********************/////////
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        //**********************/////////

        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),

        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            }
        })
    ]
};