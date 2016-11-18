'use strict';

const exec = require('child_process').execSync;
const commonConfig = require('./config.js');

exports.config = Object.assign({}, commonConfig, {

    capabilities: [{ browserName: 'chrome' }],

    /**
     * Start Selenium Grid
     */
    onPrepare: function(config, capabilities) {
        exec('docker run --restart=always -d -p 4444:4444 --name selenium-hub selenium/hub:3.0.0-dubnium');
        for (let i = 0; i < commonConfig.maxInstances; i++) {
            exec(`docker run --restart=always -d --link selenium-hub:hub --name=chromedriver-${i} selenium/node-chrome:3.0.0-dubnium`);
        }
    },

    /**
     * Stop Selenium Grid
     */
    onComplete: function(exitCode) {
        exec('docker rm -f selenium-hub');
        for (let i = 0; i < commonConfig.maxInstances; i++) {
            exec(`docker rm -f chromedriver-${i}`);
        }
    }

});
