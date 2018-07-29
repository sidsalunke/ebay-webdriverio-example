const cartPage = {

    getCartProductNames: () => {
        const actualProductNames = browser.getText('.ff-ds3.fs16.mb5.fw-n.sci-itmttl'); // selector to get all product names in the cart
        return actualProductNames;
    },

    getCartSummary: () => {
        const actualCartSummary = browser.getText('div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(1)'); // force to use css selectors to locate elements
        return actualCartSummary;
    }
};

module.exports = cartPage;