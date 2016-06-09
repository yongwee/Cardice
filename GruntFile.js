module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		exec: {
			compile: {
				cmd: 'browserify src/index.js -o main.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('compile', ['exec:compile']);
};
