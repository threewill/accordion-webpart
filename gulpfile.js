'use strict';

const gulp = require('gulp');
const path = require('path');
const build = require('@microsoft/sp-build-web');

function srcPath(subdir) {
    return path.join(__dirname, "lib/webparts/accordion/", subdir);
}

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        generatedConfiguration.resolve.alias["@models"] = srcPath('models');
        generatedConfiguration.resolve.alias["@redux"] = srcPath('redux/');
        generatedConfiguration.resolve.alias["@components"] = srcPath('components/');

        return generatedConfiguration;
    }
});
build.initialize(gulp);
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.initialize(require('gulp'));
