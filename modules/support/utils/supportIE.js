
function click(selector) {
    let button = browser.selectorExecute(selector, function(elements) {
        elements[0].click();
        return elements[0];
    });

    console.log(`click by `, selector, button);
}

function setValue(selector, value) {
    // code from https://github.com/vitalyq/react-trigger-change/blob/master/lib/change.js
    let input = browser.selectorExecute(selector, function(elements, value) {
        var event, descriptor;
        var input = elements[0];

        event = document.createEvent('UIEvents');
        event.initEvent('focus', false, false);
        input.dispatchEvent(event);

        input.value = value + '#';
        descriptor = Object.getOwnPropertyDescriptor(input, 'value');
        if (descriptor && descriptor.configurable) {
            delete input['value'];
        }

        input.value = value;

        event = document.createEvent('HTMLEvents');
        event.initEvent('propertychange', false, false);
        event.propertyName = 'value';
        input.dispatchEvent(event);

        event = document.createEvent('HTMLEvents');
        event.initEvent('input', true, false);
        input.dispatchEvent(event);

        return input;
    }, value);

    console.log(`set value in `, selector, input);
}

module.exports = {
    setValue,
    click,
    get isIE() {
        return browser.desiredCapabilities.browserName === 'internet explorer';
    }
};
