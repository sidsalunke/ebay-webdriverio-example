const cartPage = {

    getCartProductNames: () => {
        const actualProductNames = browser.elements('.cart-bucket-lineitem'); // selector to get all product names in the cart
        return actualProductNames;
    },

    getCartSummary: () => {
        const actualCartSummary = browser.getText('.cartsummary > table:nth-child(3) > tr:nth-child(2) > td:nth-child(1)'); // force to use css selectors to locate elements
        return actualCartSummary;
    }
};

export default cartPage;