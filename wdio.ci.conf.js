let {config} = require('./wdio.browserstack.conf');
let ieConfig = require('./modules/config/ie.config');

let {
    TEST_BUILD = 'unrecognized_ci_build',
    TEST_SPEC,
    TEST_BROWSER = 'chrome',
    TEST_BROWSER_VERSION = '61',
    TEST_PLATFORM = 'windows',
    TEST_PLATFORM_VERSION = '7',
    TEST_REPORTER = 'teamcity'
} = process.env;

exports.config = global.config = Object.assign({}, config, {
    baseUrl: 'http://app',
    specs: [TEST_SPEC],

    capabilities: [
        Object.assign({
            name:  `${TEST_BROWSER}:${TEST_SPEC}`,
            build: `ci${global.isIE ? '-ie' : ''}: ${TEST_BUILD}`,
            os: TEST_PLATFORM,
            os_version: TEST_PLATFORM_VERSION,
            browserName: TEST_BROWSER,
            browser_version: TEST_BROWSER_VERSION,
            resolution: '1920x1080',
            'browserstack.local': true,
            'browserstack.debug': true,
            'browserstack.video': true,
            'browserstack.console': 'verbose',
            'browserstack.networkLogs': true
        }, global.isIE && ieConfig)
    ],

    artifactsPath: '/errorShots/',
    screenshotPath: '/errorShots/',

    reporters: [TEST_REPORTER],
});
