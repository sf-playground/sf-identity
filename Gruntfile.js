module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dev: {
        options: {
          sassDir: 'css',
          cssDir: 'css'
        }
      }
    },

    watch: {
      compass: {
        files: ['css/src/*.scss', 'css/*.scss'],
        tasks: ['compass:dev']
      }
    }

  });

  // grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['compass']);
  // grunt.registerTask('publish', ['compass', 'coffee']);

};
