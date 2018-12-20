
import {isIE} from '../utils/supportIE';

export default function getLastOpenedWindowHandle() {
    if (!isIE) {
        return browser.windowHandles().value.slice(-1)[0];
    }

    let windowHandles = browser.windowHandles().value;
    console.log('windowHandles', windowHandles);

    let currentWindowHandle = browser.getCurrentTabId();

    console.log('current windowHandle is ', currentWindowHandle);

    let lastWindowHandle = windowHandles.find((handle) => (
        ![global.mainWindowHandle, currentWindowHandle].includes(handle)
    ));

    console.log('lastWindowHandle', lastWindowHandle);

    return lastWindowHandle || currentWindowHandle;
}
