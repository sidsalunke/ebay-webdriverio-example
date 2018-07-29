const productPage = {

    getAddToCartButtonElement: () => {
        const addToCartButtonElement = browser.element('#atcRedesignId_btn');
        return addToCartButtonElement
        // browser.click('#atcRedesignId_btn'); // selector to locate add to cart button
    },

    getCloseModalElement: () => {
        const closeModalElement = browser.element('.viicon-close');
        return closeModalElement;
    },

    addToCartModalDisplayed: () => {
        const addToCartModalElement = browser.element('#atcRedesignId_overlay-atc-container');
        return addToCartModalElement;
    },

    getModalHeader: () => {
        const headerLocator = 'a.vi-VR-btnWdth-XL:nth-child(1) > span:nth-child(1) > span:nth-child(1)'; // selector to locate checkout button in modal
        browser.waitForExist(headerLocator);
        const actualModalHeader = browser.getText(headerLocator);
        return actualModalHeader;
    },

    clickGoToCartButton: () => {
        const goToCartButtonElement = browser.element('.app-atc-layer__actionRow a.btn.btn-scnd');
        return goToCartButtonElement;
    },
};

module.exports = productPage;