const { Then } = require('cucumber');

const assertionsAdapter = require('../support/assertionsAdapter');
const actionsAdapter = require('../support/actionsAdapter');

Then(
    'The title of the page should be "{string}"', assertionsAdapter.verifyPageTitle
);

Then(
    'I should see the product listing page', actionsAdapter.waitForProductListingPage
);

Then(
    'I should see Item added to cart modal', actionsAdapter.waitForAddToCartModal
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