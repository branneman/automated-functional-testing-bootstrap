# Automated Functional Testing bootstrap

## Features
- Has a local endpoint, spawning and connecting to a Selenium Standalone
- Has a docker endpoint, spawning and connecting to a Selenium Grid
- Has a remote endpoint, connecting to BrowserStack Automate
- Has implemented the Pageobject Pattern
- Has Mocha configured, with 3 example tests
- Has common, local and remote configuration files

## Setup
- External dependencies:
  - Node.js installed, at least v4
  - Docker installed (native for macOS & Windows, not boot2docker!)
  - BrowserStack account with Automate permissions
  - BrowserStackLocal
- Set browserstack credentials in your environment:  
  `BROWSERSTACK_USERNAME=johndoe BROWSERSTACK_ACCESS_KEY=abc123`
- Clone or download this repository
- Run `npm install` inside the newly created folder
- To run the local example you need to run a localhost webserver:  
  ```
  node node_modules/.bin/http-server -P http://saucelabs.com/test/
  ```
- To run the remote example you need to run BrowserStackLocal for internal urls:  
  ```
  ./BrowserStackLocal $BROWSERSTACK_ACCESS_KEY
  ```

## Run tests
- Local: `npm run test-local`
- Docker: `npm run test-docker`
- Remote: `npm run test-remote`
