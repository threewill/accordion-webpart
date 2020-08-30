'use strict';

const gulp = require('gulp');
const path = require('path');
const build = require('@microsoft/sp-build-web');

const webpack = require("webpack");
const getClientEnvironment = require("./process-env");

function srcPath(subdir) {
    return path.join(__dirname, "lib/webparts/accordion/", subdir);
}

build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        generatedConfiguration.resolve.alias["@models"] = srcPath('models');
        generatedConfiguration.resolve.alias["@redux"] = srcPath('redux/');
        generatedConfiguration.resolve.alias["@components"] = srcPath('components/');

        let pluginDefine = null;
        for (var i = 0; i < generatedConfiguration.plugins.length; i++) {
            var plugin = generatedConfiguration.plugins[i];
            if (plugin instanceof webpack.DefinePlugin) {
                pluginDefine = plugin;
            }
        }

        const currentEnv = getClientEnvironment().stringified;

        if (pluginDefine) {
            pluginDefine.definitions = { ...pluginDefine.definitions, ...currentEnv };
        } else {
            generatedConfiguration.plugins.push(new webpack.DefinePlugin(currentEnv));
        }
 
        return generatedConfiguration;
    }
});

build.initialize(gulp);

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.initialize(require('gulp'));
