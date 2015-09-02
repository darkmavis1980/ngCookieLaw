'use strict';
module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    changelog: {
      options: {
        preset: 'angular',
        file: 'CHANGELOG.md',
        allBlocks: true
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    watch: {
      // Watch for changes in SASS / SCSS files and run sass task
      sass: {
        files: [
          'src/*.{scss,sass}'
        ],
        tasks: ['sass']
      }
    },

    sass: {
      dev: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.{scss,sass}'],
          dest: 'src',
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask('default', ['karma']);
  grunt.registerTask('test', ['karma']);
};
