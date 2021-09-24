import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import importProductsFile from '@functions/hello'; //importProductsFile

const serverlessConfiguration: AWS = {
  service: 's3-import-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  package: { individually: true },
  useDotenv: true,
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'eu-west-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      S3_BUCKET: '${env:S3_BUCKET}',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { hello, importProductsFile },
};

module.exports = serverlessConfiguration;
