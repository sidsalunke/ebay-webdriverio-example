const commonChecks = {

    getPageTitle: () => {
        const actualPageTitle = browser.getTitle();
        return actualPageTitle;
    },
};

export default commonChecks;