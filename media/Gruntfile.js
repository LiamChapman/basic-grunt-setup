module.exports = function(grunt) {
    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {   
		    dist: {
		        src: [
		            'scripts/vendor/*.js', // All JS in the libs folder
		            'scripts/app.js'  // This specific file
		        ],
		        dest: 'scripts/build/app.js',
		    }
		},
		uglify: {
		    build: {
		        src: 'scripts/build/app.js',
		        dest: 'scripts/build/app.min.js'
		    }
		},
		imagemin: {
		    dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'images/',
		            src: ['**/*.{png,jpg,gif}'],
		            dest: 'images/build/'
		        }]
		    }
		},	
		/*sass: {
		    dist: {
		        options: {
		            style: 'compressed'
		        },
		        files: {
		            'stylesheets/screen.css': 'styles/sass/screen.scss'
		        }
		    } 
		},*/
		compass: {
			dist: {
			    options: {
			    	require: 'susy',
			    	config: 'styles/config.rb',
					cssDir: 'styles/stylesheets',
					sassDir: 'styles/sass',
					outputStyle: 'compressed',
					imagesDir: 'images/build',
					javascriptsDir: 'scripts',
					force: true
			    }
			}
		},
		watch: {
			options: {
		        livereload: true
		    },
		    scripts: {
		        files: ['scripts/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    },
		    css: {
			    files: ['styles/sass/*.scss'],
			    //tasks: ['sass'],
			    tasks: ['compass'],
			    options: {
			        spawn: false,
			    }
			}
		}
		
    });
    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    //grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'compass']); //'sass']);
};