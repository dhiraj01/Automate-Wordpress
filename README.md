# Automate-Wordpress
Up with Gulp tools with wordpress
Shows different possibilities to automate the different processes that are hard
to do manually and can make developer life easy.

## How to automate
- 1.	Project Setup
- a.	Partial variable system and using variables for creating themes
- b.	Browser Prefixes
- c.	Optimization Lint, organize and minify js

## Using SCSS
- d.	Partial files and including into main scss
- e.	Nesting css for better visibility and readability	
- f.	Creating variables and placing in one place
## GULPFILE.JS
## PACKAGE.JSON

- g.	Get starter theme
- h.	Replace text string throught
- i.	Install tools via NPM
- 2.	Active Work


## Yeoman => Generator 

## theme-folder

## yo emi => creates sample theme

We can use Yeoman generator for wordpress also called YoePress
Which help us to automate

- 	Custom directory configuration
- 	Install WordPress as a Git submodule for easy version controlled updates
- 	Theme init hook for when you install a new theme
- 	Permission setting on install
- 	Create your database, all you have to do is make me a user
- 	Built in Vagrant configuration
- 	New Set custom defaults with .yeopress files
- 	New Environment based wp-config files, local-config.php


## How to use

``$ npm install -g yo generator-wordpress``


## And run :


```$ yo wordpress
{
	"git": true,
	"dbHost": "localhost",
	"dbName": "yeopress",
	"dbUser": "yeopress",
	"dbPass": "yeopress"
}
```

## Installing WordPress Plugins

We can also install wordpress plugin using following command
yo wordpress:plugin


## Themes

- custom themes can be installed from GitHub 
- Regarde (grunt-regarde)
- Live Reload (grunt-contrib-livereload)
- Sass (grunt-contrib-sass)
- JSHint (grunt-contrib-jshint)
- Bower (grunt-bower-requirejs)
- RequireJS (grunt-contrib-requirejs)
- Reusing common settings
