var estrnSass = require('estrn-sass');
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
    var options = this.options({
      imgPath: 'img',
      outputStyle: 'nested',
      sourceMap: true
    });

    estrnSass(options);
  });

};
