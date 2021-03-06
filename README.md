# [APCS](http://whroman.github.io/APCS/)

Technologies used:

* [Sass](http://sass-lang.com/)
* [Gulp](http://gulpjs.com/)
* [Bower](http://bower.io)
* [Angular](http://d3js.org/)

##Application

### Requirements
To work on the front-end code of the application, you'll need to have the following CLIs installed before continuing.

* [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
* [Gulp](http://gulpjs.com/): Run `[sudo] npm install -g gulp`
* [Bower](http://bower.io) *: Run `[sudo] npm install -g bower`
* [Ruby](https://www.ruby-lang.org/en/installation/): Comes installed on Macs.
* [Sass](http://sass-lang.com/install) : Run `[sudo] gem install sass`. Version 3.3 or higher is required due to sourcemap support

Then, run `sudo npm install` within `/Tasks` to install the libraries listed in `package.json`.

\* Only necessary if user wants to add third-party libraries/frameworks to project

### Structure

```
root
├── Resources   // Holds all front-end assets, including css, js and templates
|
└── Tasks       // Holds project tasks, including sass and js compiling, js-linting and spinning up a local server

```

## Tasks 

### Structure

```
root
└── Tasks
    ├── Gulpfile.js 
    │       // Project tasks are defined here
    │       // Loads `config` module
    │
    └── config
        ├── index.js   // Allows for `config` directory to be used as a Node module, loading `paths.js` and `options.js`
        ├── options.js // Exposes object containing predefined options for use with Gulp plugins
        └── paths.js   // Exposes object containing file paths of Resources manipulated by Gulp tasks

```
### Usage
    
* `gulp build`
    * Compiles Sass into minified CSS
    * Concatenates and minifies JS
    * Runs JS-Lint on Javascript
    * Destination of build files is defined in `Tasks/config/paths.js`
    
* `gulp` or `gulp dev`
    * Run a local server located at http://localhost:8889 with unminified files or http://localhost:8889 using production-ready files. This allows for development involving HTTP and AJAX requests.
    * Watches all Resources/scss/\*\*/\*.scss and Resources/js/\*\*/\*.js files, automatically compiling and building the resources when a change is detected.
    

## Development

### Getting Started

It is imperative to have the default `gulp` (or `gulp dev`) task running while developing. The dev server is located at `http://localhost:8889`.

### Structure
```
root
└── Resources
    ├── bower_components // Contains all third-party libraries
    ├── js         // Nothing special
    ├── build      // Contains `built` versions of SCSS and JS files, along with sourcemaps
    └── scss
        └── init.scss    // Only scss file that is compiled. Contains `@import`s for the rest of the scss 
```

### Adding New JS Libraries

1. Add lib to project using `bower` in the `Tasks` directory.
2. The lib will appear in `[root]/Resources/bower_components/....`
3. Declare the path to the lib file in `[root]/Tasks/config/paths.js` as an Array item in `path.js.libs`. The files will be concat'd in listed order.


### Adding New JS Files

* Declare the path to the new file in `[root]/Tasks/config/paths.js` as an Array item in `path.js.src`. The files will be concat'd in listed order.


### Adding New SCSS Files

* Include new stylesheets in `/Resources/scss/init.scss` using `@import "relative/path/to/file.scss"`
