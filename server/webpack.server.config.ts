import minimist from 'minimist';
import { normalize } from 'path';
import { Mode } from '../common.interfaces';
import { Configuration as WebpackConfiguration } from 'webpack';

const args = minimist(process.argv.slice(2));
const MODE = args.mode === Mode.PRODUCTION ? Mode.PRODUCTION : Mode.DEVELOPMENT;

const webpackConfig: WebpackConfiguration = {
  target: 'node',
  entry: {
    server: './server/server.tsx',
  },
  output: {
    path: normalize(`${process.env.PWD}/builds/${MODE}/server/`),
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
              configFile: normalize('./server/tsconfig.server.json'),
            },
          },
        ],
      },
      {
        test: /\.scss|css$/,
        use: {
          loader: 'ignore-loader',
        },
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [
          "raw-loader",
          "minify-graphql-loader",
        ]
      },
    ],
  },
};

module.exports = webpackConfig;
