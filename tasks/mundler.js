/*
 * grunt-mundler
 * 
 *
 * Copyright (c) 2015 Spencer Leopold <spencer.leopold@gmail.com>
 * Licensed under the MIT license.
 */

'use strict';

var Mundler = require('mundler');

module.exports = function(grunt) {

  grunt.registerMultiTask('mundler', 'Use mundler with grunt.', function() {
    var self = this;
    var _ = grunt.util._;
    var done = _.once(self.async());
    var options = this.data;
    var watch;

    for (var bundle in options) {
      if (options.hasOwnProperty(bundle)) {
        if (!!options[bundle].watch) {
          watch = true;
        }
      }
    }

    var m = Mundler(this.data);

    m.bundle().then(function(buf) {
      if (!watch) {
        done();
      }
    });
  });

};
