var gulp = require('gulp');

var stylus = require('gulp-stylus'),
    nib = require('nib'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr(),
    nodeProcess,
    spawn = require('child_process').spawn,
    exec = require('child_process').exec,
    DELAY = 0;

var paths = {
    htmlDir: './dev',
    scriptsDir: './dev/scripts',
    stylesDir: './dev/styles',
    server: './server.js',
    html: './dev/*.html',
    scripts: ['./dev/scripts/*.js', '!./dev/scripts/all.js'],
    styles: './dev/styles/*.styl'
};


gulp.task('server', function() {
    if (nodeProcess) {
        nodeProcess.kill();
    }
    nodeProcess = spawn('node', [paths.server]);
    gulp.start('html');
});


gulp.task('html', function() {
    return gulp.src(paths.html)
        .pipe(livereload(server));
});


gulp.task('js', function() {
    return gulp.src(paths.scripts)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scriptsDir))
        .pipe(livereload(server));
});


gulp.task('stylus', function() {
    return gulp.src(paths.styles)
        .pipe(stylus({use: ['nib']}))
        .pipe(concat('all.css'))
        .pipe(gulp.dest(paths.stylesDir))
        .pipe(livereload(server));
});


gulp.task('liveReloadServer', function(next) {
    server.listen(35729, function(err) {
        if (err) return console.error(err);
        next();
    });
});


gulp.task('watch', function() {
    gulp.watch(paths.html, function() {wait('html');});
    gulp.watch(paths.styles, function() {wait('stylus');});
    gulp.watch(paths.server, function() {wait('server');});
    gulp.watch(paths.scripts, function() {wait('js');});

    function wait(task) {
        setTimeout(function() {
            gulp.start(task);
        }, DELAY);
    }
});


gulp.task('default', ['html', 'stylus', 'js', 'liveReloadServer', 'server', 'watch']);

process.on('exit', function() {
    if (nodeProcess) nodeProcess.kill();
});