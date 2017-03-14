'use strict';

const assert = require('assert');

describe('MyProject (local)', function() {

    it('Home', function() {

        browser.url('/guinea-pig');

        const title = browser.getTitle();
        assert(/^I am a page title.*$/.test(title));

    });

});
