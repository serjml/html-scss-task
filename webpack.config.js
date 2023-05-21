const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // установил и подключил очистку папки дист
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development', // режим запуска
    devtool: isProduction ? false : 'source-map', // дебаг
    watch: !isProduction, // онлайн ватч изменений
    entry: ['./src/index.js', './src/style/style.scss'], // входной файл
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'), // делает абсолютный путь
      assetModuleFilename: 'assets/image/[name].[ext]',
    },
    devServer: {
      port: 4200,
    },
    module: {
      rules: [
        {
          // устновил бабел из вкладки лоадер документации вебпака (для поддержки старых браузеров)
          test: /\.js$/, // формат файлов js
          exclude: /node_modules/, // исключаем из сборки
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpe?g|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(eot|ttf|woff)$/,
          type: 'asset/resource',
          generator: {
            filename: 'assets/fonts/[name].[ext]',
          },
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(), // clean dist folder
      new HtmlWebpackPlugin({
        template: '/src/index.html',
        minify: {
          collapseWhitespace: isProduction,
        },
      }), // удаляем style и script из html
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],
  };

  return config;
};
