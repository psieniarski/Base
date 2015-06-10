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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-notify');

  grunt.registerTask('default', ['watch']);
};
