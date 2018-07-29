const commonChecks = {

    getPageTitle: () => {
        const actualPageTitle = browser.getTitle();
        return actualPageTitle;
    },
};

module.exports = commonChecks;