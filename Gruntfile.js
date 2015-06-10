var path = require('path');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      js: {
        files: ['src/Jaskier.js'],
        tasks: ['browserify:compile']
      },
    },

    browserify: {
      options: {
        external: 'jquery'
      },
      compile: {
        files: {
          'build/Jaskier.js': ['src/Jaskier.js'],
        }
      }
    },

    clean: {
      vendor: ['vendor']
    },

    copy: {
      vendor: {
        files: [
          {expand: true, cwd: 'bower_components/mocha/', src: ['**'], dest: 'vendor/mocha/'},
          {expand: true, cwd: 'bower_components/chai/', src: ['**'], dest: 'vendor/chai/'},
          {expand: true, cwd: 'node_modules/jquery/dist', src: ['**'], dest: 'vendor/jquery/'},
        ],
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'copy', 'watch']);
};
