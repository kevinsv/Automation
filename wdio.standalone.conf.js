let {config} = require('./wdio.conf');

let {
    BROWSER = 'chrome',
    BROWSER_VERSION = '61',
} = process.env;

exports.config = global.config = Object.assign({}, config, {
    services: ['selenium-standalone'],
    capabilities: [
        Object.assign({
            browserName: BROWSER,
            browser_version: BROWSER_VERSION,
            screenResolution: '1920x1080'
        }, global.isIE && {
            // requireWindowFocus: true,
            ignoreProtectedModeSettings: true,
            ignoreZoomSetting: true,
            'disable-popup-blocking': true,
        })
    ],
    // logLevel: 'verbose'
});
