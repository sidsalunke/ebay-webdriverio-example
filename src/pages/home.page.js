const homepage = {

    getSearchBoxElement: (productToSearch) => {
        const searchBoxLocator = '.ui-autocomplete-input'; // selector to locate search input box
        const searchBoxElement = browser.element(searchBoxLocator);
        return searchBoxElement;
    },

    getSearchButton: () => {
        const searchButton = browser.element('#gh-btn');
        return searchButton;
    },

};

module.exports = homepage;