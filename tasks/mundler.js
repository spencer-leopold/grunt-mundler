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
    var options = this.options();
    var bundles = this.data.bundles;
    var logger = grunt.log;
    logger.log = logger.writeln; // alias grunt's .write to .log
    options.logger = logger;

    var m = Mundler({
      options: options,
      bundles: bundles
    });

    m.bundle().then(done);
  });

};
