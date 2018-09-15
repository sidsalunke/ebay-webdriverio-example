import homePage from '../pages/home.page';
import productPage from '../pages/product.page';
import productListingPage from '../pages/productListing.page';

const actionsAdapter = {

    openWebsite: () => {
        browser.url(browser.options.baseUrl); // baseUrl = https://www.ebay.com.au
    },

    searchForProduct: (productToSearch) => {
        const searchBoxLocator = homePage.getSearchBoxElement();
        searchBoxLocator.waitForExist(20000);
        searchBoxLocator.setValue(productToSearch)
    },

    clickSearchButton: () => {
        const searchButtonLocator = homePage.getSearchButton();
        searchButtonLocator.click();
    },

    clickAddToCartButton: () => {
        const addToCartButton = productPage.getAddToCartButtonElement();
        addToCartButton.click();
    },

    clickCloseModal: () => {
        const closeModalElement = productPage.getCloseModalElement();
        closeModalElement.click();
    },

    waitForAddToCartModal: () => {
        const addToCartModalElement = productPage.addToCartModalDisplayed();
        addToCartModalElement.waitForExist(20000);
    },

    clickGoToCartButton: () => {
        const goToCartButtonElement = productPage.clickGoToCartButton();
        goToCartButtonElement.click();
    },

    waitForProductListingPage: () => {
        const productListingPageElement = productListingPage.pageDisplayed();
        productListingPageElement.waitForExist(20000);
    },

    selectFirstProduct : () => {
        const firstProduct = productListingPage.selectFirstProduct();
        firstProduct.click();
    }

};

module.exports = actionsAdapter;