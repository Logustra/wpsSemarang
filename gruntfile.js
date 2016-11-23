module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.initConfig ({

    // minify javaScript
    uglify: {
      my_target: {
        files : {
          "assets/js/scripts.js" : ["assets/builds/js/*.js"]
        }//files
      }//my_target
    },//uglify

    //compile sass
    sass: {
      options: {
        sourceMap: true,
        outputStyle: "compressed"
      },//options
      dev: {
        files: {
          "assets/builds/css/styles.css": ["assets/builds/sass/*.scss", "assets/builds/sass/abstracts/*.scss", "assets/builds/sass/base/*.scss", "assets/builds/sass/layout/*.scss", "assets/builds/sass/modules/*.scss"]
        }//files
      }//dist
    },//sass

    //automatic browser prefixing
    autoprefixer: {
      options: {
        browser: ["last 6 versions"],
        cascade: true
      },
      my_target: {
        src: "assets/builds/css/styles.css",
        dest: "assets/css/styles.css"
      }
    },

    //watch
    watch : {
      scripts: {
        files : ["assets/builds/js/*.js"],
        tasks : ["uglify"]
      },//scripts
      sass: {
        files : ["assets/builds/sass/*.scss", "assets/builds/sass/abstracts/*.scss", "assets/builds/sass/base/*.scss", "assets/builds/sass/layout/*.scss", "assets/builds/sass/modules/*.scss"],
        tasks : ["sass"]
      },//sass
      html : {
        files: ["*.html"]
      },//html
      autoprefixer: {
        files: ["assets/builds/css/styles.css"],
        tasks: ["autoprefixer"]
      },//autoprefixer
    },//watch

    //livereload
    browserSync: {
      bsFiles: {
        src : ["*.html", "assets/css/styles.css", "assets/js/scripts.js"]
      },
    options: {
      watchTask: true,
        server: {
            baseDir: "./"
        }//server
      }//options
    }//browserSync
  });//initConfig

  grunt.registerTask("default", ["browserSync", "watch"]);
};
