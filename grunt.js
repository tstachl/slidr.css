/*global module:false*/
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
              '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
              '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
              '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
              ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    sass: {
      dist: {
        files: {
          '<%= pkg.name %>.css': 'src/<%= pkg.name %>.scss'
        }
      },
      dev: {
        files: {
          '<%= pkg.name %>.css': 'src/<%= pkg.name %>.scss'
        }
      }
    },
    sass: {
      dist: {
        files: {
          '<%= pkg.name %>.css': 'src/<%= pkg.name %>.scss'
        }
      }
    },
    mincss: {
      compress: {
        files: {
          '<%= pkg.name %>.min.css': [ '<%= pkg.name %>.css' ]
        }
      }
    },
    concat: {
      lib: {
        src: ['<banner:meta.banner>', '<%= pkg.name %>.css'],
        dest: '<%= pkg.name %>.css'
      },
      minlib: {
        src: ['<banner:meta.banner>', '<%= pkg.name %>.min.css'],
        dest: '<%= pkg.name %>.min.css'
      }
    },
    watch: {
      files: 'src/*.scss',
      tasks: 'default'
    },
    server: {
      port: 4000,
      base: './'
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-mincss');
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('run', 'server watch');
  grunt.registerTask('deploy', 'sass mincss concat');
};