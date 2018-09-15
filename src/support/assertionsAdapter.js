import { assert } from 'chai';
import commonChecks from './commonChecks';
import cartPage from '../pages/cart.page';
import productPage from '../pages/product.page';

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

export default assertionsAdapter;