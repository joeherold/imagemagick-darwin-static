#!/usr/bin/env node

var fs = require('fs');
var fse = require('fs-extra');
var os = require('os');
var path = require('path');

var targz = require('node-tar.gz');

var version = "7.0.5-5";

console.log("removing stuff, that should not be published online for performance reasons");
fse.emptyDirSync(path.join(__dirname, "bin/osx/imagemagick"));
fse.emptyDirSync(path.join(__dirname, "bundle"));


console.log("compressing a tar.gz archive of the imagemagic bundle, in version "+ version);
targz().compress(path.join(__dirname, "bundle_src/"+version), path.join(__dirname, '/bundle/'+version+'.tar.gz'), function(err){
    if(err)
        console.log('Something is wrong ', err.stack);

    console.log('compressing done!');
    console.log("ready to publish");
});