// ========
// #Options

var path = require('./paths.js');
var options = {};

options.gulpSrc = {
    cwd     : path.cwd,
};

options.gulpNoRead = {
    cwd     : path.cwd,
    read    : false
};

options.uglify = {
    mangle: false,
    outSourceMap: true
};

options.scss = {
    style: 'compressed'
};

options.connect = {
    root    : [path.cwd],
    port    : '8889',
    livereload : false
}

module.exports = options;