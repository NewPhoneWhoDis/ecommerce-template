// mocha.config.cjs
module.exports = {
  require: ['ts-node/register'],
  extension: ['ts', 'tsx'],
  spec: '**/*.test.ts*', // Updated pattern to match both .ts and .tsx test files
  recursive: true,
};
