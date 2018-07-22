
const homepage = {

    openWebsite: () => {
        const url = browser.options.baseUrl; // baseUrl = https://www.ebay.com.au
        browser.url(url);
    },

    searchForProduct: (productToSearch) => {
        const searchBoxLocator = '.ui-autocomplete-input'; // selector to locate search input box
        browser.waitForEnabled(searchBoxLocator);
        browser.setValue(searchBoxLocator, productToSearch);
    },

    clickSearchButton: () => {
        browser.click('#gh-btn'); // selector to locate search button
    },

};

module.exports = homepage;