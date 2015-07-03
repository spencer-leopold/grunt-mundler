var path = require('path');
var Mundler = require('mundler');
/*
 * grunt-mundler
 * 
 *
 * Copyright (c) 2015 Spencer Leopold <spencer.leopold@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mundler', 'Use mundler with grunt.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var done = this.async();

    var m = Mundler(this.data);
    m.bundle().then(function() {
      done();
    });
  });

};
