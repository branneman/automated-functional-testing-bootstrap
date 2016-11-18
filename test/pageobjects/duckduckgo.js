'use strict';

module.exports = new class Home {

    navigate() {
        browser.url('https://duckduckgo.com/');
    }

    submitSearch(query) {
        browser.setValue('#search_form_input_homepage', query);
        browser.submitForm('#search_form_homepage');
        browser.waitForExist('body', 10e3);
    }

};
