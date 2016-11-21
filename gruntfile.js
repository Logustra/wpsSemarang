module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.initConfig ({
    uglify: {
      my_target: {
        files : {
          "assets/js/scripts.js" : ["assets/builds/js/*.js"]
        }//files
      }//my_target
    },//uglify
    sass: {
      options: {
        outputStyle: "expanded",
      },//options
      dev: {
        files: {
          "assets/builds/css/styles.css": ["assets/builds/sass/*.scss", "assets/builds/sass/abstracts/*.scss", "assets/builds/sass/base/*.scss", "assets/builds/sass/layout/*.scss", "assets/builds/sass/modules/*.scss"]
        }//files
      }//dist
    },//sass
    autoprefixer: {
      options: {
        browser: ["lates 2 versions", "ie 11", "edge", "firefox", "safari", "opera", "chrome"]
      },
      my_target: {
        src: "assets/builds/css/styles.css",
        dest: "assets/css/styles.css"
      }
    },
    watch : {
      options: { livereload: true },
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
      },
    }//watch
  });//initConfig
  grunt.registerTask("default", "watch");
};
