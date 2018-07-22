exports.config = {
    deprecationWarnings: true,
    suites: {
        test: [
            'src/features/ebay.feature',
        ],
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    baseUrl: 'https://www.ebay.com.au',
    seleniumLogs: './selenium-logs',
    seleniumArgs: {
        baseURL: 'https://selenium-release.storage.googleapis.com',
        version: '3.13.0', // downgrade to 3.4.0 if there's a java.net.SocketException. 
                          // More info -> https://github.com/webdriverio/webdriverio/issues/2262
        drivers: {
        chrome: {
            version: '2.40',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com',
        },
        firefox: {
            version: '0.21.0',
            arch: process.arch,
            baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
        },
        },
    },
    seleniumInstallArgs: {
        baseURL: 'https://selenium-release.storage.googleapis.com',
        version: '3.13.0', // downgrade to 3.4.0 if there's a java.net.SocketException. 
        // More info -> https://github.com/webdriverio/webdriverio/issues/2262
        drivers: {
        chrome: {
            version: '2.40',
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com',
        },
        firefox: {
            version: '0.21.0',
            arch: process.arch,
            baseURL: 'https://github.com/mozilla/geckodriver/releases/download',
        },
        },
    },
    capabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],
    maxInstances: 2,
    sync: true,
    logLevel: 'error',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    waitforTimeout: 50000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: ['spec', 'dot'],
    cucumberOpts: {
        backtrace: false,
        compiler: [],
        failAmbiguousDefinitions: true,
        failFast: true,
        ignoreUndefinedDefinitions: false,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: [
            './src/steps/given.js',
            './src/steps/then.js',
            './src/steps/when.js',
        ],
        snippetSyntax: undefined,
        strict: true,
        tagExpression: 'not @Pending',
        tagsInTitle: false,
        timeout: 25000000,
    },

    before: function before() {
        browser.windowHandleSize({width: 1600, height: 1600})
    },
};
