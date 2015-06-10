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

    copy: {
      vendor: {
        files: [
          // includes files within path
          {expand: true, src: ['bower_components/mocha/*'], dest: 'vendor/mocha'},
          {expand: true, src: ['bower_components/chai/*'], dest: 'vendor/chai'},
          {expand: true, src: ['node_modules/jquery/dist/*'], dest: 'vendor/jquery'},
        ],
      },
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['copy', 'watch']);
};
