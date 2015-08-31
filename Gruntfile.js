'use strict';
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-conventional-changelog');

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
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['karma']);
    grunt.registerTask('test', ['karma']);
};
