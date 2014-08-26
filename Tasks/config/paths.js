var batchPaths = require('./batchPaths.js');

// ======
// #Paths

var path    = {
    cwd     : '../',
    resources : 'Resources/',
    root    : {},
    html    : {},
    js      : {},
    css     : {},
    scss    : {},

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

// Root of Angular app
path.root.ngApp = path.root.js + 'app/'

path.js = {
// Angular app files
    models       : path.root.ngApp + 'models/',
    controllers  : path.root.ngApp + 'controllers/',
    collections  : path.root.ngApp + 'collections/',

// Build files
    build    : 'build.js',

// Files to be watched and linted
    watch    : path.root.js + '**/*.js',
}

path.js.libs = batchPaths.suffix('.js')
    .prefix(path.bower)
    .add([
        'angular/angular',
        'angular-route/angular-route.min',
        'jquery/jquery',
    ])
    .all()

path.js.src      = batchPaths.suffix('.js')
    .prefix(path.root.ngApp)
    .add([
        'app'
    ])
    .prefix(path.js.controllers)
    .add([
        'table'
    ])
    .prefix(path.js.collections)
    .add([
        'table/index',
    ])
    .all()

path.js.all = path.js.libs.concat(path.js.src)

module.exports = path;