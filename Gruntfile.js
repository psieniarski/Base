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
          // includes files within path
          { src: ['bower_components/mocha/*'], dest: 'vendor/mocha' },
          { src: ['bower_components/chai/*'], dest: 'vendor/chai' },
          { src: ['node_modules/jquery/dist/*'], dest: 'vendor/jquery' },
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
