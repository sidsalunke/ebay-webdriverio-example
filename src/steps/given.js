import { Given } from 'cucumber';

import actionsAdapter from '../support/actionsAdapter';

Given(
    'I open Ebay Australia website', actionsAdapter.openWebsite
);