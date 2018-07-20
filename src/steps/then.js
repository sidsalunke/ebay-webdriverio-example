const { Then } = require('cucumber');

const productListingPage = require ('../pages/productListing.page');
const productPage = require('../pages/product.page');
const cartPage = require('../pages/cart.page')
const verifyTitle = require ('../support/verifyTitle');

Then(
    'The title of the page should be "{string}"', verifyTitle
);

Then(
    'I should see the product listing page', productListingPage.pageDisplayed
);

Then(
    'I should see Item added to cart modal', productPage.addToCartModalDisplayed
);

Then(
    'I should see "{string}"', productPage.verifyModalHeader
);

Then(
    'The cart summary should show "{string}"', cartPage.verifyCartSummary
);

Then(
    'The name of the "{string}" product added in the cart is "{string}"', cartPage.verifyCartProductNames
);