# ebay-webdriverio-example

UI test automation project using WebdriverIO and Javascript to test Ebay Australia website

### Prerequisites

Following should be installed before running the project

```
1. Node should be installed
2. AWS account should be setup with necessary permissions
```

### Installing

1. Install necessary dependencies

```
npm install
```

2. To run the project locally using selenium-standalone

```
npm run test:local
```
3. To run the project using browserstack

```
1a. Navigate to project rename .env.template to .env and add your own access details 
            OR
1b. Add your browserstack credentials directly in the ci.conf.js file
2. npm run test:ci
```

# The Page Object Pattern
One of the challenges of writing test automation is keeping your selectors (classes, id's, or xpath') up to date with the latest version of your code. The next challenge is to keep the code you write nice and DRY (don't repeat yourself). The page object pattern helps us accomplish this in one solution. Instead of including our selectors in our step definitions, we instead place them in a <pagename>.js file where we can manage all these selectors together.

You can also place reusable functions or logic inside of these pages and call them from your step files. The page object serves as a layer of abstraction between tests and code. When A test fails, it fails on a individual step. That step may call a selector that is no longer valid, but that selector may be used by many other steps. By having a single source of truth of what the selector is supposed to be, fixing one selector on the page object could repair a number of failing tests that were affected by the same selector.

An object called Page will be created with the prototype model. This ensures that every instance of a page object is exported as a stateless construct. Any any changes to that state are handled in the browser, rather than on the server.

It is preferable to separate page objects into individual files that end with .page.js. These will require the basic page.js prototype construct and create new objects for each individual page.

You can find a list of all pages here -> src/pages/*.page.js

# Test Reporting
On every execution of the test suite, a report will be generated on completion showing what tests have passed or failed. using the following reporters:

```
1. Spec
2. Dot
```
If a test has resulted in a failure a reasonable amount of information will be provided in the report to assist with debugging the issue, this could be either a meaningful error message detailing the reason of the fail and/or a screenshot.

# Possible issues

```
1. Test run slower on chrome than firefox (need to investigate why this happens)
2. intermittently, chrome will return a java socket error. Apparently this is a selenium issue and a workaround would be to degrade the selenium version to 3.4.0 as suggested here -> https://github.com/webdriverio/webdriverio/issues/2262
```