
const homepage = {

    openWebsite: () => {
        const url = browser.options.baseUrl;
        browser.url(url);
    },

    searchForProduct: (productToSearch) => {
        browser.waitForEnabled('.ui-autocomplete-input');
        browser.setValue('.ui-autocomplete-input', productToSearch);
    },

    clickSearchButton: () => {
        browser.click('#gh-btn');
    },

};

module.exports = homepage;