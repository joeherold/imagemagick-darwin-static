#!/usr/bin/env node

var fs = require('fs');
var fse = require('fs-extra');
var os = require('os');
var path = require('path');
var decompress = require('decompress');
var decompressTar = require('decompress-tar');
var targz = require('tar.gz');
var version = "7.0.5-5";

// Using callbacks
console.log('Going to extract compressed imagemagick library, version: '+version);
targz().extract(path.join(__dirname, '/bundle/' + version + '.tar.gz'), path.join(__dirname, 'bin/osx/imagemagick'), function (err) {
    if (err)
        console.log('Something is wrong ', err.stack);

    fse.emptyDirSync(path.join(__dirname, "bundle"));
    console.log('Successfully extracted;!');
});


