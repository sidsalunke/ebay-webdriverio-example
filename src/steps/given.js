const { Given } = require('cucumber');

const homepage = require('../pages/home.page');

Given(
    'I open Ebay Australia website', homepage.openWebsite
);