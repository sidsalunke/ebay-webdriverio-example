const assert = require('chai').assert;

const cartPage = {

    verifyCartProductNames: (productNumber, expectedProductName) => {
        const actualProductNames = browser.getText('.ff-ds3.fs16.mb5.fw-n.sci-itmttl'); // selector to get all product names in the cart
        assert.include(actualProductNames, expectedProductName, `Expected ${productNumber} product name to be ${expectedProductName} but found ${actualProductNames}`);
    },

    verifyCartSummary: (expectedCartSummary) => {
        const actualCartSummary = browser.getText('div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(1)'); // force to use css selectors to locate elements
        assert.equal(actualCartSummary, expectedCartSummary, `Expected ${expectedCartSummary} but found ${actualCartSummary}`);
    }
};

module.exports = cartPage;