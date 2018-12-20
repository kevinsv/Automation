let {config} = require('./wdio.browserstack.conf');
let ieConfig = require('./modules/config/ie.config');

let {
    BROWSER = 'chrome',
    BROWSER_VERSION = '61',
    PLATFORM = 'windows',
    PLATFORM_VERSION = '7',
} = process.env;

let position = process.argv.indexOf('--spec');
let name = process.argv[position + 1] || BROWSER;

exports.config = global.config = Object.assign({}, config, {
    capabilities: [
        Object.assign({
            name,
//            build: `local: ${git.short()}`,
            os: PLATFORM,
            os_version: PLATFORM_VERSION,
            browserName: BROWSER,
            browser_version: BROWSER_VERSION,
            resolution: '1920x1080',
            'browserstack.local': true,
            'browserstack.debug': true,
            'browserstack.video': true,
            'browserstack.console': 'verbose',
            'browserstack.networkLogs': true,
        }, global.isIE && ieConfig)
    ],
    // logLevel: 'verbose'
    // deprecationWarnings: false
});
