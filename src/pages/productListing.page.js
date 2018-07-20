
const productListingPage = {

    pageDisplayed: () => {
        browser.waitForVisible('.srp-main-content--flex');
    },

    selectFirstProduct: () => {
        browser.click('#srp-river-results-listing1 > div > div.s-item__info.clearfix > a > h3');
    },
};

module.exports = productListingPage;