const {Given, When} = require('cucumber');

Given('User navigates to the main page {string}', (comment) => {
    return console.log(comment);
});

When('User navigates to the main page with url {string}', (url) => {
    return browser.driver.get(url);
});

When('User clicks {string} {string}', (_, locator) => {
    const elem = element(by.css(locator));
    return elem.click();
});

When('User clicks {string} {string} with text {string}', (_, locator, text) => {
    const elem = element(by.cssContainingText(locator, text));
    return elem.click();
});

When('User moves mouse over {string} {string}', (_,locator) => {
    const elem = element(by.css(locator));

    return browser.actions().mouseMove(elem).perform();
});

When('User waits {int} seconds', (second) => {
    return browser.sleep(second);
});



