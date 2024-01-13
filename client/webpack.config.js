const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const dotenv = require('dotenv')
const path = require('path')



const envFilePaths = {
  development: '.env.development'
}

dotenv.config({ path: envFilePaths[process.env.NODE_ENV] })

function passEnvVariables() {
  const reactAppEnvVars = ['BASE_URL']

  const generatedVars = reactAppEnvVars.reduce(
    (envObj, varName) => ({
      ...envObj,
      [`process.env.${varName}`]: JSON.stringify(process.env[varName]),
    }),
    {}
  )

  return new webpack.DefinePlugin({
    ...generatedVars,
  })
}

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    compress: false,
    // https: true,
    port: 3000,
    historyApiFallback: true,
    client: {
      webSocketURL: 'ws://0.0.0.0:3000/ws',
    },
    allowedHosts: 'all',
    static: './',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.js', '.tsx'],
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'assets', noErrorOnMissing: true }],
    }),
    passEnvVariables(),
  ],
}
