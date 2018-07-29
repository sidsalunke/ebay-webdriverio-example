const assert = require('chai').assert;
const commonChecks = require('./commonChecks');
const cartPage = require('../pages/cart.page');
const productPage = require('../pages/product.page');

const assertionsAdapter = {
    
    verifyPageTitle: (expectedPageTitle) => {
        const actualPageTitle = commonChecks.getPageTitle();
        assert.strictEqual(actualPageTitle, expectedPageTitle, `Expected title of the page to be "${expectedPageTitle}" but found "${actualPageTitle}"`)
    },

    verifyProductModalHeader: (expectedProductModalHeader) => {
        const actualProductModalHeader = productPage.getModalHeader();
        assert.strictEqual(actualProductModalHeader, expectedProductModalHeader, `Expected "${expectedProductModalHeader}" but found "${actualProductModalHeader}"`);
    },

    verifyCartSummary: (expectedCartSummary) => {
        const actualCartSummary = cartPage.getCartSummary();
        assert.strictEqual(actualCartSummary, expectedCartSummary, `Expected ${expectedCartSummary} but found ${actualCartSummary}`);
    },

    verifyCartProductNames: (productNumber, expectedCartProductNames) => {
        const actualCartProductNames = cartPage.getCartProductNames();
        assert.include(actualCartProductNames, expectedCartProductNames, `Expected ${productNumber} product name to be ${expectedCartProductNames} but found ${actualCartProductNames}`);
    }

};

module.exports = assertionsAdapter;