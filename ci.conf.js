const wdioConfig = require('./wdio.conf.js');


wdioConfig.config.user = process.env.BROWSERSTACK_USER || '<ENTER_BROWSERSTACK_USER_HERE>',
wdioConfig.config.key = process.env.BROWSERSTACK_KEY || '<ENTER_BROWSERSTACK_KEY_HERE>',

wdioConfig.config.capabilities = [{
    browser: 'chrome',
    browser_version: '67.0',
    os: 'OS X',
    os_version: 'Sierra',
    resolution: '1280x1024',
    'browserstack.selenium_version' : '3.11.0', // latest version available on Browserstack
   'browserstack.timezone': 'Sydney',
},{
    os: 'OS X',
    os_version: 'Sierra',
    browserName : 'Firefox',
    browser_version : '61.0',
   'browserstack.selenium_version' : '3.11.0', // latest version available on Browserstack
   'browserstack.timezone': 'Sydney',
   resolution: '1280x1024',
}];

wdioConfig.config.services = ['browserstack'];

exports.config = wdioConfig.config;
