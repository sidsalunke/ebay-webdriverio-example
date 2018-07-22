const assert = require('chai').assert;

const productPage = {

    clickAddToCartButton: () => {
        browser.click('#atcRedesignId_btn'); // selector to locate add to cart button
    },

    dismissModal: () => {
        browser.click('.viicon-close'); // selector to locate close button on the popped up modal
    },

    addToCartModalDisplayed: () => {
        browser.waitForVisible('#atcRedesignId_overlay-atc-container'); // selector to locate add to cart modal
    },

    verifyModalHeader: (expectedModalHeader) => {
        const headerLocator = '.vi-overlayTitleBar'; 
        browser.waitForExist(headerLocator);
        const actualModalHeader = browser.getText(headerLocator);
        assert(actualModalHeader, expectedModalHeader, `Expected ${expectedModalHeader} but found ${actualModalHeader}`);
    },

    clickGoToCartButton: () => {
        browser.click('.app-atc-layer__actionRow a.btn.btn-scnd'); // selector to locate go to cart button
    },
};

module.exports = productPage;