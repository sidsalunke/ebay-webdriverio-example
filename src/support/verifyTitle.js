const assert = require('chai').assert;

const checkTitle = (expectedTitle) => {
        const actualTitle = browser.getTitle();
        assert.strictEqual(actualTitle, expectedTitle, `Expected title of the page to be "${expectedTitle}" but found "${actualTitle}"`);
    }

module.exports = checkTitle;