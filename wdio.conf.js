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
    // maxInstances: 6,
    capabilities: [{
        maxInstances: 10,
        browserName: 'chrome'
    }],
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
