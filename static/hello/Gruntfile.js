module.exports = function(grunt) {

  grunt.initConfig({
    transport: {
      options: {
        format: 'hello/dist/{{filename}}',  // id format
      },
      hello: {
        files: {
          '.build': ['main.js', 'spinning.js']
        }
      }
    },
    concat: {
      main: {
        options: {
          relative: true  // this will include relative dependencies
        },
        files: {
          'dist/main.js': ['.build/main.js'],
          'dist/main-debug.js': ['.build/main-debug.js']
        }
      }
    },
    uglify: {
      main: {
        files: {
          'dist/main.js': ['dist/main.js']
        }
      }
    },
    clean: {
      build: ['.build']
    }
  })

  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.loadNpmTasks('grunt-cmd-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['transport', 'concat', 'uglify', 'clean']);
}
