# Overview

[![Static CI Checks](https://github.com/pheeel/Scentbird/actions/workflows/ci.yml/badge.svg)](https://github.com/pheeel/Scentbird/actions/workflows/ci.yml)

This is an E2E-testing framework based on [Playwright](https://playwright.dev/) and [Typescript](https://www.typescriptlang.org/). <br /><br />
Features:
 - Configurable browsers (Chromium, Firefox, WebKit) via .env file
 - Configurable amount of retries and max workers via .env file
 - Basic ESLint configuration
 - Static code analysis on CI with TypeScript Compiler and ESLint


*Bonus*: It also has visual regression tests based on Playwright's built-in screenshot comparison.

## Running tests
First you'll need to install dependencies:
```sh
$ npm install
```

Then, to run tests in a specific browser, you can use one of the following commands:
```sh
# Run all tests in one browser
# Chromium:
$ npm run test:frontend-e2e:chromium
# Safari:
$ npm run test:frontend-e2e:safari
# Firefox:
$ npm run test:frontend-e2e:firefox
```

Or you can also set the browser in the .env file and run the tests as follows:
```sh
# Run tests from path
$ playwright test path/to/specFile
```

To run visual regression tests, you can use the following command:
```sh
# Run visual regression tests (Chromium only)
$ npm run test:frontend-visual
```

To generate and open HTML report of the last tests run:
```sh
# Generate and open HTML report
$ npx playwright show-report
```
