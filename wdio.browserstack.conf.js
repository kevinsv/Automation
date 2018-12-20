let {config} = require('./wdio.conf');

let {
    BROWSERSTACK_USER = 'kevinsalgado3',
    BROWSERSTACK_KEY = 'ExqqiBACH8tH4ehNwpVX',
} = process.env;

// Patch browserstack service to support marking
// tests as failed on old versions of cucumber
// GitHub: https://github.com/itszero/wdio-browserstack-service/pull/11
require('wdio-browserstack-service').afterStep = function (feature) {
    if (feature.status === 'failed' && feature.failureException) {
        ++this.failures
    }
};

exports.config = global.config = Object.assign({}, config, {
    services: ['browserstack'],

    user: BROWSERSTACK_USER,
    key: BROWSERSTACK_KEY,

    browserstackLocal: true,

    screenshotPath: './errorShots/',
    afterCommand: undefined,
});