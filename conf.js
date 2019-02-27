exports.config =  {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000, //60 sec
    allScriptsTimeout: 60000,//60 seconds
    ignoreUncaughtExceptions: true, //This allows cucumber to handle the exception and record it appropriately.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    multiCapabilities: [
        {
            'browserName': 'Chrome',
            chromeOptions: {
                args: ['disable-infobars', 'no-sandbox', 'test-type=browser', 'disable-notifications', 'incognito', 'disable-application-cache'],
            },
            specs: ['features/*.feature']
        }
    ],

    cucumberOpts: {
        require: ['step-definitions/*.js','support/hooks.js']
    },

    onComplete: function () {
        browser.quit();
    }
};

