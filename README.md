# commerce-sdk

Salesforce Commerce B2C SDK.

[![CircleCI][circleci-image]][circleci-url]

## What is this?

A mono repo containing the tools needed to be a rockstar commerce developer on the Salesforce Commerce B2C platform.

To find more information about the Salesforce Commerce platform services or signing up for Salesforce Commerce please see our platform documentation via the [Commerce Cloud Developer Center](https://developer.commercecloud.com/).

## Packages

### commerce-sdk

This is generated by the generator package and doesn't actually live in code anywhere.  Readme for this package will be in the generator package

[README](./packages/generator/README.md)

### @commerce-apps/core

This represents the core functions that call the APIs and interact with commerce cloud.  This is used by commerce-sdk

[README](./packages/core/README.md)

### @commerce-apps/exchange-connector

This is the package that communicates with exchange to download raml files to build the SDK.  This is used by the generator but not the generated sdk

[README](./packages/exchange-connector/README.md)

## Setup

All of these commands can be run from either the repo root or the package root.

    # To setup
    npm install

    # To build 
    npm run build

## Running Tests
> **Note:** Instructions in Setup section are prerequisites for this section

To run tests in all the packages, execute
```bash
npm test
```
To run tests in debug mode, execute
```bash
npm run test:debug
```
To run tests in the core package only, execute
```bash
npm run test:core
```

To run tests in the exchange-connector package only, execute
```bash
npm run test:ec
```

To run tests in the generator package only, execute
```bash
npm run test:generator
```

### Additional documentation

[Using VSCODE](./docs/vscode.md)
[Code Generation](./packages/generator/docs/GENERATOR.md)


<!-- Markdown link & img dfn's -->
[circleci-image]: https://circleci.com/gh/SalesforceCommerceCloud/commerce-sdk.svg?style=svg&circle-token=c68cee5cb20ee75f00cbda1b0eec5b5484c58b2a
[circleci-url]: https://circleci.com/gh/SalesforceCommerceCloud/commerce-sdk

