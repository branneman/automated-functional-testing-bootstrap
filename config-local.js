'use strict';

const commonConfig = require('./config.js');
const selenium = require('selenium-standalone');

let seleniumChild;

exports.config = Object.assign({}, commonConfig, {

    capabilities: [{ browserName: 'chrome' }],

    onPrepare: function() {
        selenium.start((err, child) => {
            if (err) {
                console.log(err);
                return process.exit();
            }
            seleniumChild = child;
        });
    },

    onComplete: function() {
        if (seleniumChild) {
            seleniumChild.kill();
        }
    }

});
