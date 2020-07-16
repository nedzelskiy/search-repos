import minimist from 'minimist';
import { normalize } from 'path';
import { Mode } from '../common.interfaces';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration as WebpackConfiguration, DefinePlugin } from 'webpack';

const args = minimist(process.argv.slice(2));
const MODE = args.mode === Mode.PRODUCTION ? Mode.PRODUCTION : Mode.DEVELOPMENT;

const webpackConfig: WebpackConfiguration = {
  entry: {
    client: './client/client.tsx',
  },
  output: {
    path: normalize(`${process.env.PWD}/builds/${MODE}/client/`),
  },
  watchOptions: {
    aggregateTimeout: 100,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.graphql'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: normalize('./client/tsconfig.client.json'),
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [
          "raw-loader",
          "minify-graphql-loader",
        ],
      },
      {
        test: /\.graphqlconfig$/,
        exclude: /node_modules/,
        use: [
          "json-loader",
        ],
      }
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.GITHUB_AUTH_TOKEN': JSON.stringify(process.env.GITHUB_AUTH_TOKEN),
    }),
    new MiniCssExtractPlugin(),
  ],
};

if (MODE !== Mode.PRODUCTION) {
  webpackConfig.plugins!.push(new LiveReloadPlugin({
    appendScriptTag: true,
    port: 1113,
    delay: 2000,
  }));
}

module.exports = webpackConfig;
