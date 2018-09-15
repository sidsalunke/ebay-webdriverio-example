import { Given } from 'cucumber';

const actionsAdapter = require('../support/actionsAdapter');

Given(
    'I open Ebay Australia website', actionsAdapter.openWebsite
);