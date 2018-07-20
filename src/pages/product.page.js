const assert = require('chai').assert;

const productPage = {

    clickAddToCartButton: () => {
        browser.click('#atcRedesignId_btn');
    },

    dismissModal: () => {
        browser.click('.viicon-close');
    },

    addToCartModalDisplayed: () => {
        browser.waitForVisible('#atcRedesignId_overlay-atc-container');
    },

    verifyModalHeader: (expectedModalHeader) => {
        browser.waitForExist('.vi-overlayTitleBar');
        const actualModalHeader = browser.getText('.vi-overlayTitleBar');
        assert(actualModalHeader, expectedModalHeader, 'FAIL!');
    },

    clickGoToCartButton: () => {
        browser.click('.app-atc-layer__actionRow a.btn.btn-scnd');
    },
};

module.exports = productPage;