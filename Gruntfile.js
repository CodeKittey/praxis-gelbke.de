
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['client/app/*.js'],
      options: grunt.file.readJSON('.jshintrc')
    },
    concat: {
      build: {
        files: {
          'dist/<%= pkg.name %>.js': [
            'client/app/app.js',
            'client/app/emphases/emphases.js',
            'client/app/emphases/emphases-controller.js',
            'client/app/fotos/fotos.js',
            'client/app/fotos/fotos-controller.js',
            'client/app/about/about.js',
            'client/app/about/about-controller.js',
            'client/app/contact/contact.js',
            'client/app/contact/contact-controller.js',
            'client/app/open/open.js',
            'client/app/open/open-controller.js',
            'client/app/team/team.js',
            'client/app/team/team-controller.js',
            'client/app/way/way.js',
            'client/app/way/way-controller.js'
          ]
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    }
    },
      metrics: {
        files: {
          'dist/metrics': [ 'src/*.js' ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'clean', ]);
  grunt.registerTask('jenkins', ['jshint', 'clean', 'concat', 'uglify']);

};