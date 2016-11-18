'use strict';

const localhostIP = require('ip').address();

module.exports = {

    baseUrl: `http://${localhostIP}:8080`,

    maxInstances: 3,

    specs: [
        './test/spec/**/!(_)*.js'
    ],
    exclude: [],

    sync: true,

    logLevel: 'error',
    coloredLogs: true,

    screenshotPath: './errorShots/',

    waitforTimeout: 2e4,
    connectionRetryTimeout: 9e4,
    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd'
    }

};
