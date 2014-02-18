basic-grunt-setup
=================

A basic grunt setup, using watch, compass and other tools. I personally like to keep all my frontend bits in my media folder.

So change directory to the media folder and make sure everything is installed with:

	npm install
	
If you have all the packages ready you can just use 'grunt' or 'grunt watch' with the watch package.

## Packages to install via Node

### Concat (conact files)
	npm install grunt-contrib-concat --save-dev
	
### Uglify (minifying)
	npm install grunt-contrib-uglify --save-dev
	
### Imagemin (optimising Images)
	npm install grunt-contrib-imagemin --save-dev
	
### SASS
	npm install grunt-contrib-sass --save-dev
	
### Compass (Alterenative to using native SASS)
	npm install grunt-contrib-compass --save-dev
	
### Watch (so you can do live compiling and tasks)
	npm install grunt-contrib-watch --save-dev

### Live Reload
	http://livereload.com/ - So you can do automatic changes!

#### Other notes
I prefer to use compass over the native sass, along with susy for responsive grids. You'll need sass and compass installed to use the sass options.

The command below will install sass

	gem install sass
	
The command below will insall compass

	gem install compass
	
The command below will install susy

	gem install susy
	
The command below will create a project with compass and susy

	compass create <my-project>  -r susy -u susy