const { When } = require('cucumber');

const homepage = require('../pages/home.page');
const productListingPage = require('../pages/productListing.page')
const productPage = require('../pages/product.page');

When(
    'I search for a product called "{string}"', homepage.searchForProduct
);

When(
    'I click on the search button', homepage.clickSearchButton
);

When(
    'I select the first product from the list', productListingPage.selectFirstProduct
);

When(
    'I click on Add to cart button', productPage.clickAddToCartButton
);

When(
    'I dismiss the add to cart modal', productPage.dismissModal
);

When(
    'I click on Go to cart', productPage.clickGoToCartButton
);