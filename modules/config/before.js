
let overwriteBrowserCommand = require('../support/utils/overwriteBrowserCommand');
let supportIE = require('../support/utils/supportIE');
let chai = require('chai');

module.exports = function () {
    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
    global.browserWaitForTimeout = 60000;

    if (global.isIE) {
        console.log('IE browser');

        // @see https://github.com/webdriverio/webdriverio/issues/1539
        overwriteBrowserCommand(
            'setValue',
            (originalSetValue, selector, value) => {

                let inputElement = $(selector);
                inputElement.clearElement();
                inputElement.setValue(value);

                if (inputElement.getValue() !== value) {
                    // warning! Don't remove it
                    browser.pause(1000);
                }

                let attempts = 10;
                while (attempts && inputElement.getValue() !== value) {
                    inputElement.clearElement();
                    inputElement.setValue(value);
                    attempts--;

                    if (attempts < 7) {
                        supportIE.setValue(selector, value);
                        browser.pause(2000);
                    }

                    console.log(
                        `There were some attempts of "setValue" (${attempts} left). `,
                        `Selector is "${selector}". `,
                        `Expected value is "${value}". `,
                        `Actual value is "${browser.getValue(selector)}"`
                    );
                }
            }
        );

        overwriteBrowserCommand(
            'waitForVisible',
            (originalWaitForVisible, selector, _, reverse) => {
                console.log(`waiting for ${selector}`);
                originalWaitForVisible(selector, global.browserWaitForTimeout, reverse)
            }
        );

        // see https://github.com/seleniumhq/selenium-google-code-issue-archive/issues/1415
        // see https://automatingsoftwaretesting.wordpress.com/2011/08/29/losing-focus-with-webdriver/
        overwriteBrowserCommand(
            'click',
            (originalClick, selector) => {
                supportIE.click(selector);
            }
        );
    }

    // Maximize browser window
    browser.windowHandleSize({width: 1800, height: 1000});

    //global.mainWindowHandle = browser.getCurrentTabId();
};
