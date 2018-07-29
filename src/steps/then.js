const { Then } = require('cucumber');

const productListingPage = require ('../pages/productListing.page');
const productPage = require('../pages/product.page');
const assertionsAdapter = require('../support/assertionsAdapter');

Then(
    'The title of the page should be "{string}"', assertionsAdapter.verifyPageTitle
);

Then(
    'I should see the product listing page', productListingPage.pageDisplayed
);

Then(
    'I should see Item added to cart modal', productPage.addToCartModalDisplayed
);

Then(
    'I should see "{string}"', assertionsAdapter.verifyProductModalHeader
);

Then(
    'The cart summary should show "{string}"', assertionsAdapter.verifyCartSummary
);

Then(
    'The name of the "{string}" product added in the cart is "{string}"', assertionsAdapter.verifyCartProductNames
);