'use strict';

const commonConfig = require('./config.js');

exports.config = Object.assign({}, commonConfig, {

    services: ['browserstack'],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    capabilities: [{
        browserName: 'chrome',
        os: 'Windows',
        os_version: '10',
        resolution: '1920x1080'
    }, {
        browserName: 'IE',
        browser_version: '8.0',
        os: 'Windows',
        os_version: '7',
        resolution: '1024x768'
    }, {
        platform: 'MAC',
        browserName: 'iPhone',
        device: 'iPhone 5'
    }]

});
