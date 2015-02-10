var path = require('path');
var EstrnSass = require('../../estrn-sass');
/*
 * grunt-estrn-sass
 * 
 *
 * Copyright (c) 2015 Spencer Leopold <spencerl@easternstandard.com>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('estrn_sass', 'Use estrn-sass with grunt.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var done = this.async();
    var options = this.options({
      outputStyle: 'nested',
      sourceMap: false,
      autoRun: false,
      watch: false
    });

    this.files.forEach(function(files) {
      options.cwd = files.orig.cwd;
      options.src = files.orig.src;
      options.dest = files.orig.dest;
      var sass = new EstrnSass(options);

      files.src.forEach(function(file) {
        var filename = path.basename(file);
        if (filename[0] !== '_') {
          sass.compileSass(file);
        }
      }.bind(this));
    }.bind(this));

  });

};