module.exports = function(fn, timeout) {
    let fnError = '';

    try {
        browser.waitUntil(function () {
            try {
                fn();
                return true;
            } catch (_fnError) {
                fnError = _fnError;
                return false;
            }
        }, timeout);
    } catch (err) {
        throw fnError;
    }
};
