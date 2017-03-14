'use strict';

const assert = require('assert');
const DuckDuckGo = require('../pageobjects/duckduckgo.js');

describe('DuckDuckGo', function() {

    it('should have the right homepage title', function() {

        DuckDuckGo.navigate();

        const title = browser.getTitle();
        assert.equal(title, 'DuckDuckGo');

    });

    it('should have the right search results page title', function() {

        DuckDuckGo.navigate();
        DuckDuckGo.submitSearch('Selenium Webdriver');

        const title = browser.getTitle();
        assert.equal(title, 'Selenium Webdriver at DuckDuckGo');

    });

});
