# azure-seed/azure-functions-typescript
This repository holds the [TypeScript] source code and distributable bundle of **`azure-seed/azure-functions-typescript`**.

[![CircleCI](https://circleci.com/gh/azure-seed/azure-functions-typescript.svg?style=shield)](https://circleci.com/gh/azure-seed/azure-functions-typescript)
[![codecov](https://codecov.io/gh/azure-seed/azure-functions-typescript/branch/master/graph/badge.svg)](https://codecov.io/gh/azure-seed/azure-functions-typescript)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Greenkeeper badge](https://badges.greenkeeper.io/azure-seed/azure-functions-typescript.svg)](https://greenkeeper.io/)

> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.

**`azure-seed/azure-functions-typescript`** is following the common patterns and best practices in backend development on
[Azure Functions] with [TypeScript], using the following features:

- [x] Ready-to-go build system using [Webpack] to work with [TypeScript].
- [x] Managing the type definitions using [@types].
- [x] Minifying the production builds using [UglifyJS Webpack Plugin].
- [x] Unit tests with **[Jest]**, including code coverage.
- [x] Seamless integration with [CircleCI] continuous integration and delivery platform.
- [x] Automatic deployment to [Azure Functions].
- [x] **[backend-tslint-rules]** as configuration preset for [TSLint].

You can find the **project documentation** [here](https://medium.com/burak-tasci).

## Table of contents:
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Setting up upstream repository](#setting-up-upstream-repository)
  - [Building](#building)
- [Directory structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## <a name="prerequisites"></a> Prerequisites
Please ensure that you are using **`Typescript v2.3.4`** or higher.

## <a name="getting-started"> Getting started
### <a name="installation"> Installation
You can install **`azure-seed/azure-functions-typescript`** by simply forking the repo:
```
# clone the repo
$ git clone https://github.com/azure-seed/azure-functions-typescript.git
$ cd azure-functions-typescript
```

### <a name="setting-up-upstream-repository"> Setting up upstream repository
Once you have cloned the repo, you can follow these steps to allow sync changes made in this repo with your fork:
```
# set up `origin`
$ git remote set-url origin [your-fork-repo]

# set up `upstream` to sync future changes
$ git remote add upstream https://github.com/azure-seed/azure-functions-typescript.git

# verify the upstream repo specified for your fork
$ git remote -v
origin    https://github.com/YOUR_USERNAME/[your-fork-repo].git (fetch)
origin    https://github.com/YOUR_USERNAME/[your-fork-repo].git (push)
upstream  https://github.com/azure-seed/azure-functions-typescript.git (fetch)
upstream  https://github.com/azure-seed/azure-functions-typescript.git (push)

# initial push for the fork
$ git push
```

Now, you can create a new directory (*ex: `src/some-other-function`*) to build your codebase out, while benefiting from
the build and deployment tools included by this project.

In order to merge the latest upstream changes, simply follow:
```
# fetch the latest upstream
$ git fetch upstream

# merge the upstream changes
$ git merge upstream/master
```
then handle any conflicts, and go on with building your function app.

### <a name="building"> Building
These are the scripts to lint, test and build this project:
```
# use `yarn` to install the dependencies
$ yarn

# clean artifacts
$ npm run clean

# run tslint
$ npm run lint

# run unit tests
$ npm test

# build
$ npm run build
```

## <a name="directory-structure"></a> Directory structure
```
azure-functions-typescript/
 ├──.circleci/
 |   └──config.yml                                          * CircleCI config
 ├──.github/                                                * issue & pr templates
 ├──coverage/                                               * test coverage reports
 ├──node_modules/                                           * dependencies
 ├──dist/                                                   * output directory to extract bundles
 |
 ├──src/
 |   ├──some-function/                                      * sample function
 |   | 
 |   ├──host.json                                           * hosts info
 |   └──local.settings.json                                 * settings to evaluate APIs at the local environment
 |
 ├──tools/
 |   ├──build/                                              * build tasks
 |   └──deploy/                                             * deployment tasks
 |
 ├──.gitignore                                              * GIT settings
 ├──.jshintrc                                               * jshint config
 ├──CHANGELOG.md                                            * change log
 ├──CODE_OF_CONDUCT.md                                      * code of conduct
 ├──CONTRIBUTING.md                                         * contributing info
 ├──LICENSE                                                 * software license
 ├──package.json                                            * deps management
 ├──README.md                                               * project information
 ├──test-report.xml                                         * JUNIT test results
 ├──tsconfig.json                                           * typescript config
 ├──tslint.json                                             * tslint config
 └──yarn.lock                                               * deps lockfile
```

## <a name="contributing"></a> Contributing
If you want to file a bug, contribute some code, or improve documentation, please read up on the following contribution guidelines:
- [Issue guidelines](CONTRIBUTING.md#submit)
- [Contributing guidelines](CONTRIBUTING.md)
- [Coding rules](CONTRIBUTING.md#rules)
- [Change log](CHANGELOG.md)

## <a name="license"></a> License
The MIT License (MIT)

Copyright (c) 2017 [Burak Tasci]

[TypeScript]: http://www.typescriptlang.org
[Webpack]: http://webpack.github.io
[@types]: https://www.npmjs.com/~types
[UglifyJS Webpack Plugin]: https://github.com/webpack-contrib/uglifyjs-webpack-plugin
[Jest]: https://facebook.github.io/jest
[CircleCI]: https://circleci.com
[Azure Functions]: https://azure.microsoft.com/en-us/services/functions
[backend-tslint-rules]: https://github.com/fulls1z3/backend-tslint-rules
[TSLint]: https://github.com/palantir/tslint 
[Burak Tasci]: https://github.com/fulls1z3
