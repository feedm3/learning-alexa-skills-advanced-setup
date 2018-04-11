const slsw = require('serverless-webpack');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    mode: 'development',
    stats: 'minimal'
};
