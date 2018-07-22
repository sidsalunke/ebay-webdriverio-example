
const productListingPage = {

    pageDisplayed: () => {
        browser.waitForVisible('.srp-main-content--flex'); // wait for page to load
    },

    selectFirstProduct: () => {
        browser.click('#srp-river-results-listing1 > div > div.s-item__info.clearfix > a > h3'); // selector to locate first product
    },
};

module.exports = productListingPage;