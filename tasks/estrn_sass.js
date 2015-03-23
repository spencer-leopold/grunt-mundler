var path = require('path');
var EstrnSass = require('estrn-sass');
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
      watch: false
    });

    var i = 0;
    this.files.forEach(function(files) {
      options.cwd = files.orig.cwd;
      options.src = files.orig.src;
      options.dest = files.orig.dest;

      var sass = new EstrnSass(options, done);

      if (!options.watch) {
        files.src.forEach(function(file) {
          i++;
          var filename = path.basename(file);
          if (filename[0] !== '_') {
            sass.compileSass(file);
          }
        }.bind(this));

        if (i >= files.src.length) {
          setTimeout(function() {
            done();
          }, 500)
        }
      }
    }.bind(this));

  });

};
