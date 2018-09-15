import { When } from 'cucumber';

import actionsAdapter from '../support/actionsAdapter';

When(
    'I search for a product called "{string}"', actionsAdapter.searchForProduct
);

When(
    'I click on the search button', actionsAdapter.clickSearchButton
);

When(
    'I select the first product from the list', actionsAdapter.selectFirstProduct
);

When(
    'I click on Add to cart button', actionsAdapter.clickAddToCartButton
);

When(
    'I dismiss the add to cart modal', actionsAdapter.clickCloseModal
);

When(
    'I click on Go to cart', actionsAdapter.clickGoToCartButton
);