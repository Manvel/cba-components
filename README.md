# Web components for chromium browser automation

[![Build Status](https://travis-ci.com/browser-automation/cba-components.svg?branch=master)](https://travis-ci.com/browser-automation/cba-components)

Collection of web components to be used in the [CBA](http://chrome-automation.com/):

- [cba-list](https://cba-components.netlify.app/smoke/cba-list) - Single column list.
- [cba-table](https://cba-components.netlify.app/smoke/cba-table) - Multi column table.
- [drag-drop](https://cba-components.netlify.app/smoke/drag-drop) - Drag and dropping cba-list to cba-table example.

## Development

```
npm start // Starts server
npm test // Launch puppeteer tests
```

## Import

```
npm install privacy-manager-components
cba-components // Build and import components
cba-components --single-bundle // Build and import components into single file
// Specify components to import
cba-components --comp pm-table --comp pm-toggle
cba-components --output dirname // Specifies output folder
```

## Structure

- [src](src) - Source codes
- [tests/smoke](tests/smoke) - Smoke tests
- [tests/puppeteer](tests/puppeteer) - Automated tests
