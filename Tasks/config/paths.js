// ======
// #Paths

var path    = {
    cwd     : '../',
    resources : 'Resources/',
    root    : {},
    js      : {},
    scss    : {},
    json: {
        watch: 'JSON/**/*.json'
    }
}

path.build  = path.resources + 'production/'
path.bower  = path.resources + 'bower_components/'

// Root of respective resource types
path.root = {
    js : path.resources + 'js/',
    scss : path.resources + 'scss/',
}

// =====
// #scss
// =====
path.scss = {
    watch   : path.root.scss + '**/*.scss',
    src     : path.root.scss + 'init.scss',
    build   : 'build.scss'
}

// ==========
// #js
// ==========
path.js = {
// Build files
    build   : 'build.js',

// Files to be watched and linted
    watch   : path.root.js + '**/*.js',

    libs    : [
        path.bower + 'angular/angular.js',
        path.bower + 'angular-route/angular-route.min.js',
        path.bower + 'jquery/jquery.js',
    ],

    src     : [
        path.root.js + 'app/app.js',
        path.root.js + 'app/controllers/table.js',
        path.root.js + 'app/collections/table/index.js',
        path.root.js + 'app/directives/table.js',
    ]
};

path.js.all = path.js.libs.concat(path.js.src)

module.exports = path;