const productListingPage = {

    pageDisplayed: () => {
        const productListingPageElement = browser.element('.srp-main-content--flex');
        return productListingPageElement;
    },

    selectFirstProduct: () => {
        const firstProductElement = browser.element('#srp-river-results-listing1 > div > div.s-item__info.clearfix > a > h3');
        return firstProductElement;
    },
};

module.exports = productListingPage;