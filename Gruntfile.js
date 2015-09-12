module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// sass
		sass: {
			styles: {
				files: [{
					src: 'src/scss/chaashuuu.scss',
					dest: 'src/dist/css/chaashuuu.css'
				}]
			}
		},
		autoprefixer: {
			styles: {
				options: {
					browsers: ['last 2 version', 'ie 8']
				},
				files: [{
					src: 'src/dist/css/chaashuuu.css',
					dest: 'index_chaashuuu/css/chaashuuu.css'
				}]
			}
		},
		cssmin: {
			styles: {
				files: [{
					src: 'index_chaashuuu/css/chaashuuu.css',
					dest: 'index_chaashuuu/css/chaashuuu-min.css'
				}]
			}
		},

		watch: {
			sass: {
				files: ['src/scss/**/*.scss'],
				tasks: 'sass'
			},
			autoprefixer: {
				files: ['src/dist/css/**/*.css'],
				tasks: 'autoprefixer'
			},
			cssmin: {
				files: ['index_chaashuuu/css/chaashuuu.css'],
				tasks: 'cssmin'
			}
		}
	});

	grunt.registerTask('default', ['watch']);
};
