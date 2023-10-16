// mocha.config.cjs
module.exports = {
  require: ['ts-node/register', 'tsconfig-paths/register'], 
  extension: ['ts', 'tsx'], 
  spec: '**/*.test.ts*', 
  recursive: true,
};
