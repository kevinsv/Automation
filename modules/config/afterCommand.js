
let fs = require('fs');
let path = require('path');

module.exports = function (commandName, args, result, error) {
    if (error) {
        let date = new Date();
        let dateString = date.toISOString().replace(/:/g, '.');
        let artifactsPath = global.config.artifactsPath;
        let sourcePath = path.join(artifactsPath, `${dateString}.html`);
        let screenPath = path.join(artifactsPath, `${dateString}.png`);

        if (!fs.existsSync(artifactsPath)) {
            fs.mkdirSync(artifactsPath);
        }

        fs.writeFileSync(sourcePath, browser.source().value);
        browser.saveScreenshot(screenPath);
    }
};
