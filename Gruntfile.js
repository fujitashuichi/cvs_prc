module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// sass
		sass: {
			styles: {
				files: [{
					src: './src/scss/main.scss',
					dest: './src/dist/css/main.css'
				}]
			}
		},
		autoprefixer: {
			styles: {
				options: {
					browsers: ['last 2 version', 'ie 8']
				},
				files: [{
					src: './src/dist/css/main.css',
					dest: './main/css/main.css'
				}]
			}
		},
		cssmin: {
			styles: {
				files: [{
					src: './main/css/main.css',
					dest: './main/css/main-min.css'
				}]
			}
		},
		// js
		babel: {
			options: {
				sourceMap: false
			},
			dist: {
				files: [{
					src: './src/es6/**/*.js',
					dest: './src/dist/js/<%= pkg.name %>.js'
				}]
			}
		},

		// watch
		watch: {
			sass: {
				files: ['./src/scss/**/*.scss'],
				tasks: 'sass'
			},
			autoprefixer: {
				files: ['./src/dist/css/**/*.css'],
				tasks: 'autoprefixer'
			},
			cssmin: {
				files: ['./main/css/main.css'],
				tasks: 'cssmin'
			},
			// js
			babel: {
				files: ['./src/es6/**/*.js'],
				tasks: 'babel'
			}
		}
	});

	grunt.registerTask('default', ['watch']);
};
