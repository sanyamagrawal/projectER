/*Every Gruntfile (and gruntplugin) uses this basic format, and all of your Grunt code must be specified inside this function:

Basic Grunt Structure
    module.exports = function(grunt) {

        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'), // the package file to use

            taskName: {
                // internal task or name of a plugin (like "qunit")
                // options, etc (see the task/plugin for details)
            },
            ...
        });

        // load up your plugins
        grunt.loadNpmTasks('grunt-contrib-pluginName');

        // register one or more task lists (you should ALWAYS have a "default" task list)
        grunt.registerTask('default', ['taskToRun']);
        grunt.registerTask('taskName', ['taskToRun', 'anotherTask']);
    };

*/

/* jshint node: true */
module.exports = function(grunt) {
    // Do grunt-related things in here

    //STEP1: Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        /* Everyime we do a build, It would be convinent to delete the files and re install it */
        clean: {
            build: {
                src: ["./src/src"]
            }

        },

        compass: { // Task
            dist: { // Target
                options: { // Target options
                    sassDir: "./src/sass/",
                    cssDir: "./src/css/"
                }
            }
        },

        watch: {
            sass: {
                files: ["./src/sass/**/*.scss"],
                tasks: ["compass:dist"]
            }
        }

    });

    //STEP2: Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-watch");

    //STEP3: Default task(s).
    grunt.registerTask("default", ["compass", "watch"]);
};